import { v4 as uuidv4 } from 'uuid';
import { SystemSettings } from '@/types/settings';
import {
  AppPlatform,
  AppService,
  DistChannel,
  FileItem,
  OsPlatform,
  ResolvedPath,
  SelectDirectoryMode,
} from '@/types/system';
import { FileSystem, BaseDir, DeleteAction } from '@/types/system';
import {
  Book,
  BookConfig,
  BookContent,
  BookFormat,
  FIXED_LAYOUT_FORMATS,
  ViewSettings,
} from '@/types/book';
import {
  getDir,
  getLocalBookFilename,
  getCoverFilename,
  getConfigFilename,
  getLibraryFilename,
  INIT_BOOK_CONFIG,
  formatTitle,
  formatAuthors,
  getPrimaryLanguage,
  getLibraryBackupFilename,
} from '@/utils/book';
import { md5, partialMD5, md5Fingerprint } from '@/utils/md5';
import { getBaseFilename, getFilename } from '@/utils/path';
import {
  compressImageToArrayBuffer,
  shouldCompress,
  formatFileSize,
  getCompressionInfo,
} from '@/utils/imageCompression';
import { BookDoc, BookMetadata, DocumentLoader, EXTS } from '@/libs/document';
import {
  DEFAULT_BOOK_LAYOUT,
  DEFAULT_BOOK_STYLE,
  DEFAULT_BOOK_FONT,
  DEFAULT_BOOK_LANGUAGE,
  DEFAULT_VIEW_CONFIG,
  DEFAULT_READSETTINGS,
  SYSTEM_SETTINGS_VERSION,
  DEFAULT_BOOK_SEARCH_CONFIG,
  DEFAULT_TTS_CONFIG,
  DEFAULT_MOBILE_VIEW_SETTINGS,
  DEFAULT_SYSTEM_SETTINGS,
  DEFAULT_CJK_VIEW_SETTINGS,
  DEFAULT_MOBILE_READSETTINGS,
  DEFAULT_SCREEN_CONFIG,
  DEFAULT_TRANSLATOR_CONFIG,
  DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS,
  SETTINGS_FILENAME,
  DEFAULT_MOBILE_SYSTEM_SETTINGS,
  DEFAULT_ANNOTATOR_CONFIG,
  DEFAULT_EINK_VIEW_SETTINGS,
  BOOK_UNGROUPED_NAME,
} from './constants';
import { cachedFetchAsUrl } from '@/utils/cachedFetch';
import { fetch as tauriFetch } from '@tauri-apps/plugin-http';
import {
  getOSPlatform,
  getTargetLang,
  isCJKEnv,
  isContentURI,
  isValidURL,
  makeSafeFilename,
} from '@/utils/misc';
import { deserializeConfig, serializeConfig } from '@/utils/serializer';
import { ClosableFile } from '@/utils/file';
import { TxtToEpubConverter } from '@/utils/txt';
import { BOOK_FILE_NOT_FOUND_ERROR } from './errors';
import { CustomTextureInfo } from '@/styles/textures';
import { CustomFont, CustomFontInfo } from '@/styles/fonts';
import { parseFontInfo } from '@/utils/font';
import { svg2png } from '@/utils/svg';

// Base class for app service
export class BaseAppService implements AppService {
  osPlatform: OsPlatform = getOSPlatform();
  appPlatform: AppPlatform = 'tauri';
  localBooksDir = '';
  isMobile = false;
  isMacOSApp = false;
  isLinuxApp = false;
  isAppDataSandbox = false;
  isAndroidApp = false;
  isIOSApp = false;
  isMobileApp = false;
  isPortableApp = false;
  isDesktopApp = false;
  isEink = false;
  hasTrafficLight = false;
  hasWindow = false;
  hasWindowBar = false;
  hasContextMenu = false;
  hasRoundedWindow = false;
  hasSafeAreaInset = false;
  hasHaptics = false;
  hasUpdater = false;
  hasOrientationLock = false;
  hasScreenBrightness = false;
  hasIAP = false;
  canCustomizeRootDir = false;
  canReadExternalDir = false;
  distChannel = 'readest' as DistChannel;

  protected CURRENT_MIGRATION_VERSION = 20260202;

  protected fs!: FileSystem;
  protected resolvePath(fp: string, base: BaseDir): ResolvedPath {
    throw new Error('Not implemented');
  }

  init(): Promise<void> {
    throw new Error('Not implemented');
  }
  setCustomRootDir(customRootDir: string): Promise<void> {
    throw new Error('Not implemented');
  }
  selectDirectory(mode: SelectDirectoryMode): Promise<string> {
    throw new Error('Not implemented');
  }
  selectFiles(name: string, extensions: string[]): Promise<string[]> {
    throw new Error('Not implemented');
  }
  async saveFile(
    filename: string,
    content: string | ArrayBuffer,
    filepath: string,
    mimeType?: string,
  ): Promise<boolean> {
    throw new Error('Not implemented');
  }

  protected async runMigrations(lastMigrationVersion: number): Promise<void> {
    if (lastMigrationVersion < 20251124) {
      try {
        await this.migrate20251124();
      } catch (error) {
        console.error('Error migrating to version 20251124:', error);
      }
    }

    if (lastMigrationVersion < 20260121) {
      try {
        await this.migrate20260121();
      } catch (error) {
        console.error('Error migrating to version 20260121:', error);
      }
    }

    if (lastMigrationVersion < 20260202) {
      try {
        await this.migrate20260202();
      } catch (error) {
        console.error('Error migrating to version 20260202:', error);
      }
    }
  }

  async prepareBooksDir() {
    this.localBooksDir = await this.fs.getPrefix('Books');
    // Initialize configuration files in .readest directory
    await this.ensureConfigFilesExist();
  }

  /**
   * Ensure settings.json and library.json exist in .readest directory
   * If they don't exist, create them with default values
   */
  private async ensureConfigFilesExist(): Promise<void> {
    try {
      // Check and create settings.json if needed
      const settingsExists = await this.fs.exists(SETTINGS_FILENAME, 'Settings');
      if (!settingsExists) {
        console.log('[Init] settings.json not found, creating with defaults...');
        const defaultSettings = {
          ...DEFAULT_SYSTEM_SETTINGS,
          ...(this.isMobile ? DEFAULT_MOBILE_SYSTEM_SETTINGS : {}),
          version: SYSTEM_SETTINGS_VERSION,
          localBooksDir: await this.fs.getPrefix('Books'),
          globalReadSettings: {
            ...DEFAULT_READSETTINGS,
            ...(this.isMobile ? DEFAULT_MOBILE_READSETTINGS : {}),
          },
          globalViewSettings: this.getDefaultViewSettings(),
        } as SystemSettings;
        await this.safeSaveJSON(SETTINGS_FILENAME, 'Settings', defaultSettings);
        console.log('[Init] ✓ settings.json created successfully');
      }

      // Check and create library.json if needed
      const libraryFilename = getLibraryFilename();
      const libraryExists = await this.fs.exists(libraryFilename, 'Books');
      if (!libraryExists) {
        console.log('[Init] library.json not found, creating with defaults...');
        await this.safeSaveJSON(libraryFilename, 'Books', []);
        console.log('[Init] ✓ library.json created successfully');
      }

      console.log('[Init] ✓ All configuration files are ready');
    } catch (error) {
      console.error('[Init] Error ensuring config files exist:', error);
      // Don't throw, continue with defaults
    }
  }

  async openFile(path: string, base: BaseDir): Promise<File> {
    return await this.fs.openFile(path, base);
  }

  async copyFile(srcPath: string, dstPath: string, base: BaseDir): Promise<void> {
    return await this.fs.copyFile(srcPath, dstPath, base);
  }

  async readFile(path: string, base: BaseDir, mode: 'text' | 'binary') {
    return await this.fs.readFile(path, base, mode);
  }

  async writeFile(path: string, base: BaseDir, content: string | ArrayBuffer | File) {
    return await this.fs.writeFile(path, base, content);
  }

  async createDir(path: string, base: BaseDir, recursive: boolean = true): Promise<void> {
    return await this.fs.createDir(path, base, recursive);
  }

