import { getAPIBaseUrl, isWebAppPlatform } from '@/services/environment';
import { AppService } from '@/types/system';
import { getUserID } from '@/utils/access';
import { fetchWithAuth } from '@/utils/fetch';
import {
  tauriUpload,
  tauriDownload,
  webUpload,
  webDownload,
  ProgressHandler,
  ProgressPayload,
} from '@/utils/transfer';

const STORAGE_MODE = process.env['NEXT_PUBLIC_STORAGE_MODE'] || 'remote';
const isLocalStorageMode = STORAGE_MODE === 'local';

const API_ENDPOINTS = {
  upload: getAPIBaseUrl() + '/storage/upload',
  download: getAPIBaseUrl() + '/storage/download',
  delete: getAPIBaseUrl() + '/storage/delete',
  stats: getAPIBaseUrl() + '/storage/stats',
  list: getAPIBaseUrl() + '/storage/list',
  purge: getAPIBaseUrl() + '/storage/purge',
  scan: getAPIBaseUrl() + '/storage/scan',
  scanAndImport: getAPIBaseUrl() + '/storage/scan-and-import',
  import: getAPIBaseUrl() + '/storage/import',
};

export const createProgressHandler = (
  totalFiles: number,
  completedFilesRef: { count: number },
  onProgress?: ProgressHandler,
) => {
  return (progress: ProgressPayload) => {
    const fileProgress = progress.progress / progress.total;
    const overallProgress = ((completedFilesRef.count + fileProgress) / totalFiles) * 100;

    if (onProgress) {
      onProgress({
        progress: overallProgress,
        total: 100,
        transferSpeed: progress.transferSpeed,
      });
    }
  };
};

const request = async (url: string, options: RequestInit) => {
  if (!isLocalStorageMode) {
    return fetchWithAuth(url, options);
  }

  const res = await fetch(url, options);
  if (!res.ok) {
    let message = res.statusText;
    try {
      const data = await res.json();
      message = data.error || message;
    } catch { }
    throw new Error(message || 'Request failed');
  }
  return res;
};

const buildFileKey = async (cfp: string) => {
  if (isLocalStorageMode) return cfp;
  const userId = await getUserID();
  if (!userId) {
    throw new Error('Not authenticated');
  }
  return `${userId}/${cfp}`;
};

export const uploadFile = async (
  file: File,
  fileFullPath: string,
  onProgress?: ProgressHandler,
  bookHash?: string,
  temp = false,
  cloudFilePath?: string,
) => {
  try {
    const response = await request(API_ENDPOINTS.upload, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName: file.name,
        fileSize: file.size,
        bookHash,
        temp,
        cloudPath: cloudFilePath,
      }),
    });

    const { uploadUrl, downloadUrl }: { uploadUrl: string; downloadUrl?: string } =
      await response.json();
    if (isWebAppPlatform()) {
      await webUpload(file, uploadUrl, onProgress);
    } else {
      await tauriUpload(uploadUrl, fileFullPath, 'PUT', onProgress);
    }
    return temp ? downloadUrl : undefined;
  } catch (error) {
    console.error('File upload failed:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('File upload failed');
  }
};

