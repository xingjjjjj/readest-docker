'use client';

import './styles/morgan.css';

import clsx from 'clsx';
import React, { useState, useRef, useEffect, Suspense, useCallback } from 'react';
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation';
import { OverlayScrollbarsComponent, OverlayScrollbarsComponentRef } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

import { Book } from '@/types/book';
import { AppService } from '@/types/system';
import { navigateToLibrary, navigateToReader } from '@/utils/nav';
import { formatAuthors, formatTitle, getPrimaryLanguage, listFormater } from '@/utils/book';
import { eventDispatcher } from '@/utils/event';
import { getDirPath, getFilename, joinPaths } from '@/utils/path';
import { parseOpenWithFiles } from '@/helpers/openWith';
import { isTauriAppPlatform, isWebAppPlatform } from '@/services/environment';
import { checkForAppUpdates, checkAppReleaseNotes } from '@/helpers/updater';
import { impactFeedback } from '@tauri-apps/plugin-haptics';
import { getCurrentWebview } from '@tauri-apps/api/webview';

import { useEnv } from '@/context/EnvContext';
import { useAuth } from '@/context/AuthContext';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useLibraryStore } from '@/store/libraryStore';
import { useSettingsStore } from '@/store/settingsStore';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import { usePullToRefresh } from '@/hooks/usePullToRefresh';
import { useTheme } from '@/hooks/useTheme';
import { useUICSS } from '@/hooks/useUICSS';
import { useDemoBooks } from './hooks/useDemoBooks';
import { useBooksSync } from './hooks/useBooksSync';
import { useBookDataStore } from '@/store/bookDataStore';
import { useScreenWakeLock } from '@/hooks/useScreenWakeLock';
import { useOpenWithBooks } from '@/hooks/useOpenWithBooks';
import { SelectedFile, useFileSelector } from '@/hooks/useFileSelector';
import { lockScreenOrientation, selectDirectory } from '@/utils/bridge';
import { requestStoragePermission } from '@/utils/permission';
import { BOOK_UNGROUPED_NAME, SUPPORTED_BOOK_EXTS } from '@/services/constants';
import { tauriHandleClose, tauriHandleSetAlwaysOnTop, tauriHandleToggleFullScreen, tauriQuitApp } from '@/utils/window';

import { BookMetadata } from '@/libs/document';
import { AboutWindow } from '@/components/AboutWindow';
import { BookDetailModal } from '@/components/metadata';
import { UpdaterWindow } from '@/components/UpdaterWindow';
import { MigrateDataWindow } from './components/MigrateDataWindow';
import { useDragDropImport } from './hooks/useDragDropImport';
import { useTransferQueue } from '@/hooks/useTransferQueue';
import { Toast } from '@/components/Toast';
import Spinner from '@/components/Spinner';
import DropIndicator from '@/components/DropIndicator';
import LandingHero from './components/LandingHero';
import SettingsDialog from '@/components/settings/SettingsDialog';
import ModalPortal from '@/components/ModalPortal';
import GroupSidebar from './components/GroupSidebar';
import MorganSidebar from './components/MorganSidebar';
import useShortcuts from '@/hooks/useShortcuts';

// 摩根书房新组件
import ChronicleBand from './components/ChronicleBand';
import MarginaliaView from './components/MarginaliaView';
import MorganOverviewBar from './components/LibraryOverviewBar';
import Bookshelf from './components/Bookshelf';

const LibraryPageWithSearchParams = () => {
  const searchParams = useSearchParams();
  return <LibraryPageContent searchParams={searchParams} />;
};