  async deleteFile(path: string, base: BaseDir): Promise<void> {
    return await this.fs.removeFile(path, base);
  }

  async deleteDir(path: string, base: BaseDir, recursive: boolean = true): Promise<void> {
    return await this.fs.removeDir(path, base, recursive);
  }

  async resolveFilePath(path: string, base: BaseDir): Promise<string> {
    const prefix = await this.fs.getPrefix(base);
    return path ? `${prefix}/${path}` : prefix;
  }

  async readDirectory(path: string, base: BaseDir): Promise<FileItem[]> {
    return await this.fs.readDir(path, base);
  }

  async exists(path: string, base: BaseDir): Promise<boolean> {
    return await this.fs.exists(path, base);
  }

  async getImageURL(path: string): Promise<string> {
    return await this.fs.getImageURL(path);
  }

  getCoverImageUrl = (book: Book): string => {
    // Use the resolved path from 'Books' base instead of manually prefixing with localBooksDir
    // This correctly handles both flat (relativePath) and legacy (hash-based) paths
    const coverPath = getCoverFilename(book);
    const resolvedPath = this.fs.resolvePath(coverPath, 'Books');
    return this.fs.getURL(resolvedPath.fp) || `${this.localBooksDir}/${coverPath}`;
  };

  getCoverImageBlobUrl = async (book: Book): Promise<string> => {
    // 确保缺失的封面会被及时恢复
    await this.ensureCoverExists(book);

    // Use the resolved path from 'Books' base instead of manually prefixing with localBooksDir
    // This correctly handles both flat (relativePath) and legacy (hash-based) paths
    const coverPath = getCoverFilename(book);

    // 在 web 平台直接返回稳定的文件路径 URL，利用浏览器原生缓存
    // 避免每次生成新的 Blob URL 导致重复请求
    if (this.appPlatform === 'web') {
      try {
        const coverUrl = this.fs.getURL(this.fs.resolvePath(coverPath, 'Books').fp) ||
          `${this.localBooksDir}/${coverPath}`;

        // 直接返回稳定的 URL，让浏览器和后端的 HTTP 缓存机制处理
        // 后端已设置 ETag 和 Cache-Control，可以有效避免重复请求
        return coverUrl;
      } catch {
        return `${this.localBooksDir}/${coverPath}`;
      }
    } else {
      try {
        return await this.fs.getBlobURL(coverPath, 'Books');
      } catch {
        // Fallback to old path if the new path doesn't exist
        return `${this.localBooksDir}/${coverPath}`;
      }
    }
  };

  async getCachedImageUrl(pathOrUrl: string): Promise<string> {
    const cachedKey = `img_${md5(pathOrUrl)}`;
    const cachePrefix = await this.fs.getPrefix('Cache');
    const cachedPath = `${cachePrefix}/${cachedKey}`;
    if (await this.fs.exists(cachedPath, 'None')) {
      return await this.fs.getImageURL(cachedPath);
    } else {
      const file = await this.fs.openFile(pathOrUrl, 'None');
      await this.fs.writeFile(cachedKey, 'Cache', await file.arrayBuffer());
      return await this.fs.getImageURL(cachedPath);
    }
  }

  getDefaultViewSettings(): ViewSettings {
    return {
      ...DEFAULT_BOOK_LAYOUT,
      ...DEFAULT_BOOK_STYLE,
      ...DEFAULT_BOOK_FONT,
      ...DEFAULT_BOOK_LANGUAGE,
      ...(this.isMobile ? DEFAULT_MOBILE_VIEW_SETTINGS : {}),
      ...(this.isEink ? DEFAULT_EINK_VIEW_SETTINGS : {}),
      ...(isCJKEnv() ? DEFAULT_CJK_VIEW_SETTINGS : {}),
      ...DEFAULT_VIEW_CONFIG,
      ...DEFAULT_TTS_CONFIG,
      ...DEFAULT_SCREEN_CONFIG,
      ...DEFAULT_ANNOTATOR_CONFIG,
      ...{ ...DEFAULT_TRANSLATOR_CONFIG, translateTargetLang: getTargetLang() },
    };
  }

  private settingsLoadPromise: Promise<SystemSettings> | null = null;
  private settingsLoadTime: number = 0;
  private readonly SETTINGS_CACHE_TTL = 5000; // 5 秒内的重复请求使用缓存
  private settingsCache: SystemSettings | null = null;

  async loadSettings(): Promise<SystemSettings> {
    const now = Date.now();

    // 如果存在正在进行的请求，则等待其完成
    if (this.settingsLoadPromise) {
      console.log('[loadSettings] 对象已存在进行中的请求，使用现有Promise');
      return this.settingsLoadPromise;
    }

    // 如果上次加载是最近 5 秒内，且缓存有效，不重新加载
    if (now - this.settingsLoadTime < this.SETTINGS_CACHE_TTL && this.settingsCache) {
      console.log('[loadSettings] 使用缓存的设置 (缓存有效期内)');
      return this.settingsCache;
    }

    console.log('[loadSettings] 开始加载新的设置');
    this.settingsLoadPromise = this._loadSettingsInternal();

    try {
      const result = await this.settingsLoadPromise;
      this.settingsLoadTime = Date.now();
      this.settingsCache = result;
      return result;
    } finally {
      this.settingsLoadPromise = null;
    }
  }

  private async _loadSettingsInternal(): Promise<SystemSettings> {
    const defaultSettings: SystemSettings = {
      ...DEFAULT_SYSTEM_SETTINGS,
      ...(this.isMobile ? DEFAULT_MOBILE_SYSTEM_SETTINGS : {}),
      version: SYSTEM_SETTINGS_VERSION,
      localBooksDir: await this.fs.getPrefix('Books'),
      koreaderSyncDeviceId: uuidv4(),
      globalReadSettings: {
        ...DEFAULT_READSETTINGS,
        ...(this.isMobile ? DEFAULT_MOBILE_READSETTINGS : {}),
      },
      globalViewSettings: this.getDefaultViewSettings(),
    } as SystemSettings;

    let settings = await this.safeLoadJSON<SystemSettings>(
      SETTINGS_FILENAME,
      'Settings',
      defaultSettings,
    );

    const version = settings.version ?? 0;
    if (this.isAppDataSandbox || version < SYSTEM_SETTINGS_VERSION) {
      settings.version = SYSTEM_SETTINGS_VERSION;
    }
    settings = {
      ...DEFAULT_SYSTEM_SETTINGS,
      ...(this.isMobile ? DEFAULT_MOBILE_SYSTEM_SETTINGS : {}),
      ...settings,
    };
    settings.globalReadSettings = {
      ...DEFAULT_READSETTINGS,
      ...(this.isMobile ? DEFAULT_MOBILE_READSETTINGS : {}),
      ...settings.globalReadSettings,
    };
    settings.globalViewSettings = {
      ...this.getDefaultViewSettings(),
      ...settings.globalViewSettings,
    };

    settings.localBooksDir = await this.fs.getPrefix('Books');

    if (!settings.kosync.deviceId) {
      settings.kosync.deviceId = uuidv4();
      await this.saveSettings(settings);
    }

    this.localBooksDir = settings.localBooksDir;
    return settings;
  }

  async saveSettings(settings: SystemSettings): Promise<void> {
    await this.safeSaveJSON(SETTINGS_FILENAME, 'Settings', settings);
  }

  async importFont(file?: string | File): Promise<CustomFontInfo | null> {
    let fontPath: string;
    let fontFile: File;
    if (typeof file === 'string') {
      const filePath = file;
      const fileobj = await this.fs.openFile(filePath, 'None');
      fontPath = fileobj.name || getFilename(filePath);
      await this.fs.copyFile(filePath, fontPath, 'Fonts');
      fontFile = await this.fs.openFile(fontPath, 'Fonts');
    } else if (file) {
      fontPath = getFilename(file.name);
      await this.fs.writeFile(fontPath, 'Fonts', file);
      fontFile = file;
    } else {
      return null;
    }

    return {
      path: fontPath,
      ...parseFontInfo(await fontFile.arrayBuffer(), fontPath),
    };
  }

  async deleteFont(font: CustomFont): Promise<void> {
    await this.fs.removeFile(font.path, 'Fonts');
  }

