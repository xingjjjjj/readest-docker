import { NextRequest, NextResponse } from 'next/server';
import { EdgeSpeechTTS, EdgeTTSPayload } from '@/libs/edgeTTS';
import { validateUserAndToken } from '@/utils/access';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { STORAGE_ROOT } from '../../storage/_lib/localFs';

const getLangFromVoice = (voiceId: string): string => {
  const match = voiceId.match(/^([a-z]{2}-[A-Z]{2})/);
  return match ? match[1]! : 'en-US';
};

const isValidVoice = (voiceId: string): boolean => {
  return EdgeSpeechTTS.voices.some((v) => v.id === voiceId);
};

// 2026-10-12 TTS 结果缓存：音色+语速+文本 命中即免外呼微软（P2 优化）
const TTS_CACHE_MAX_ITEM_BYTES = 2 * 1024 * 1024;
const TTS_CACHE_MAX_TOTAL_BYTES = 200 * 1024 * 1024;

async function saveTtsCache(cachePath: string, buffer: Buffer): Promise<void> {
  try {
    if (buffer.byteLength === 0 || buffer.byteLength > TTS_CACHE_MAX_ITEM_BYTES) return;
    const dir = path.dirname(cachePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(cachePath, buffer);
    const entries = await fs.readdir(dir);
    const stats = await Promise.all(
      entries.map(async (name) => {
        try {
          const st = await fs.stat(path.join(dir, name));
          return { p: path.join(dir, name), size: st.size, mtime: st.mtimeMs };
        } catch {
          return null;
        }
      }),
    );
    const valid = (stats.filter(Boolean) as Array<{ p: string; size: number; mtime: number }>).sort(
      (a, b) => a.mtime - b.mtime,
    );
    let excess = valid.reduce((sum, e) => sum + e.size, 0) - TTS_CACHE_MAX_TOTAL_BYTES;
    for (const e of valid) {
      if (excess <= 0) break;
      try {
        await fs.unlink(e.p);
        excess -= e.size;
      } catch {
        // ignore prune errors
      }
    }
  } catch {
    // 缓存写入失败不影响响应
  }
}

export async function POST(request: NextRequest) {
  const { user, token } = await validateUserAndToken(request.headers.get('authorization'));
  if (!user || !token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { input: text, voice, speed = 1.0 } = body;
    let { rate, lang } = body;

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: { message: 'Missing or invalid "input" field', type: 'invalid_request_error' } },
        { status: 400 },
      );
    }

    if (!voice || typeof voice !== 'string') {
      return NextResponse.json(
        { error: { message: 'Missing or invalid "voice" field', type: 'invalid_request_error' } },
        { status: 400 },
      );
    }

    if (!isValidVoice(voice)) {
      return NextResponse.json(
        {
          error: {
            message: `Invalid voice "${voice}". Use GET /api/tts/edge to list available voices.`,
            type: 'invalid_request_error',
          },
        },
        { status: 400 },
      );
    }

    lang = lang || getLangFromVoice(voice);

    // Calculate rate (OpenAI speed ranges from 0.25 to 4.0, Edge TTS rate is 0.5 to 2.0)
    const clampedSpeed = Math.max(0.25, Math.min(4.0, speed));
    let mappedSpeed: number;
    if (clampedSpeed <= 1.0) {
      mappedSpeed = 0.5 + ((clampedSpeed - 0.25) / (1.0 - 0.25)) * (1.0 - 0.5);
    } else {
      mappedSpeed = 1.0 + ((clampedSpeed - 1.0) / (4.0 - 1.0)) * (2.0 - 1.0);
    }
    rate = rate || mappedSpeed;

    const payload: EdgeTTSPayload = {
      lang,
      text,
      voice,
      rate,
      pitch: 1.0,
    };

    const cacheKey = createHash('sha256').update(`${voice}|${rate}|${text}`).digest('hex');
    const cachePath = path.join(STORAGE_ROOT, '.readest', 'Cache', 'tts', `${cacheKey}.mp3`);
    try {
      const cached = await fs.readFile(cachePath);
      return new NextResponse(cached, {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': cached.byteLength.toString(),
          'Cache-Control': 'public, max-age=86400, immutable',
        },
      });
    } catch {
      // cache miss — synthesize below
    }

    const tts = new EdgeSpeechTTS();
    const response = await tts.create(payload);
    const arrayBuffer = await response.arrayBuffer();

    await saveTtsCache(cachePath, Buffer.from(arrayBuffer));

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': arrayBuffer.byteLength.toString(),
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    });
  } catch (error) {
    console.error('Edge TTS API error:', error);
    return NextResponse.json(
      {
        error: {
          message: error instanceof Error ? error.message : 'Internal server error',
          type: 'internal_error',
        },
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const { user, token } = await validateUserAndToken(request.headers.get('authorization'));
  if (!user || !token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 403 });
  }

  try {
    const query = request.nextUrl.searchParams;
    const lang = query.get('lang') || '';
    let voices = EdgeSpeechTTS.voices;
    if (lang) {
      voices = voices.filter((v) => v.lang.toLowerCase().includes(lang.toLowerCase()));
    }

    const formattedVoices = voices.map((voice) => ({
      id: voice.id,
      name: voice.name,
      language: voice.lang,
    }));

    return NextResponse.json({
      voices: formattedVoices,
    });
  } catch (error) {
    console.error('Error listing voices:', error);
    return NextResponse.json(
      {
        error: {
          message: 'Failed to list voices',
          type: 'internal_error',
        },
      },
      { status: 500 },
    );
  }
}