export const batchGetDownloadUrls = async (files: { lfp: string; cfp: string }[]) => {
  try {
    const userId = isLocalStorageMode ? null : await getUserID();
    if (!isLocalStorageMode && !userId) {
      throw new Error('Not authenticated');
    }
    const filePaths = files.map((file) => file.cfp);
    const fileKeys = filePaths.map((path) => (isLocalStorageMode ? path : `${userId}/${path}`));
    const response = await request(`${API_ENDPOINTS.download}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileKeys }),
    });

    const { downloadUrls } = await response.json();
    return files.map((file) => {
      const fileKey = isLocalStorageMode ? file.cfp : `${userId}/${file.cfp}`;
      return {
        lfp: file.lfp,
        cfp: file.cfp,
        downloadUrl: downloadUrls[fileKey],
      };
    });
  } catch (error) {
    console.error('Batch get download URLs failed:', error);
    throw new Error('Batch get download URLs failed');
  }
};

type DownloadFileParams = {
  appService: AppService;
  dst: string;
  cfp: string;
  url?: string;
  headers?: Record<string, string>;
  singleThreaded?: boolean;
  skipSslVerification?: boolean;
  onProgress?: ProgressHandler;
};

export const downloadFile = async ({
  appService,
  dst,
  cfp,
  url,
  headers,
  singleThreaded,
  skipSslVerification,
  onProgress,
}: DownloadFileParams) => {
  try {
    let downloadUrl = url;
    if (!downloadUrl) {
      const fileKey = await buildFileKey(cfp);
      const response = await request(
        `${API_ENDPOINTS.download}?fileKey=${encodeURIComponent(fileKey)}`,
        {
          method: 'GET',
        },
      );

      const { downloadUrl: url } = await response.json();
      downloadUrl = url;
    }

    if (!downloadUrl) {
      throw new Error('No download URL available');
    }

    if (isWebAppPlatform()) {
      const { headers: responseHeaders, blob } = await webDownload(
        downloadUrl,
        onProgress,
        headers,
      );
      await appService.writeFile(dst, 'None', await blob.arrayBuffer());
      return responseHeaders;
    } else {
      return await tauriDownload(
        downloadUrl,
        dst,
        onProgress,
        headers,
        undefined,
        singleThreaded,
        skipSslVerification,
      );
    }
  } catch (error) {
    console.error(`File '${dst}' download failed:`, error);
    throw error;
  }
};

export const deleteFile = async (filePath: string) => {
  try {
    const fileKey = await buildFileKey(filePath);
    await request(`${API_ENDPOINTS.delete}?fileKey=${encodeURIComponent(fileKey)}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('File deletion failed:', error);
    throw new Error('File deletion failed');
  }
};

export interface StorageStats {
  totalFiles: number;
  totalSize: number;
  usage: number;
  quota: number;
  usagePercentage: number;
  byBookHash: Array<{
    bookHash: string | null;
    fileCount: number;
    totalSize: number;
  }>;
}

export const getStorageStats = async (): Promise<StorageStats> => {
  try {
    const response = await request(API_ENDPOINTS.stats, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('Get storage stats failed:', error);
    throw new Error('Get storage stats failed');
  }
};

export interface FileRecord {
  file_key: string;
  file_size: number;
  book_hash: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface ListFilesParams {
  page?: number;
  pageSize?: number;
  sortBy?: 'created_at' | 'updated_at' | 'file_size' | 'file_key';
  sortOrder?: 'asc' | 'desc';
  bookHash?: string;
  search?: string;
}

interface ListFilesResponse {
  files: FileRecord[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const listFiles = async (params?: ListFilesParams): Promise<ListFilesResponse> => {
  try {
    const queryParams = new URLSearchParams();

    if (params?.page) queryParams.set('page', params.page.toString());
    if (params?.pageSize) queryParams.set('pageSize', params.pageSize.toString());
    if (params?.sortBy) queryParams.set('sortBy', params.sortBy);
    if (params?.sortOrder) queryParams.set('sortOrder', params.sortOrder);
    if (params?.bookHash) queryParams.set('bookHash', params.bookHash);
    if (params?.search) queryParams.set('search', params.search);

    const url = queryParams.toString()
      ? `${API_ENDPOINTS.list}?${queryParams.toString()}`
      : API_ENDPOINTS.list;

    const response = await request(url, {
      method: 'GET',
    });

    return await response.json();
  } catch (error) {
    console.error('List files failed:', error);
    throw new Error('List files failed');
  }
};

interface PurgeFilesResult {
  success: string[];
  failed: Array<{ fileKey: string; error: string }>;
  deletedCount: number;
  failedCount: number;
}

export const purgeFiles = async (
  filePathsOrKeys: string[],
  isFileKeys = false,
): Promise<PurgeFilesResult> => {
  try {
    let fileKeys: string[];

    if (isFileKeys) {
      fileKeys = filePathsOrKeys;
    } else {
      fileKeys = await Promise.all(filePathsOrKeys.map((path) => buildFileKey(path)));
    }

    const response = await request(API_ENDPOINTS.purge, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileKeys }),
    });

    return await response.json();
  } catch (error) {
    console.error('Purge files failed:', error);
    throw new Error('Purge files failed');
  }
};

export interface ScannedBook {
  filePath: string;
  relativePath: string;
  fileName: string;
  directory: string;
  size: number;
  mtime: number;
  ext: string;
}

export interface ScanAndImportResult {
  success: boolean;
  summary: {
    totalScanned: number;
    newCount: number;
    movedCount: number;
    deletedCount: number;
  };
  newBooks: Array<{
    hash: string;
    title: string;
    relativePath: string;
    format: string;
  }>;
  movedBooks: Array<{
    oldPath: string;
    newPath: string;
    hash: string;
  }>;
  deletedBooks: Array<{
    hash: string;
    title: string;
    relativePath: string;
  }>;
}

/**
 * 扫描并导入书籍（后端合一端点）
 * 
 * 优化：后端直接更新 library.json，减少数据传输
 * - 返回增量数据摘要而非完整书籍列表
 * - library.json 由后端原子性更新
 * - 前端只需加载更新的库
 */
export const scanAndImportBooks = async (): Promise<ScanAndImportResult> => {
  try {
    const response = await request(API_ENDPOINTS.scanAndImport, {
      method: 'POST',
    });
    return await response.json();
  } catch (error) {
    console.error('Scan and import books failed:', error);
    throw new Error('Scan and import books failed');
  }
};

export const scanBooks = async (): Promise<{ count: number; books: ScannedBook[] }> => {
  try {
    const response = await request(API_ENDPOINTS.scan, {
      method: 'POST',
    });
    return await response.json();
  } catch (error) {
    console.error('Scan books failed:', error);
    throw new Error('Scan books failed');
  }
};