  async importImage(file?: string | File): Promise<CustomTextureInfo | null> {
    let imagePath: string;
    if (typeof file === 'string') {
      const filePath = file;
      const fileobj = await this.fs.openFile(filePath, 'None');
      imagePath = fileobj.name || getFilename(filePath);
      await this.fs.copyFile(filePath, imagePath, 'Images');
    } else if (file) {
      imagePath = getFilename(file.name);
      await this.fs.writeFile(imagePath, 'Images', file);
    } else {
      return null;
    }

    return {
      name: imagePath.replace(/\.[^/.]+$/, ''),
      path: imagePath,
    };
  }

  async deleteImage(texture: CustomTextureInfo): Promise<void> {
    await this.fs.removeFile(texture.path, 'Images');
  }

  async importBook(
    // file might be:
    // 1.1 absolute path for local file on Desktop
    // 1.2 /private/var inbox file path on iOS
    // 2. remote url
    // 3. content provider uri
    // 4. File object from browsers
    file: string | File,
    books: Book[],
    saveBook: boolean = true,
    saveCover: boolean = true,
    overwrite: boolean = false,
    transient: boolean = false,
    options?: {
      /** Desired relative path (e.g. "技术/书名.epub"), only used in local mode */
      targetRelativePath?: string;
      /** Desired group name, used to derive path when targetRelativePath is not provided */
      targetGroupName?: string;
    },
  ): Promise<Book | null> {
    const startTime = Date.now();
    let filename = '';

    try {
      let loadedBook: BookDoc;
      let format: BookFormat;
      let fileobj: File;

      if (transient && typeof file !== 'string') {
        throw new Error('Transient import is only supported for file paths');
      }

      try {
        if (typeof file === 'string') {
          fileobj = await this.fs.openFile(file, 'None');
          filename = fileobj.name || getFilename(file);
        } else {
          fileobj = file;
          filename = file.name;
        }

        // 记录文件大小
        const fileSizeMB = fileobj.size / (1024 * 1024);
        console.log(`[importBook] Processing: ${filename}, size: ${fileSizeMB.toFixed(2)} MB`);

        // 检查文件大小
        if (fileobj.size === 0) {
          throw new Error('Invalid or empty book file');
        }

        // 警告大文件
        if (fileobj.size > 100 * 1024 * 1024) {
          console.warn(`[importBook] ⚠️ Large file: ${fileSizeMB.toFixed(2)} MB, processing may take longer`);
        }

        if (/\.txt$/i.test(filename)) {
          const txt2epub = new TxtToEpubConverter();
          ({ file: fileobj } = await txt2epub.convert({ file: fileobj }));
        }

        console.log(`[importBook] Opening document: ${filename}`);
        ({ book: loadedBook, format } = await new DocumentLoader(fileobj).open());

        if (!loadedBook) {
          throw new Error('Unsupported or corrupted book file');
        }

        // 确保 metadata 存在
        if (!loadedBook.metadata) {
          loadedBook.metadata = {
            title: getBaseFilename(filename),
            author: '',
          } as BookMetadata;
        }

        const metadataTitle = formatTitle(loadedBook.metadata.title);
        if (!metadataTitle || !metadataTitle.trim() || metadataTitle === filename) {
          loadedBook.metadata.title = getBaseFilename(filename);
        }

        console.log(`[importBook] ✓ Document opened successfully: ${filename}`);
      } catch (error) {
        const errorMsg = (error as Error).message || String(error);
        console.error(`[importBook] ✗ Failed to open book: ${filename}`, errorMsg);
        throw new Error(`Failed to open the book: ${errorMsg}`);
      }

      console.log(`[importBook] Computing hash for: ${filename}`);
      const hash = await partialMD5(fileobj);
      const existingBook = books.filter((b) => b.hash === hash)[0];
      const now = Date.now();
      if (existingBook) {
        if (!transient) {
          existingBook.deletedAt = null;
        }
        existingBook.createdAt = now;
        existingBook.updatedAt = now;
      }

      const primaryLanguage = getPrimaryLanguage(loadedBook.metadata.language);
      const book: Book = {
        hash,
        format,
        title: formatTitle(loadedBook.metadata.title),
        sourceTitle: formatTitle(loadedBook.metadata.title),
        primaryLanguage,
        author: formatAuthors(loadedBook.metadata.author, primaryLanguage),
        createdAt: existingBook ? existingBook.createdAt : now,
        uploadedAt: existingBook ? existingBook.uploadedAt : (transient ? null : now),
        deletedAt: transient ? now : null,
        downloadedAt: now,
        updatedAt: now,
      };
      // update book metadata when reimporting the same book
      if (existingBook) {
        existingBook.format = book.format;
        existingBook.title = existingBook.title.trim() ? existingBook.title.trim() : book.title;
        existingBook.sourceTitle = existingBook.sourceTitle ?? book.sourceTitle;
        existingBook.author = existingBook.author ?? book.author;
        existingBook.primaryLanguage = existingBook.primaryLanguage ?? book.primaryLanguage;
        existingBook.downloadedAt = Date.now();
      }

      // Decide whether to use new flat local storage path
      // Check runtime window.__STORAGE_MODE__ first (set by Providers), then fallback to compile-time env var
      const isLocalStorageMode =
        (typeof window !== 'undefined' && (window as any).__STORAGE_MODE__ === 'local') ||
        process.env['NEXT_PUBLIC_STORAGE_MODE'] === 'local';
      const shouldUseLocalFlatStorage = this.appPlatform === 'web' && isLocalStorageMode;

      console.log('[ImportBook] appPlatform:', this.appPlatform, 'STORAGE_MODE (runtime):', (typeof window !== 'undefined' && (window as any).__STORAGE_MODE__), 'STORAGE_MODE (env):', process.env['NEXT_PUBLIC_STORAGE_MODE'], 'shouldUseLocalFlatStorage:', shouldUseLocalFlatStorage);

      const fileExt = EXTS[format] || format.toLowerCase?.() || 'book';
      const safeBaseName = makeSafeFilename(book.sourceTitle || book.title);
      const rawTargetGroupName = options?.targetGroupName?.trim();
      const normalizedTargetRelativePath = options?.targetRelativePath
        ? (options.targetRelativePath.includes('/')
          ? options.targetRelativePath
          : `${BOOK_UNGROUPED_NAME}/${options.targetRelativePath}`)
        : undefined;
      const derivedGroupNameFromPath = normalizedTargetRelativePath
        ? normalizedTargetRelativePath.split('/').slice(0, -1).join('/') || BOOK_UNGROUPED_NAME
        : undefined;
      const targetGroupName = (derivedGroupNameFromPath || rawTargetGroupName || BOOK_UNGROUPED_NAME).trim();

      // Compute target relative path for local mode
      if (shouldUseLocalFlatStorage) {
        const derivedRelativePath = normalizedTargetRelativePath
          ? normalizedTargetRelativePath
          : `${targetGroupName ? `${targetGroupName}/` : ''}${safeBaseName}.${fileExt}`;

        if (!derivedRelativePath) {
          throw new Error('targetRelativePath is required for local storage mode. Please provide a valid relative path.');
        }

        book.relativePath = derivedRelativePath;
        console.log('[ImportBook] 5. Setting book.relativePath to:', derivedRelativePath);
        console.log('[ImportBook] 6. Book hash:', book.hash);
        if (existingBook) {
          existingBook.relativePath = derivedRelativePath;
        }
        if (targetGroupName && !book.groupName) {
          book.groupName = targetGroupName;
        }
        if (existingBook && targetGroupName && !existingBook.groupName) {
          existingBook.groupName = targetGroupName;
        }
      } else if (this.appPlatform === 'web') {
        // For web platform in remote mode, still require relativePath for consistency
        const derivedRelativePath = normalizedTargetRelativePath
          ? normalizedTargetRelativePath
          : `${targetGroupName ? `${targetGroupName}/` : ''}${safeBaseName}.${fileExt}`;
        book.relativePath = derivedRelativePath;
        if (existingBook) {
          existingBook.relativePath = derivedRelativePath;
        }
        if (targetGroupName && !book.groupName) {
          book.groupName = targetGroupName;
        }
        if (existingBook && targetGroupName && !existingBook.groupName) {
          existingBook.groupName = targetGroupName;
        }
      }

      // Ensure destination directories exist (new flat structure or legacy hash-based)
      console.log('[importBook] 🔄 About to ensureLocalBookDirs for book:', book.title, book.relativePath);
      await this.ensureLocalBookDirs(book);
      console.log('[importBook] 🔄 ensureLocalBookDirs completed');

      const bookFilename = getLocalBookFilename(book);
      console.log('[importBook] 📚 bookFilename:', bookFilename);
      console.log('[importBook] 📚 saveBook:', saveBook, ', transient:', transient);
      const bookFileExists = await this.fs.exists(bookFilename, 'Books');
      console.log('[importBook] 📚 Book file already exists:', bookFileExists, ', overwrite:', overwrite);
      console.log('[importBook] 📚 Will write EPUB?', saveBook && !transient && (!bookFileExists || overwrite));

      if (saveBook && !transient && (!bookFileExists || overwrite)) {
        console.log('[importBook] 📝 Starting EPUB file write...', bookFilename);
        const writeStartTime = Date.now();

        if (/\.txt$/i.test(filename)) {
          console.log('[importBook] 📝 Writing as TXT...');
          await this.fs.writeFile(bookFilename, 'Books', fileobj);
        } else if (typeof file === 'string' && isContentURI(file)) {
          console.log('[importBook] 📝 Copying from content URI...');
          await this.fs.copyFile(file, bookFilename, 'Books');
        } else if (typeof file === 'string' && !isValidURL(file)) {
          console.log('[importBook] 📝 Copying from local file path...');
          try {
            // try to copy the file directly first in case of large files to avoid memory issues
            // on desktop when reading recursively from selected directory the direct copy will fail
            // due to permission issues, then fallback to read and write files
            await this.fs.copyFile(file, bookFilename, 'Books');
          } catch {
            console.log('[importBook] 📝 copyFile failed, falling back to writeFile...');
            await this.fs.writeFile(bookFilename, 'Books', await fileobj.arrayBuffer());
          }
        } else {
          console.log('[importBook] 📝 Writing as blob/file object...');
          await this.fs.writeFile(bookFilename, 'Books', fileobj);
        }

        const writeEndTime = Date.now();
        console.log('[importBook] ✅ EPUB file write completed in', writeEndTime - writeStartTime, 'ms');
      } else {
        console.log('[importBook] ⏭️  Skipping file write: saveBook=', saveBook, ', transient=', transient, ', fileExists=', bookFileExists, ', overwrite=', overwrite);
      }

      // Validate saved file size to detect truncated uploads (common cause of invalid zip/epub)
      // Skip ultra-large files to avoid double-read overhead
      const originalSize = Number(fileobj.size ?? 0);
      const SHOULD_VERIFY = Number.isFinite(originalSize) ? originalSize <= 200 * 1024 * 1024 : true; // <=200MB
      console.log('[importBook] 🔍 File size verification enabled:', SHOULD_VERIFY, ', originalSize:', originalSize, 'bytes');

      if (SHOULD_VERIFY) {
        try {
          const stats = await this.fs.stats(bookFilename, 'Books');
          const savedSize = Number(stats?.size ?? 0);
          console.log('[importBook] 🔍 Original size:', originalSize, ', Saved size:', savedSize);

          if (!Number.isFinite(savedSize) || savedSize <= 0) {
            throw new Error(`Saved file is empty or missing. Saved size: ${savedSize}`);
          }
          if (Number.isFinite(originalSize) && originalSize > 0 && savedSize !== originalSize) {
            throw new Error(`Saved file size mismatch. Expected ${originalSize}, got ${savedSize}`);
          }
          console.log('[importBook] ✅ File size verification passed');
        } catch (verifyErr) {
          console.error('[importBook] ✗ Saved file verification failed:', verifyErr);
          throw new Error('书籍写入失败，文件可能不完整，请重试导入');
        }
      }

      // If we expect the book to be saved locally, ensure the file actually exists before continuing
      if (saveBook && !transient) {
        console.log('[importBook] 📌 Final file existence check before return:', bookFilename);
        const saved = await this.fs.exists(bookFilename, 'Books');
        console.log('[importBook] File exists check result:', saved);
        if (!saved) {
          console.error('[importBook] ❌ CRITICAL: File should exist but does not:', bookFilename);
          throw new Error('书籍写入失败，未找到已保存的文件');
        }
        console.log('[importBook] ✅ File confirmed to exist before return');
      }
      if (saveCover && (!(await this.fs.exists(getCoverFilename(book), 'Books')) || overwrite)) {
        console.log('[ImportBook] 7. Preparing to save cover');
        let cover = await loadedBook.getCover();
        if (cover?.type === 'image/svg+xml') {
          try {
            console.log('[ImportBook] Converting SVG cover to PNG...');
            cover = await svg2png(cover);
          } catch { }
        }
        if (cover) {
          const coverFilename = getCoverFilename(book);
          console.log('[ImportBook] 8. Saving cover with filename:', coverFilename);
          console.log('[ImportBook] 9. Cover size:', cover.size, 'bytes');
          await this.fs.writeFile(coverFilename, 'Books', await cover.arrayBuffer());
          console.log('[ImportBook] 10. Cover saved successfully');
        }
      }
      // Never overwrite the config file only when it's not existed
      if (!existingBook) {
        await this.saveBookConfig(book, INIT_BOOK_CONFIG);
        books.splice(0, 0, book);
      }

      // update file links with url or path or content uri
      if (typeof file === 'string') {
        if (isValidURL(file)) {
          book.url = file;
          if (existingBook) existingBook.url = file;
        }
        if (transient) {
          book.filePath = file;
          if (existingBook) existingBook.filePath = file;
        }
      }
      book.coverImageUrl = await this.generateCoverImageUrl(book);
      const f = file as ClosableFile;
      if (f && f.close) {
        await f.close();
      }

      const elapsed = Date.now() - startTime;
      console.log(`[importBook] ✅ Import SUCCESSFULLY completed in ${elapsed}ms`);
      console.log('[importBook] Returning book:', {
        hash: book.hash || existingBook?.hash,
        title: (existingBook || book).title,
        relativePath: (existingBook || book).relativePath,
        saveBook: saveBook,
        transient: transient,
      });

      return existingBook || book;
    } catch (error) {
      const elapsed = Date.now() - startTime;
      const errorMsg = (error as Error).message || String(error);
      const errorStack = (error as Error).stack;

      console.error(`[importBook] ✗ Import failed after ${elapsed}ms`);
      console.error(`[importBook] File: ${filename || (typeof file === 'string' ? file : 'unknown')}`);
      console.error(`[importBook] Error: ${errorMsg}`);
      if (errorStack) {
        console.error(`[importBook] Stack trace:`, errorStack);
      }

      // 如果是内存错误，提供更明确的提示
      if (errorMsg.includes('memory') || errorMsg.includes('ENOMEM')) {
        throw new Error(`内存不足：文件可能过大。请尝试导入较小的文件或关闭其他程序。原始错误：${errorMsg}`);
      }

      // 如果是文件大小限制错误，直接抛出
      if (errorMsg.includes('too large') || errorMsg.includes('Maximum size')) {
        throw error;
      }

      throw error;
    }

  }

