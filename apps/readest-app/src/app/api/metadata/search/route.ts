import { NextRequest, NextResponse } from 'next/server';
import { MetadataService } from '@/services/metadata/service';
import { SearchRequest } from '@/services/metadata/types';
import { validateUserAndToken } from '@/utils/access';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
  responseTime?: number;
}

function validateSearchRequest(body: SearchRequest): {
  isValid: boolean;
  error?: string;
  data?: SearchRequest;
} {
  const { title, isbn, author, language } = body;

  if (
    (!title || typeof title !== 'string' || title.trim().length === 0) &&
    (!isbn || typeof isbn !== 'string' || isbn.trim().length === 0)
  ) {
    return {
      isValid: false,
      error: 'Either title or isbn parameter is required and must be a non-empty string',
    };
  }

  if (title && typeof title !== 'string') {
    return { isValid: false, error: 'Title must be a string if provided' };
  }

  if (isbn && typeof isbn !== 'string') {
    return { isValid: false, error: 'ISBN must be a string if provided' };
  }

  if (author && typeof author !== 'string') {
    return { isValid: false, error: 'Author must be a string if provided' };
  }

  if (isbn) {
    const cleanIsbn = isbn.replace(/[-\s]/g, '');
    if (!/^\d{10}(\d{3})?$/.test(cleanIsbn)) {
      return { isValid: false, error: 'Invalid ISBN format. Must be 10 or 13 digits' };
    }
  }

  return {
    isValid: true,
    data: {
      title: title?.trim(),
      isbn: isbn?.trim(),
      author: author?.trim(),
      language: language?.trim(),
    },
  };
}

function createResponse<T>(
  success: boolean,
  data: T | null = null,
  error: string | null = null,
  responseTime: number,
): ApiResponse<T> {
  return {
    success,
    data: data || undefined,
    error: error || undefined,
    timestamp: new Date().toISOString(),
    responseTime,
  };
}

let metadataService: MetadataService;

// 2026-10-12 P2：刮削结果服务端缓存——同书 24 小时内不重复外呼 Google/OpenLibrary
const searchResultCache = new Map<string, { ts: number; data: unknown }>();
const SEARCH_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const SEARCH_CACHE_MAX_ENTRIES = 200;
const searchCacheKeyFor = (b: SearchRequest): string =>
  [b.title || '', b.isbn || '', b.author || '', b.language || ''].join('|').toLowerCase().trim();

function getMetadataService(): MetadataService {
  if (!metadataService) {
    metadataService = new MetadataService({
      googleBooksApiKeys: process.env['GOOGLE_BOOKS_API_KEYS'],
    });
  }
  return metadataService;
}

export async function POST(request: NextRequest) {
  const { user, token } = await validateUserAndToken(request.headers.get('authorization'));
  if (!user || !token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 403 });
  }

  const startTime = Date.now();

  try {
    const body = await request.json();
    const validation = validateSearchRequest(body);
    if (!validation.isValid) {
      const responseTime = Date.now() - startTime;
      return NextResponse.json(createResponse(false, null, validation.error!, responseTime), {
        status: 400,
      });
    }

    const service = getMetadataService();
    const cacheKey = searchCacheKeyFor(validation.data!);
    const cachedHit = searchResultCache.get(cacheKey);
    if (cachedHit && Date.now() - cachedHit.ts < SEARCH_CACHE_TTL_MS) {
      return NextResponse.json(createResponse(true, cachedHit.data as never, null, Date.now() - startTime));
    }
    const result = await service.search(validation.data!);
    if (result) {
      searchResultCache.set(cacheKey, { ts: Date.now(), data: result });
      if (searchResultCache.size > SEARCH_CACHE_MAX_ENTRIES) {
        const oldestKey = searchResultCache.keys().next().value as string;
        searchResultCache.delete(oldestKey);
      }
    }
    const responseTime = Date.now() - startTime;

    if (!result) {
      return NextResponse.json(createResponse(false, null, 'Book not found', responseTime), {
        status: 404,
      });
    }

    return NextResponse.json(createResponse(true, result, null, responseTime), {
      status: 200,
    });
  } catch (error) {
    const responseTime = Date.now() - startTime;
    console.error('Search API error:', error);

    let errorMessage = 'Internal server error';
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;

      if (error.message.includes('rate limit')) {
        statusCode = 429;
      } else if (error.message.includes('forbidden') || error.message.includes('API key')) {
        statusCode = 403;
      } else if (error.message.includes('Invalid ISBN')) {
        statusCode = 400;
      }
    }

    return NextResponse.json(createResponse(false, null, errorMessage, responseTime), {
      status: statusCode,
    });
  }
}