const LibraryPageContent = ({ searchParams }: { searchParams: ReadonlyURLSearchParams | null }) => {
  const router = useRouter();
  const { envConfig, appService } = useEnv();
  const { token, user } = useAuth();
  const {
    library: libraryBooks,
    isSyncing,
    syncProgress,
    updateBook,
    updateBooks,
    setLibrary,
    getGroupId,
    getGroupName,
    refreshGroups,
    checkOpenWithBooks,
    checkLastOpenBooks,
    setCheckOpenWithBooks,
    setCheckLastOpenBooks,
    loadNotesData,
  } = useLibraryStore();
  const _ = useTranslation();
  const { selectFiles } = useFileSelector(appService, _);
  const { safeAreaInsets: insets, isRoundedWindow } = useThemeStore();
  const { clearBookData } = useBookDataStore();
  const { settings, setSettings, saveSettings } = useSettingsStore();
  const { isSettingsDialogOpen, setSettingsDialogOpen } = useSettingsStore();
  const [loading, setLoading] = useState(false);
  const [libraryLoaded, setLibraryLoaded] = useState(false);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [isSelectNone, setIsSelectNone] = useState(false);
  const [showDetailsBook, setShowDetailsBook] = useState<Book | null>(null);
  const [currentGroupPath, setCurrentGroupPath] = useState<string | undefined>(undefined);
  const [pendingNavigationBookIds, setPendingNavigationBookIds] = useState<string[] | null>(null);
  const [view, setView] = useState<'catalogue' | 'marginalia'>('catalogue');
  const isInitiating = useRef(false);

  const iconSize = useResponsiveSize(18);
  const viewSettings = settings.globalViewSettings;
  const demoBooks = useDemoBooks();
  const osRef = useRef<OverlayScrollbarsComponentRef>(null);
  const containerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useTheme({ systemUIVisible: true, appThemeColor: 'base-200' });
  useUICSS();

  useOpenWithBooks();
  useTransferQueue(libraryLoaded);

  const { pullLibrary, pushLibrary } = useBooksSync();
  const { isDragging } = useDragDropImport();

  usePullToRefresh(containerRef, pullLibrary);
  useScreenWakeLock(settings.screenWakeLock);

  useShortcuts({
    onToggleFullscreen: async () => { if (isTauriAppPlatform()) await tauriHandleToggleFullScreen(); },
    onCloseWindow: async () => { if (isTauriAppPlatform()) await tauriHandleClose(); },
    onQuitApp: async () => { if (isTauriAppPlatform()) await tauriQuitApp(); },
    onOpenFontLayoutSettings: () => setSettingsDialogOpen(true),
    onOpenBooks: () => handleImportBooksFromFiles(),
  });

  useEffect(() => {
    sessionStorage.setItem('lastLibraryParams', searchParams?.toString() || '');
  }, [searchParams]);

  useEffect(() => {
    const doCheckAppUpdates = async () => {
      if (appService?.hasUpdater && settings.autoCheckUpdates) await checkForAppUpdates(_);
      else if (appService?.hasUpdater === false) checkAppReleaseNotes();
    };
    if (settings.alwaysOnTop) tauriHandleSetAlwaysOnTop(settings.alwaysOnTop);
    doCheckAppUpdates();
  }, [appService?.hasUpdater, settings]);

  useEffect(() => {
    if (appService?.isMobileApp) lockScreenOrientation({ orientation: 'auto' });
  }, [appService]);

  const handleRefreshLibrary = useCallback(async () => {
    const appService = await envConfig.getAppService();
    const settings = await appService.loadSettings();
    const library = await appService.loadLibraryBooks();
    setSettings(settings);
    setLibrary(library);
    await loadNotesData(envConfig);
  }, [envConfig, appService, loadNotesData]);

  useEffect(() => {
    if (appService?.hasWindow) {
      const currentWebview = getCurrentWebview();
      const unlisten = currentWebview.listen('close-reader-window', async () => handleRefreshLibrary());
      return () => { unlisten.then((fn) => fn()); };
    }
    return;
  }, [appService, handleRefreshLibrary]);

  const handleImportBookFiles = useCallback(async (event: CustomEvent) => {
    const selectedFiles: SelectedFile[] = event.detail.files;
    const groupId: string = event.detail.groupId || '';
    if (selectedFiles.length === 0) return;
    await importBooks(selectedFiles, groupId);
  }, []);

  useEffect(() => {
    eventDispatcher.on('import-book-files', handleImportBookFiles);
    return () => { eventDispatcher.off('import-book-files', handleImportBookFiles); };
  }, [handleImportBookFiles]);

  useEffect(() => {
    refreshGroups();
    if (!libraryBooks.some((book) => !book.deletedAt)) handleSetSelectMode(false);
  }, [libraryBooks]);

  const processOpenWithFiles = useCallback(async (appService: AppService, openWithFiles: string[], libraryBooks: Book[]) => {
    const settings = await appService.loadSettings();
    const bookIds: string[] = [];
    for (const file of openWithFiles) {
      try {
        const temp = appService.isMobile ? false : !settings.autoImportBooksOnOpen;
        const book = await appService.importBook(file, libraryBooks, true, true, false, temp);
        if (book) bookIds.push(book.hash);
      } catch (error) { console.log('Failed to import book:', file, error); }
    }
    setLibrary(libraryBooks);
    appService.saveLibraryBooks(libraryBooks);
    if (bookIds.length > 0) { setPendingNavigationBookIds(bookIds); return true; }
    return false;
  }, []);

  const handleOpenLastBooks = async (appService: AppService, lastBookIds: string[], libraryBooks: Book[]) => {
    if (lastBookIds.length === 0) return false;
    const bookIds: string[] = [];
    for (const bookId of lastBookIds) {
      const book = libraryBooks.find((b) => b.hash === bookId);
      if (book && (await appService.isBookAvailable(book))) bookIds.push(book.hash);
    }
    if (bookIds.length > 0) { setPendingNavigationBookIds(bookIds); return true; }
    return false;
  };

  useEffect(() => {
    if (pendingNavigationBookIds) {
      const bookIds = pendingNavigationBookIds;
      setPendingNavigationBookIds(null);
      if (bookIds.length > 0) navigateToReader(router, bookIds);
    }
  }, [pendingNavigationBookIds, appService, router]);

  useEffect(() => {
    if (isInitiating.current) return;
    isInitiating.current = true;
    const loadingTimeout = setTimeout(() => setLoading(true), 300);
    const initLibrary = async () => {
      const appService = await envConfig.getAppService();
      const settings = await appService.loadSettings();
      setSettings(settings);
      const library = await appService.loadLibraryBooks();
      let opened = false;
      if (checkOpenWithBooks) {
        const openWithFiles = (await parseOpenWithFiles(appService)) || [];
        if (openWithFiles.length > 0) opened = await processOpenWithFiles(appService, openWithFiles, library);
      }
      setCheckOpenWithBooks(opened);
      if (!opened && checkLastOpenBooks && settings.openLastBooks) {
        opened = await handleOpenLastBooks(appService, settings.lastOpenBooks, library);
      }
      setCheckLastOpenBooks(opened);
      setLibrary(library);
      await loadNotesData(envConfig);
      setLibraryLoaded(true);
      if (loadingTimeout) clearTimeout(loadingTimeout);
      setLoading(false);
    };
    const initLogin = async () => {
      const appService = await envConfig.getAppService();
      const settings = await appService.loadSettings();
      if (token && user) {
        if (!settings.keepLogin) { settings.keepLogin = true; setSettings(settings); saveSettings(envConfig, settings); }
      } else if (settings.keepLogin) { router.push('/auth'); }
    };
    initLogin();
    initLibrary();
    return () => { setCheckOpenWithBooks(false); setCheckLastOpenBooks(false); isInitiating.current = false; };
  }, [searchParams]);

  useEffect(() => {
    const group = searchParams?.get('group') || '';
    const groupName = getGroupName(group);
    setCurrentGroupPath(groupName);
  }, [libraryBooks, searchParams, getGroupName]);

  useEffect(() => {
    if (demoBooks.length > 0 && libraryLoaded) {
      const { library } = useLibraryStore.getState();
      const booksToUpdate: Book[] = [];
      const existingHashes = new Set(library.map(b => b.hash));
      for (const book of demoBooks) {
        if (!existingHashes.has(book.hash)) booksToUpdate.push(book);
      }
      if (booksToUpdate.length > 0) updateBooks(envConfig, booksToUpdate);
    }
  }, [demoBooks, libraryLoaded]);

  const importBooks = async (files: SelectedFile[], groupId?: string) => {
    setLoading(true);
    const { library } = useLibraryStore.getState();
    const failedImports: Array<{ filename: string; errorMessage: string }> = [];
    const successfulImports: string[] = [];
    const errorMap: [string, string][] = [
      ['No chapters detected', _('No chapters detected')],
      ['Failed to parse EPUB', _('Failed to parse the EPUB file')],
      ['Unsupported format', _('This book format is not supported')],
      ['Failed to open file', _('Failed to open the book file')],
      ['Invalid or empty book file', _('The book file is empty')],
      ['Unsupported or corrupted book file', _('The book file is corrupted')],
    ];

    const processFile = async (selectedFile: SelectedFile): Promise<Book | null> => {
      const file = selectedFile.file || selectedFile.path;
      if (!file) return null;
      try {
        const { path, basePath } = selectedFile;
        let inferredGroupName = BOOK_UNGROUPED_NAME;
        if (groupId) inferredGroupName = getGroupName(groupId) || BOOK_UNGROUPED_NAME;
        else if (path && basePath) {
          const rootPath = getDirPath(basePath);
          const inferred = getDirPath(path).replace(rootPath, '').replace(/^\//, '');
          inferredGroupName = inferred || BOOK_UNGROUPED_NAME;
        }
        const book = await appService?.importBook(file, library, true, true, false, false, { targetGroupName: inferredGroupName });
        if (!book) return null;
        const available = await appService?.isBookAvailable(book);
        if (!available) throw new Error(_('Book file is missing after import'));
        if (groupId) { book.groupId = groupId; book.groupName = inferredGroupName; }
        else if (inferredGroupName) { book.groupName = inferredGroupName; book.groupId = getGroupId(inferredGroupName); }
        successfulImports.push(book.title);
        return book;
      } catch (error) {
        const filename = typeof file === 'string' ? file : file.name;
        const baseFilename = getFilename(filename);
        const errorMessage = error instanceof Error ? errorMap.find(([str]) => error.message.includes(str))?.[1] || error.message : '';
        failedImports.push({ filename: baseFilename, errorMessage });
        return null;
      }
    };

    const concurrency = 4;
    for (let i = 0; i < files.length; i += concurrency) {
      const batch = files.slice(i, i + concurrency);
      const importedBooks = (await Promise.all(batch.map(processFile))).filter((book) => !!book);
      await updateBooks(envConfig, importedBooks);
    }
    pushLibrary();
    if (failedImports.length > 0) {
      const filenames = failedImports.map((f) => f.filename);
      const errorMessage = failedImports.find((f) => f.errorMessage)?.errorMessage || '';
      eventDispatcher.dispatch('toast', { message: _('Failed to import book(s): {{filenames}}', { filenames: listFormater(false).format(filenames) }) + (errorMessage ? `\n${errorMessage}` : ''), timeout: 5000, type: 'error' });
    } else if (successfulImports.length > 0) {
      eventDispatcher.dispatch('toast', { message: _('Successfully imported {{count}} book(s)', { count: successfulImports.length }), timeout: 2000, type: 'success' });
    }
    setLoading(false);
  };

  const handleBookDelete = () => {
    return async (book: Book, syncBooks = true) => {
      try {
        await appService?.deleteBook(book, 'both');
        await updateBook(envConfig, book);
        clearBookData(book.hash);
        if (syncBooks) pushLibrary();
        eventDispatcher.dispatch('toast', { type: 'info', timeout: 1000, message: _('Book deleted: {{title}}', { title: book.title }) });
        return true;
      } catch {
        eventDispatcher.dispatch('toast', { type: 'error', message: _('Failed to delete book: {{title}}', { title: book.title }) });
        return false;
      }
    };
  };

  const handleUpdateMetadata = async (book: Book, metadata: BookMetadata) => {
    book.metadata = metadata;
    book.title = formatTitle(metadata.title);
    book.author = formatAuthors(metadata.author);
    book.primaryLanguage = getPrimaryLanguage(metadata.language);
    book.updatedAt = Date.now();
    if (metadata.coverImageBlobUrl || metadata.coverImageUrl || metadata.coverImageFile) {
      book.coverImageUrl = metadata.coverImageBlobUrl || metadata.coverImageUrl;
      try { await appService?.updateCoverImage(book, metadata.coverImageBlobUrl || metadata.coverImageUrl, metadata.coverImageFile); } catch (error) { console.warn('Failed to update cover image:', error); }
    }
    if (isWebAppPlatform()) { if (metadata.coverImageBlobUrl) metadata.coverImageUrl = undefined; } else { metadata.coverImageUrl = undefined; }
    metadata.coverImageBlobUrl = undefined;
    metadata.coverImageFile = undefined;
    await updateBook(envConfig, book);
  };

  const handleImportBooksFromFiles = async () => {
    setIsSelectMode(false);
    selectFiles({ type: 'books', multiple: true }).then((result) => {
      if (result.files.length === 0 || result.error) return;
      const groupId = searchParams?.get('group') || '';
      importBooks(result.files, groupId);
    });
  };

  const handleImportBooksFromDirectory = async () => {
    if (!appService || !isTauriAppPlatform()) return;
    setIsSelectMode(false);
    let importDirectory: string | undefined = '';
    if (appService.isAndroidApp) {
      if (!(await requestStoragePermission())) return;
      const response = await selectDirectory();
      importDirectory = response.path;
    } else {
      const selectedDir = await appService.selectDirectory?.('read');
      importDirectory = selectedDir;
    }
    if (!importDirectory) return;
    const files = await appService.readDirectory(importDirectory, 'None');
    const supportedFiles = files.filter((file) => { const ext = file.path.split('.').pop()?.toLowerCase() || ''; return SUPPORTED_BOOK_EXTS.includes(ext); });
    const toImportFiles = await Promise.all(supportedFiles.map(async (file) => ({ path: await joinPaths(importDirectory, file.path), basePath: importDirectory })));
    importBooks(toImportFiles, undefined);
  };

  const handleSetSelectMode = (selectMode: boolean) => {
    if (selectMode && appService?.hasHaptics) impactFeedback('medium');
    setIsSelectMode(selectMode);
    setIsSelectAll(false);
    setIsSelectNone(false);
  };

  const handleSelectAll = () => { setIsSelectAll(true); setIsSelectNone(false); };
  const handleDeselectAll = () => { setIsSelectNone(true); setIsSelectAll(false); };
  const handleShowDetailsBook = (book: Book) => setShowDetailsBook(book);

  const handleNavigateToPath = (path: string | undefined) => {
    const group = path ? getGroupId(path) : '';
    const params = new URLSearchParams(searchParams?.toString());
    if (group) params.set('group', group); else params.delete('group');
    setIsSelectAll(false); setIsSelectNone(false);
    navigateToLibrary(router, `${params.toString()}`);
    setTimeout(() => setCurrentGroupPath(path), 300);
  };

  if (!appService || !insets || checkOpenWithBooks || checkLastOpenBooks) {
    return <div className={clsx('full-height', !appService?.isLinuxApp && 'bg-base-200')} />;
  }

  const showBookshelf = libraryLoaded || libraryBooks.length > 0;
  const visibleBooks = libraryBooks.filter((b) => !b.deletedAt);

  return (
    <div
      ref={pageRef}
      className={clsx('morgan-library', view === 'marginalia' && 'view-marg', 'full-height flex select-none flex-col overflow-hidden')}
    >
      <div className='wood-grain' />

      {/* 馆牌 */}
      <header className='morgan-header'>
        <div className='morgan-header-inner'>
          <div className='morgan-crest'>
            <div className='morgan-crest-mark'>M</div>
            <div className='morgan-crest-text'>
              <h1>书房 · Bibliotheca Privata</h1>
              <div className='morgan-crest-sub'>Catalogue · Est. MMXXIV</div>
            </div>
          </div>
          <div className='morgan-header-meta'>
            <div className='item'>
              <div className='num'>{visibleBooks.length}</div>
              <div className='lbl'>藏 书</div>
            </div>
            <div className='item'>
              <div className='num'>{visibleBooks.filter(b => b.progress?.[1]).reduce((s, b) => s + (b.progress?.[1] || 0), 0)}</div>
              <div className='lbl'>卷 帙 · 页</div>
            </div>
            <div className='item'>
              <div className='num'>
                {(() => {
                  const earliest = visibleBooks.map(b => b.createdAt).filter(Boolean).sort()[0];
                  if (!earliest) return '—';
                  const days = Math.floor((Date.now() - earliest) / 86400000);
                  const y = Math.floor(days / 365), m = Math.floor((days % 365) / 30);
                  if (y > 0 && m === 0) return y;
                  return (y > 0 ? `${y}年` : '') + (m > 0 ? `${m}月` : '');
                })()}
              </div>
              <div className='lbl'>入 藏 跨 度</div>
            </div>
          </div>
          {/* 功能按钮区 */}
          <MorganOverviewBar
            isSelectMode={isSelectMode}
            isSelectAll={isSelectAll}
            onImportBooksFromFiles={handleImportBooksFromFiles}
            onImportBooksFromDirectory={appService?.canReadExternalDir ? handleImportBooksFromDirectory : undefined}
            onToggleSelectMode={() => handleSetSelectMode(!isSelectMode)}
            onSelectAll={handleSelectAll}
            onDeselectAll={handleDeselectAll}
            libraryBooks={visibleBooks}
            compact={true}
          />
        </div>
      </header>
      <div className='gilt-rule' />

      {/* 同步进度条 */}
      {isSyncing && (
        <progress
          className='progress progress-success absolute left-0 right-0 h-1'
          value={syncProgress * 100}
          max='100'
        />
      )}

      {(loading || isSyncing) && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <Spinner loading />
        </div>
      )}

      {showBookshelf && (
        <OverlayScrollbarsComponent
          defer
          ref={osRef}
          className='flex-grow'
          options={{ scrollbars: { autoHide: 'scroll' } }}
          events={{
            initialized: (instance) => {
              const { content } = instance.elements();
              if (content) containerRef.current = content as HTMLDivElement;
            },
          }}
        >
          <div
            className={clsx('scroll-container drop-zone flex-grow', isDragging && 'drag-over')}
            style={{
              paddingRight: `${insets.right}px`,
              paddingBottom: `${insets.bottom}px`,
              paddingLeft: `${insets.left}px`,
            }}
          >
            <DropIndicator />
            <div className='morgan-main'>
              {/* 侧栏 */}
              <aside className='morgan-sidebar'>
                <div className={clsx('side-cat', view === 'marginalia' && 'side-cat-hidden')}>
                  <MorganSidebar
                    libraryBooks={visibleBooks}
                    currentGroupPath={currentGroupPath}
                    onNavigateToPath={handleNavigateToPath}
                    searchParams={searchParams}
                  />
                </div>
                <div className='side-marg'>
                  <div className='side-marg-divider' />
                  <ul className='nav-cat'>
                    <li>
                      <a
                        className={clsx('side-marg-link', view === 'marginalia' && 'active')}
                        onClick={() => setView(view === 'marginalia' ? 'catalogue' : 'marginalia')}
                      >
                        <span className='marg-icon'>¶</span>
                        标注拾遗
                        <span className='cnt'>↗</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              {/* 主区 */}
              <div className='morgan-content'>
                {/* 馆藏目录视图 */}
                <div className='view-catalogue'>
                  {visibleBooks.length > 0 && searchParams?.get('landing') !== '1' && (
                    <>
                      <ChronicleBand libraryBooks={visibleBooks} />
                      <Bookshelf
                        libraryBooks={visibleBooks}
                        isSelectMode={isSelectMode}
                        isSelectAll={isSelectAll}
                        isSelectNone={isSelectNone}
                        handleImportBooks={handleImportBooksFromFiles}
                        handleBookDelete={handleBookDelete()}
                        handleSetSelectMode={handleSetSelectMode}
                        handleShowDetailsBook={handleShowDetailsBook}
                        handlePushLibrary={pushLibrary}
                      />
                    </>
                  )}
                  {(visibleBooks.length === 0 || searchParams?.get('landing') === '1') && (
                    <LandingHero onImport={handleImportBooksFromFiles} />
                  )}
                </div>

                {/* 标注拾遗视图 */}
                <div className='view-marginalia'>
                  {/* 返回按钮——流式排在拾遗标题上方 */}
                  {view === 'marginalia' && (
                    <button
                      onClick={() => setView('catalogue')}
                      className='morgan-back-btn'
                    >
                      ← 返回馆藏
                    </button>
                  )}
                  <MarginaliaView libraryBooks={visibleBooks} />
                </div>
              </div>
            </div>
          </div>
        </OverlayScrollbarsComponent>
      )}

      {/* 弹窗（全部保留） */}
      {showDetailsBook && (
        <BookDetailModal
          isOpen={!!showDetailsBook}
          book={showDetailsBook}
          onClose={() => setShowDetailsBook(null)}
          handleBookDelete={handleBookDelete()}
          handleBookMetadataUpdate={handleUpdateMetadata}
        />
      )}
      <AboutWindow />
      <UpdaterWindow />
      <MigrateDataWindow />
      {isSettingsDialogOpen && <SettingsDialog bookKey={''} />}
      <Toast />
    </div>
  );
};

const LibraryPage = () => (
  <Suspense fallback={<div className='full-height' />}>
    <LibraryPageWithSearchParams />
  </Suspense>
);

export default LibraryPage;