  async importBookFromPath(
    filePath: string,
    relativePath: string,
    books: Book[],
  ): Promise<Book | null> {
    try {
      // Extract directory structure for grouping
      const directory = relativePath.split('/').slice(0, -1).join('/');
      const groupName = directory || BOOK_UNGROUPED_NAME;

      // Import the book as transient (don't copy, just reference)
      const book = await this.importBook(
        filePath,
        books,
        false, // saveBook = false
        true,  // saveCover = true
        false, // overwrite = false
        true,  // transient = true
        {
          targetRelativePath: relativePath,
          targetGroupName: groupName,
        },
      );

      return book;
    } catch (error) {
      console.error('Error importing book from path:', filePath, error);
      return null;
    }
  }

  /**
   * 重新分类书籍 - 在本地存储模式下移动文件
   * 在前端修改书籍分组时，需要同步文件系统中的文件位置
   */
  async reclassifyBook(book: Book, newGroupName: string, oldGroupName?: string): Promise<void> {
    // 仅在本地存储模式下执行文件移动
    // @ts-ignore - NEXT_PUBLIC_STORAGE_MODE is set at build time
    if (this.appPlatform !== 'web' || (process.env['NEXT_PUBLIC_STORAGE_MODE'] || 'local') !== 'local') {
      console.log('[Reclassify] 非本地存储模式，跳过文件移动');
      return;
    }

    // 如果没有 relativePath，说明是旧的 hash-based 存储，不执行文件移动
    if (!book.relativePath) {
      console.log('[Reclassify] 书籍未使用新存储结构，跳过文件移动:', book.title);
      return;
    }

    try {
      const normalizedNewGroupName = newGroupName?.trim() || BOOK_UNGROUPED_NAME;
      // 获取当前设置，读取分组目录配置
      const settings = await this.loadSettings();
      const groupDirectories = settings.groupDirectories || {};

      // 当前的 relativePath 就是旧路径
      const oldRelativePath = book.relativePath;

      // 提取文件名（不包含分组路径）
      let filename: string;
      if (oldGroupName && oldRelativePath.startsWith(`${oldGroupName}/`)) {
        // 如果旧路径包含分组，提取文件名
        filename = oldRelativePath.substring(oldGroupName.length + 1);
      } else {
        // 否则，relativePath 本身就是文件名（或已经是正确的相对路径）
        // 提取最后的文件名部分
        const parts = oldRelativePath.split('/');
        filename = parts[parts.length - 1] || '';
      }

      // 计算新路径：
      // 1. 如果新分组在 groupDirectories 中有配置，使用配置的目录
      // 2. 否则使用分组名称作为目录
      let targetDirectory: string;
      if (normalizedNewGroupName && groupDirectories[normalizedNewGroupName]) {
        targetDirectory = groupDirectories[normalizedNewGroupName];
      } else if (normalizedNewGroupName) {
        targetDirectory = normalizedNewGroupName;
      } else {
        targetDirectory = '';
      }

      const newRelativePath = targetDirectory
        ? `${targetDirectory}/${filename}`
        : filename;

      // 如果新旧路径相同，无需移动
      if (oldRelativePath === newRelativePath) {
        console.log('[Reclassify] 书籍分组未改变，无需移动文件');
        return;
      }

      console.log('[Reclassify] 准备移动书籍文件');
      console.log('  旧路径:', oldRelativePath);
      console.log('  新路径:', newRelativePath);
      console.log('  文件名:', filename);
      console.log('  新分组:', newGroupName);
      console.log('  目标目录:', targetDirectory);

      // 调用 API 移动文件
      const response = await fetch('/api/storage/reclassify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldPath: oldRelativePath,
          newPath: newRelativePath,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('[Reclassify] 文件移动失败:', error);
        throw new Error(`Failed to move book files: ${error}`);
      }

      const result = await response.json();

      // 更新 book 的路径信息
      book.relativePath = newRelativePath;
      book.groupName = normalizedNewGroupName;
      // 如果 API 返回了绝对路径，也更新它
      if (result.absolutePath) {
        book.absolutePath = result.absolutePath;
      }

      console.log('[Reclassify] 文件移动成功:', result);
    } catch (error) {
      console.error('[Reclassify] 重新分类书籍时出错:', error);
      throw error;
    }
  }

