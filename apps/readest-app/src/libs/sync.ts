import { Book, BookConfig, BookNote, BookDataRecord } from '@/types/book';
import { getAPIBaseUrl } from '@/services/environment';
import { getAccessToken } from '@/utils/access';
import { fetchWithTimeout } from '@/utils/fetch';

// Cloud sync API 已移除 - 仅使用本地存储
// const SYNC_API_ENDPOINT = getAPIBaseUrl() + '/sync';

export type SyncType = 'books' | 'configs' | 'notes';
export type SyncOp = 'push' | 'pull' | 'both';

interface BookRecord extends BookDataRecord, Book { }
interface BookConfigRecord extends BookDataRecord, BookConfig { }
interface BookNoteRecord extends BookDataRecord, BookNote { }

export interface SyncResult {
  books: BookRecord[] | null;
  notes: BookNoteRecord[] | null;
  configs: BookConfigRecord[] | null;
}

export type SyncRecord = BookRecord & BookConfigRecord & BookNoteRecord;

export interface SyncData {
  books?: Partial<BookRecord>[];
  notes?: Partial<BookNoteRecord>[];
  configs?: Partial<BookConfigRecord>[];
}

export class SyncClient {
  /**
   * 禁用云同步 - 仅使用本地存储
   * 返回空同步结果
   */
  async pullChanges(
    since: number,
    type?: SyncType,
    book?: string,
    metaHash?: string,
  ): Promise<SyncResult> {
    // 本地存储模式 - 不调用云 API，直接返回空结果
    console.log('[SyncClient] Cloud sync disabled (local storage mode)');
    return {
      books: null,
      configs: null,
      notes: null,
    };
  }

  /**
   * 禁用云同步 - 仅使用本地存储
   * 返回空同步结果
   */
  async pushChanges(payload: SyncData): Promise<SyncResult> {
    // 本地存储模式 - 不调用云 API，直接返回空结果
    console.log('[SyncClient] Cloud sync disabled (local storage mode)');
    return {
      books: null,
      configs: null,
      notes: null,
    };
  }
}