  async deleteBook(book: Book, deleteAction: DeleteAction): Promise<void> {
    console.log('Deleting book with action:', deleteAction, book.title);
    if (deleteAction === 'local' || deleteAction === 'both') {
      const localDeleteFps =
        deleteAction === 'local'
          ? [getLocalBookFilename(book)]
          : [getLocalBookFilename(book), getCoverFilename(book)];
      for (const fp of localDeleteFps) {
        console.log('Deleting local file:', fp);
        await this.fs.removeFile(fp, 'Books');
      }
      if (deleteAction === 'local') {
        book.downloadedAt = null;
      } else {
        book.deletedAt = Date.now();
        book.downloadedAt = null;
        book.coverDownloadedAt = null;
      }
    }
    // Cloud storage delete functionality removed - using local server storage only
    if ((deleteAction === 'cloud' || deleteAction === 'both') && book.uploadedAt) {
      console.log('Cloud delete operation skipped - cloud storage removed');
      book.uploadedAt = null;
    }
  }

  // Cloud storage methods removed - using local server storage only

  async exportBook(book: Book): Promise<boolean> {
    const { file } = await this.loadBookContent(book);
    const content = await file.arrayBuffer();
    const filename = `${makeSafeFilename(book.title)}.${book.format.toLowerCase()}`;
    const filepath = await this.resolveFilePath(getLocalBookFilename(book), 'Books');
    const fileType = file.type || 'application/octet-stream';
    return await this.saveFile(filename, content, filepath, fileType);
  }

  async isBookAvailable(book: Book): Promise<boolean> {
    const fp = getLocalBookFilename(book);
    console.log('[isBookAvailable] 📋 Checking book:', {
      title: book.title,
      hash: book.hash,
      relativePath: book.relativePath,
      filePath: book.filePath,
      url: book.url,
      localPath: fp,
    });

    // Check local book file (highest priority)
    try {
      const localExists = await this.fs.exists(fp, 'Books');
      console.log('[isBookAvailable] 🔍 Local file exists:', localExists, 'at path:', fp);
      if (localExists) {
        try {
          const stats = await this.fs.stats(fp, 'Books');
          console.log('[isBookAvailable] ✅ Local file verified, size:', stats.size, 'bytes');
          return true;
        } catch (statsErr) {
          console.warn('[isBookAvailable] ⚠️ File exists but can\'t get stats:', statsErr);
          return true;
        }
      }
    } catch (error) {
      console.error('[isBookAvailable] ❌ Error checking local file:', error);
    }

    // Check transient file path
    if (book.filePath) {
      try {
        const transientExists = await this.fs.exists(book.filePath, 'None');
        console.log('[isBookAvailable] 🔍 Transient file exists:', transientExists, 'at path:', book.filePath);
        if (transientExists) return true;
      } catch (error) {
        console.error('[isBookAvailable] ❌ Error checking transient file:', error);
      }
    }

    // Check URL validity
    if (book.url) {
      const valid = isValidURL(book.url);
      console.log('[isBookAvailable] 🔍 URL valid:', valid, 'URL:', book.url);
      if (valid) return true;
    }

    console.error('[isBookAvailable] ❌ FAILED: No available source found for book:', book.title);
    return false;
  }

  async getBookFileSize(book: Book): Promise<number | null> {
    const fp = getLocalBookFilename(book);
    if (await this.fs.exists(fp, 'Books')) {
      const file = await this.fs.openFile(fp, 'Books');
      const size = file.size;
      const f = file as ClosableFile;
      if (f && f.close) {
        await f.close();
      }
      return size;
    }
    return null;
  }

  async loadBookContent(book: Book): Promise<BookContent> {
    let file: File;
    const fp = getLocalBookFilename(book);
    if (await this.fs.exists(fp, 'Books')) {
      file = await this.fs.openFile(fp, 'Books');
    } else if (book.filePath) {
      file = await this.fs.openFile(book.filePath, 'None');
    } else if (book.url) {
      file = await this.fs.openFile(book.url, 'None');
    } else {
      // 0.9.64 has a bug that book.title might be modified but the filename is not updated
      const bookDir = getDir(book);
      const files = await this.fs.readDir(getDir(book), 'Books');
      if (files.length > 0) {
        const bookFile = files.find((f) => f.path.endsWith(`.${EXTS[book.format]}`));
        if (bookFile) {
          file = await this.fs.openFile(`${bookDir}/${bookFile.path}`, 'Books');
        } else {
          throw new Error(BOOK_FILE_NOT_FOUND_ERROR);
        }
      } else {
        throw new Error(BOOK_FILE_NOT_FOUND_ERROR);
      }
    }
    return { book, file };
  }

  async loadBookConfig(book: Book, settings: SystemSettings): Promise<BookConfig> {
    const globalViewSettings = {
      ...settings.globalViewSettings,
      ...(FIXED_LAYOUT_FORMATS.has(book.format) ? DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS : {}),
    };
    try {
      let str = '{}';
      if (await this.fs.exists(getConfigFilename(book), 'Books')) {
        str = (await this.fs.readFile(getConfigFilename(book), 'Books', 'text')) as string;
      }
      return deserializeConfig(str, globalViewSettings, DEFAULT_BOOK_SEARCH_CONFIG);
    } catch {
      return deserializeConfig('{}', globalViewSettings, DEFAULT_BOOK_SEARCH_CONFIG);
    }
  }

  async fetchBookDetails(book: Book) {
    const fp = getLocalBookFilename(book);
    if (!(await this.fs.exists(fp, 'Books')) && book.uploadedAt) {
      // Cloud download functionality removed - books should already be stored locally
      console.warn('Book file not found locally and cloud download is disabled:', book.title);
      throw new Error('Book file not found locally');
    }
    const { file } = await this.loadBookContent(book);
    const bookDoc = (await new DocumentLoader(file).open()).book;
    const f = file as ClosableFile;
    if (f && f.close) {
      await f.close();
    }
    return bookDoc.metadata;
  }

  async saveBookConfig(book: Book, config: BookConfig, settings?: SystemSettings) {
    let serializedConfig: string;
    if (settings) {
      const globalViewSettings = {
        ...settings.globalViewSettings,
        ...(FIXED_LAYOUT_FORMATS.has(book.format) ? DEFAULT_FIXED_LAYOUT_VIEW_SETTINGS : {}),
      };
      serializedConfig = serializeConfig(config, globalViewSettings, DEFAULT_BOOK_SEARCH_CONFIG);
    } else {
      serializedConfig = JSON.stringify(config);
    }
    await this.fs.writeFile(getConfigFilename(book), 'Books', serializedConfig);
  }

  async generateCoverImageUrl(book: Book): Promise<string> {
    // Web 平台直接返回稳定的 URL，无需每次生成 Blob URL
    if (this.appPlatform === 'web') {
      const coverPath = getCoverFilename(book);
      const coverUrl = this.fs.getURL(this.fs.resolvePath(coverPath, 'Books').fp);
      return coverUrl || `${this.localBooksDir}/${coverPath}`;
    } else {
      // 非 Web 平台使用原有逻辑
      await this.ensureCoverExists(book);
      return this.getCoverImageUrl(book);
    }
  }

  async regenerateMissingCovers(books: Book[]): Promise<{ recovered: number; skipped: number }> {
    let recovered = 0;
    let skipped = 0;
    for (const book of books) {
      try {
        const coverPath = getCoverFilename(book);
        const exists = await this.fs.exists(coverPath, 'Books');
        if (exists) {
          skipped++;
          continue;
        }
        await this.ensureCoverExists(book);
        const existsAfter = await this.fs.exists(coverPath, 'Books');
        if (existsAfter) recovered++;
      } catch {
        skipped++;
      }
    }
    return { recovered, skipped };
  }

  private async ensureCoverExists(book: Book): Promise<void> {
    if (book.deletedAt) return;
    const coverPath = getCoverFilename(book);
    const coverExists = await this.fs.exists(coverPath, 'Books');
    if (coverExists) return;

    try {
      console.log('[Cover] Missing cover for:', book.title, '→ regenerating');

      // 优先使用 relativePath（本地存储），否则使用 filePath（绝对路径/临时导入）
      const bookPath = book.relativePath || book.filePath;
      if (!bookPath) {
        console.warn('[Cover] No book path available to regenerate cover:', book.title);
        return;
      }

      // 确保元数据文件夹存在
      const metadataDir = bookPath.replace(/\.[^.]+$/, '');
      try {
        await this.fs.createDir(metadataDir, 'Books', true);
        console.log('[Cover] 元数据文件夹已创建:', metadataDir);
      } catch (e) {
        console.warn('[Cover] 创建元数据文件夹失败:', metadataDir, e);
      }

      const base: BaseDir = book.relativePath ? 'Books' : 'None';
      const bookFile = await this.fs.openFile(bookPath, base);
      const { book: loadedBook } = await new DocumentLoader(bookFile).open();
      const cover = await loadedBook.getCover();

      if (!cover) return;

      let coverBlob = cover;
      if (cover.type === 'image/svg+xml') {
        try {
          coverBlob = await svg2png(cover);
        } catch (e) {
          console.warn('[Cover] SVG→PNG failed, using original:', e);
        }
      }

      // 压缩封面图片
      let finalBlob: ArrayBuffer;
      const originalSize = coverBlob.size;

      if (shouldCompress(coverBlob)) {
        try {
          finalBlob = await compressImageToArrayBuffer(coverBlob, {
            maxWidth: 400,
            maxHeight: 600,
            format: 'image/webp',
            quality: 0.8,
          });
          const info = getCompressionInfo(originalSize, finalBlob.byteLength);
          console.log(
            `[Cover] 压缩封面: ${formatFileSize(originalSize)} → ${formatFileSize(finalBlob.byteLength)} (节省 ${info.savedPercent})`
          );
        } catch (e) {
          console.warn('[Cover] 压缩失败，使用原始图片:', e);
          finalBlob = await coverBlob.arrayBuffer();
        }
      } else {
        finalBlob = await coverBlob.arrayBuffer();
        console.log(`[Cover] 封面已经很小 (${formatFileSize(originalSize)})，跳过压缩`);
      }

      await this.fs.writeFile(coverPath, 'Books', finalBlob);
      console.log('[Cover] Regenerated cover saved:', coverPath);
    } catch (error) {
      console.warn('[Cover] Failed to regenerate cover for', book.title, error);
    }
  }

  private libraryLoadPromise: Promise<Book[]> | null = null;
  private libraryLoadTime: number = 0;
  private readonly LIBRARY_CACHE_TTL = 5000; // 5 秒内的重复请求使用缓存

  async loadLibraryBooks(): Promise<Book[]> {
    const now = Date.now();

    // 如果存在正在进行的请求，则等待其完成
    if (this.libraryLoadPromise) {
      console.log('[loadLibraryBooks] 对象已存在进行中的请求，使用现有Promise');
      return this.libraryLoadPromise;
    }

    // 如果上次加载是最近 5 秒内，且缓存有效，不重新载载
    if (now - this.libraryLoadTime < this.LIBRARY_CACHE_TTL && this._libraryCache) {
      console.log('[loadLibraryBooks] 使用缓存的书籍 (缓存有效抱歳):', this._libraryCache.length);
      return this._libraryCache;
    }

    console.log('[loadLibraryBooks] 开始加载新的书籍');
    this.libraryLoadPromise = this._loadLibraryBooksInternal();

    try {
      const result = await this.libraryLoadPromise;
      this.libraryLoadTime = Date.now();
      this._libraryCache = result;
      return result;
    } finally {
      this.libraryLoadPromise = null;
    }
  }

  private _libraryCache: Book[] | null = null;

  private async _loadLibraryBooksInternal(): Promise<Book[]> {
    const libraryFilename = getLibraryFilename();

    if (!(await this.fs.exists('', 'Books'))) {
      await this.fs.createDir('', 'Books', true);
    }

    const books = await this.safeLoadJSON<Book[]>(libraryFilename, 'Books', []);
    console.log(`[loadLibraryBooks] \u4ece ${libraryFilename} \u52a0\u8f7d\u4e86 ${books.length} \u672c\u4e66`);

    // \u751f\u6210\u7a33\u5b9a\u7684 coverImageUrl\uff08\u73b0\u5728\u662f\u8f7b\u91cf\u7ea7\u64cd\u4f5c\uff0c\u53ea\u662f\u5b57\u7b26\u4e32\u62fc\u63a5\uff09
    await Promise.all(
      books.map(async (book) => {
        book.coverImageUrl = await this.generateCoverImageUrl(book);
        book.updatedAt ??= book.lastUpdated || Date.now();
        return book;
      }),
    );

    console.log(`[loadLibraryBooks] \u8fd4\u56de ${books.length} \u672c\u4e66`);
    return books;
  }

  async loadLibraryBooks_OLD(): Promise<Book[]> {
    // 这是旧方法，已被新的防重复请求版本替代
    throw new Error('Use loadLibraryBooks() instead');
  }

  async saveLibraryBooks(books: Book[]): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const libraryBooks = books.map(({ coverImageUrl, ...rest }) => rest);
    await this.safeSaveJSON(getLibraryFilename(), 'Books', libraryBooks);
  }

  /**
   * 校准书籍路径
   * 扫描文件系统与 library.json 进行对比，找出路径不一致的书籍
   */
  async reconcileBookPaths(books: Book[]): Promise<any> {
    // 仅在本地存储模式下执行
    // @ts-ignore - NEXT_PUBLIC_STORAGE_MODE is set at build time
    if (this.appPlatform !== 'web' || (process.env['NEXT_PUBLIC_STORAGE_MODE'] || 'local') !== 'local') {
      console.log('[Reconcile] 非本地存储模式，跳过路径校准');
      return { success: false, error: 'Not in local storage mode' };
    }

    try {
      console.log('[Reconcile] 开始校准书籍路径，共', books.length, '本书');

      // 准备需要发送的书籍数据（只发送必要字段）
      const libraryData = books
        .filter(book => !book.deletedAt)
        .map(book => ({
          hash: book.hash,
          relativePath: book.relativePath,
          absolutePath: book.absolutePath,
          title: book.title,
          groupName: book.groupName,
        }));

      const response = await fetch('/api/storage/reconcile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ library: libraryData }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('[Reconcile] 路径校准失败:', error);
        throw new Error(`Failed to reconcile paths: ${error}`);
      }

      const result = await response.json();
      console.log('[Reconcile] 路径校准完成:', result.summary);
      return result;
    } catch (error) {
      console.error('[Reconcile] 路径校准出错:', error);
      throw error;
    }
  }

  /**
   * 应用路径校准结果
   * 根据校准结果更新 library.json 中的书籍信息
   */
  async applyReconciliation(books: Book[], reconcileResults: any[]): Promise<Book[]> {
    const updatedBooks = [...books];

    for (const result of reconcileResults) {
      if (result.status === 'moved') {
        // 找到对应的书籍并更新路径信息
        const bookIndex = updatedBooks.findIndex(b => b.hash === result.hash);
        if (bookIndex !== -1) {
          const book = updatedBooks[bookIndex];
          if (book) {
            book.relativePath = result.newRelativePath;
            book.absolutePath = result.absolutePath;
            if (result.suggestedGroupName !== undefined) {
              book.groupName = result.suggestedGroupName;
              // 更新 groupId
              book.groupId = result.suggestedGroupName
                ? md5Fingerprint(result.suggestedGroupName)
                : '';
            }
            book.updatedAt = Date.now();
            console.log('[Reconcile] 更新书籍:', book.title, '新路径:', book.relativePath);
          }
        }
      }
    }

    await this.saveLibraryBooks(updatedBooks);
    return updatedBooks;
  }

  private imageToArrayBuffer(imageUrl?: string, imageFile?: string): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      if (!imageUrl && !imageFile) {
        reject(new Error('No image URL or file provided'));
        return;
      }
      if (this.appPlatform === 'web' && imageUrl && imageUrl.startsWith('blob:')) {
        fetch(imageUrl)
          .then((response) => response.arrayBuffer())
          .then((buffer) => resolve(buffer))
          .catch((error) => reject(error));
      } else if (this.appPlatform === 'tauri' && imageFile) {
        this.fs
          .openFile(imageFile, 'None')
          .then((file) => file.arrayBuffer())
          .then((buffer) => resolve(buffer))
          .catch((error) => reject(error));
      } else if (this.appPlatform === 'tauri' && imageUrl) {
        tauriFetch(imageUrl, { method: 'GET' })
          .then((response) => response.arrayBuffer())
          .then((buffer) => resolve(buffer))
          .catch((error) => reject(error));
      } else {
        reject(new Error('Unsupported platform or missing image data'));
      }
    });
  }

  async updateCoverImage(book: Book, imageUrl?: string, imageFile?: string): Promise<void> {
    if (imageUrl === '_blank') {
      await this.fs.removeFile(getCoverFilename(book), 'Books');
    } else if (imageUrl || imageFile) {
      const arrayBuffer = await this.imageToArrayBuffer(imageUrl, imageFile);

      // 压缩用户上传的封面
      let finalBuffer: ArrayBuffer;
      const originalSize = arrayBuffer.byteLength;

      if (shouldCompress(new Blob([arrayBuffer]))) {
        try {
          const blob = new Blob([arrayBuffer]);
          finalBuffer = await compressImageToArrayBuffer(blob, {
            maxWidth: 400,
            maxHeight: 600,
            format: 'image/webp',
            quality: 0.8,
          });
          const info = getCompressionInfo(originalSize, finalBuffer.byteLength);
          console.log(
            `[Cover] 用户上传封面压缩: ${formatFileSize(originalSize)} → ${formatFileSize(finalBuffer.byteLength)} (节省 ${info.savedPercent})`
          );
        } catch (e) {
          console.warn('[Cover] 压缩失败，使用原始图片:', e);
          finalBuffer = arrayBuffer;
        }
      } else {
        finalBuffer = arrayBuffer;
        console.log(`[Cover] 上传封面已经很小 (${formatFileSize(originalSize)})，跳过压缩`);
      }

      await this.fs.writeFile(getCoverFilename(book), 'Books', finalBuffer);
    }
  }

  private async loadJSONFile(
    path: string,
    base: BaseDir,
  ): Promise<{ success: boolean; data?: unknown; error?: unknown }> {
    try {
      const txt = await this.fs.readFile(path, base, 'text');
      if (!txt || typeof txt !== 'string' || txt.trim().length === 0) {
        return { success: false, error: 'File is empty or invalid' };
      }
      try {
        const data = JSON.parse(txt as string);
        return { success: true, data };
      } catch (parseError) {
        return { success: false, error: `JSON parse error: ${parseError}` };
      }
    } catch (error) {
      return { success: false, error };
    }
  }

  /**
   * Safely loads a JSON file with automatic backup fallback.
   * If the main file is corrupted, attempts to load from backup.
   * @param filename - The name of the file to load (without .bak extension)
   * @param base - The base directory
   * @param defaultValue - Default value to return if both files fail
   */
  private async safeLoadJSON<T>(filename: string, base: BaseDir, defaultValue: T): Promise<T> {
    const backupFilename = `${filename}.bak`;

    // Try loading main file
    const mainResult = await this.loadJSONFile(filename, base);
    if (mainResult.success) {
      return mainResult.data as T;
    }

    console.warn(`Failed to load ${filename}, attempting backup...`, mainResult.error);

    // Try loading backup file
    const backupResult = await this.loadJSONFile(backupFilename, base);
    if (backupResult.success) {
      console.warn(`Loaded from backup: ${backupFilename}`);
      // Restore the main file from backup
      try {
        const backupData = JSON.stringify(backupResult.data, null, 2);
        await this.fs.writeFile(filename, base, backupData);
        console.log(`Restored ${filename} from backup`);
      } catch (error) {
        console.error(`Failed to restore ${filename} from backup:`, error);
      }
      return backupResult.data as T;
    }

    console.error(`Both ${filename} and ${backupFilename} failed to load`);
    return defaultValue;
  }

  /**
   * Safely saves a JSON file with atomic write using backup strategy.
   * Strategy: write to backup first, then to main file.
   * This ensures at least one valid copy exists at all times.
   * @param filename - The name of the file to save (without .bak extension)
   * @param base - The base directory
   * @param data - The data to save
   */
  private async safeSaveJSON(filename: string, base: BaseDir, data: unknown): Promise<void> {
    const backupFilename = `${filename}.bak`;
    const jsonData = JSON.stringify(data, null, 2);

    // Strategy: Always write to backup first, then to main file
    // This ensures we always have at least one valid copy
    try {
      // Step 1: Write to backup file
      await this.fs.writeFile(backupFilename, base, jsonData);

      // Step 2: Write to main file
      await this.fs.writeFile(filename, base, jsonData);
    } catch (error) {
      console.error(`Failed to save ${filename}:`, error);
      throw new Error(`Failed to save ${filename}: ${error}`);
    }
  }

  /** Ensure necessary directories exist for a book (both legacy hash-based and new flat local paths). */
  private async ensureLocalBookDirs(book: Book): Promise<void> {
    if (book.relativePath) {
      const segments = book.relativePath.split('/');
      const fileDir = segments.slice(0, -1).join('/');
      const metadataDir = book.relativePath.replace(/\.[^.]+$/, '');

      if (fileDir) {
        await this.fs.createDir(fileDir, 'Books', true);
      }
      await this.fs.createDir(metadataDir, 'Books', true);
      return;
    }

    // Legacy hash-based storage
    if (!(await this.fs.exists(getDir(book), 'Books'))) {
      await this.fs.createDir(getDir(book), 'Books');
    }
  }

  private async migrate20251124(): Promise<void> {
    console.log('Running migration for version 20251124 to rename the backup library file...');
    const oldBackupFilename = getLibraryBackupFilename();
    const newBackupFilename = `${getLibraryFilename()}.bak`;
    if (await this.fs.exists(oldBackupFilename, 'Books')) {
      try {
        const content = await this.fs.readFile(oldBackupFilename, 'Books', 'text');
        await this.fs.writeFile(newBackupFilename, 'Books', content);
        await this.fs.removeFile(oldBackupFilename, 'Books');
        console.log('Migration to rename backup library file completed successfully.');
      } catch (error) {
        console.error('Error during migration to rename backup library file:', error);
      }
    }
  }

  /**
   * Migration 20260121: move legacy hash-based local books to flat relativePath layout in local mode.
   * - Applies only when appPlatform === 'web' and STORAGE_MODE is local
   * - For any book without relativePath, derive a flat path and move files + metadata
   */
  private async migrate20260121(): Promise<void> {
    // @ts-ignore - NEXT_PUBLIC_STORAGE_MODE is set at build time
    const isLocalMode = (process.env['NEXT_PUBLIC_STORAGE_MODE'] || 'local') === 'local';
    if (this.appPlatform !== 'web' || !isLocalMode) {
      console.log('[Migration 20260121] Skip (not web/local mode)');
      return;
    }

    console.log('[Migration 20260121] Start migrating legacy hash-based books to flat layout');

    const books = await this.loadLibraryBooks();
    let migrated = 0;

    for (const book of books) {
      if (book.relativePath) continue;

      const ext = EXTS[book.format] || book.format?.toLowerCase?.() || 'book';
      const safeBaseName = makeSafeFilename(book.sourceTitle || book.title || book.hash);
      const normalizedGroupName = (book.groupName && book.groupName.trim()) || BOOK_UNGROUPED_NAME;
      const newRelativePath = `${normalizedGroupName ? `${normalizedGroupName}/` : ''}${safeBaseName}.${ext}`;

      // Legacy paths
      const legacyBookPath = `${book.hash}/${safeBaseName}.${ext}`;
      const legacyCoverPath = `${book.hash}/cover.png`;
      const legacyConfigPath = `${book.hash}/config.json`;

      // New paths
      const newBookPath = newRelativePath;
      const newCoverPath = newRelativePath.replace(/\.[^.]+$/, '') + '/cover.png';
      const newConfigPath = newRelativePath.replace(/\.[^.]+$/, '') + '/config.json';

      try {
        // Move book file if present
        if (await this.fs.exists(legacyBookPath, 'Books')) {
          await this.ensureLocalBookDirs({ ...book, relativePath: newRelativePath } as Book);
          const file = await this.fs.openFile(legacyBookPath, 'Books');
          await this.fs.writeFile(newBookPath, 'Books', file);
          await this.fs.removeFile(legacyBookPath, 'Books');
        }

        // Move cover
        if (await this.fs.exists(legacyCoverPath, 'Books')) {
          const coverFile = await this.fs.openFile(legacyCoverPath, 'Books');
          await this.fs.writeFile(newCoverPath, 'Books', coverFile);
          await this.fs.removeFile(legacyCoverPath, 'Books');
        }

        // Move config
        if (await this.fs.exists(legacyConfigPath, 'Books')) {
          const configContent = await this.fs.readFile(legacyConfigPath, 'Books', 'text');
          await this.fs.writeFile(newConfigPath, 'Books', configContent);
          await this.fs.removeFile(legacyConfigPath, 'Books');
        }

        // Update in-memory book
        book.relativePath = newRelativePath;
        migrated++;
      } catch (error) {
        console.error('[Migration 20260121] Failed to migrate book:', book.title, error);
      }
    }

    if (migrated > 0) {
      await this.saveLibraryBooks(books);
      console.log(`[Migration 20260121] Migrated ${migrated} book(s) to flat layout`);
    } else {
      console.log('[Migration 20260121] No legacy books to migrate');
    }
  }

  /**
   * Migration 20260202: move root-level local books into the "Ungrouped" directory.
   * - Applies only when appPlatform === 'web' and STORAGE_MODE is local
   * - For any book with relativePath lacking a directory, move book + metadata to BOOK_UNGROUPED_NAME/...
   */
  private async migrate20260202(): Promise<void> {
    // @ts-ignore - NEXT_PUBLIC_STORAGE_MODE is set at build time
    const isLocalMode = (process.env['NEXT_PUBLIC_STORAGE_MODE'] || 'local') === 'local';
    if (this.appPlatform !== 'web' || !isLocalMode) {
      console.log('[Migration 20260202] Skip (not web/local mode)');
      return;
    }

    console.log('[Migration 20260202] Start moving root-level books to ungrouped directory');

    const books = await this.loadLibraryBooks();
    let migrated = 0;

    for (const book of books) {
      if (!book.relativePath) continue;

      const hasDir = book.relativePath.includes('/');
      const alreadyUngrouped = book.relativePath.startsWith(`${BOOK_UNGROUPED_NAME}/`);

      if (!hasDir && !alreadyUngrouped) {
        const oldBookPath = book.relativePath;
        const newRelativePath = `${BOOK_UNGROUPED_NAME}/${oldBookPath}`;
        const oldCoverPath = oldBookPath.replace(/\.[^.]+$/, '') + '/cover.png';
        const oldConfigPath = oldBookPath.replace(/\.[^.]+$/, '') + '/config.json';
        const newCoverPath = newRelativePath.replace(/\.[^.]+$/, '') + '/cover.png';
        const newConfigPath = newRelativePath.replace(/\.[^.]+$/, '') + '/config.json';

        try {
          await this.ensureLocalBookDirs({ ...book, relativePath: newRelativePath } as Book);

          if (await this.fs.exists(oldBookPath, 'Books')) {
            const file = await this.fs.openFile(oldBookPath, 'Books');
            await this.fs.writeFile(newRelativePath, 'Books', file);
            await this.fs.removeFile(oldBookPath, 'Books');
          }

          if (await this.fs.exists(oldCoverPath, 'Books')) {
            const coverFile = await this.fs.openFile(oldCoverPath, 'Books');
            await this.fs.writeFile(newCoverPath, 'Books', coverFile);
            await this.fs.removeFile(oldCoverPath, 'Books');
          }

          if (await this.fs.exists(oldConfigPath, 'Books')) {
            const configContent = await this.fs.readFile(oldConfigPath, 'Books', 'text');
            await this.fs.writeFile(newConfigPath, 'Books', configContent);
            await this.fs.removeFile(oldConfigPath, 'Books');
          }

          book.relativePath = newRelativePath;
          book.groupName = BOOK_UNGROUPED_NAME;
          book.groupId = md5Fingerprint(BOOK_UNGROUPED_NAME);
          migrated++;
        } catch (error) {
          console.error('[Migration 20260202] Failed to migrate book:', book.title, error);
        }
      } else if (alreadyUngrouped && (!book.groupName || book.groupName.trim() !== BOOK_UNGROUPED_NAME)) {
        book.groupName = BOOK_UNGROUPED_NAME;
        book.groupId = md5Fingerprint(BOOK_UNGROUPED_NAME);
        migrated++;
      }
    }

    if (migrated > 0) {
      await this.saveLibraryBooks(books);
      console.log(`[Migration 20260202] Migrated ${migrated} book(s) to ungrouped directory`);
    } else {
      console.log('[Migration 20260202] No root-level books to migrate');
    }
  }
}
