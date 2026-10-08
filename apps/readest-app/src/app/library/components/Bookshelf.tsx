'use client';

import clsx from 'clsx';
import React, { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Book } from '@/types/book';
import { LibraryCoverFitType, LibraryViewModeType } from '@/types/settings';
import { useEnv } from '@/context/EnvContext';
import { useSettingsStore } from '@/store/settingsStore';
import { useLibraryStore } from '@/store/libraryStore';
import { useTranslation } from '@/hooks/useTranslation';
import { navigateToReader, navigateToLibrary, showReaderWindow } from '@/utils/nav';
import { createBookFilter, createBookSorter, getBookReadStatus } from '../utils/libraryUtils';
import { getBookProgressPercentage } from '../utils/libraryUtils';
import { formatAuthors, formatTitle } from '@/utils/book';
import { eventDispatcher } from '@/utils/event';

import BookshelfItem from './BookshelfItem';
import { Menu, MenuItem } from '@tauri-apps/api/menu';
import { revealItemInDir } from '@tauri-apps/plugin-opener';
import { getOSPlatform } from '@/utils/misc';
import { FILE_REVEAL_LABELS, FILE_REVEAL_PLATFORMS } from '@/utils/os';
import { throttle } from '@/utils/throttle';
import { useLongPress } from '@/hooks/useLongPress';
import SpineCard from './SpineCard';
import { MdCheckCircle, MdOutlineCheckCircle, MdFavorite, MdFavoriteBorder, MdCheck } from 'react-icons/md';
import SelectModeActions from './SelectModeActions';
import GroupingModal from './GroupingModal';
import Alert from '@/components/Alert';
import Spinner from '@/components/Spinner';

interface BookshelfProps {
  libraryBooks: Book[];
  isSelectMode: boolean;
  isSelectAll: boolean;
  isSelectNone: boolean;
  handleImportBooks: () => void;
  handleBookDelete: (book: Book, syncBooks?: boolean) => Promise<boolean>;
  handleSetSelectMode: (selectMode: boolean) => void;
  handleShowDetailsBook: (book: Book) => void;
  handlePushLibrary: () => Promise<void>;
}

const Bookshelf: React.FC<BookshelfProps> = ({
  libraryBooks,
  isSelectMode,
  isSelectAll,
  isSelectNone,
  handleImportBooks,
  handleBookDelete,
  handleSetSelectMode,
  handleShowDetailsBook,
  handlePushLibrary,
}) => {
  const _ = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { appService, envConfig } = useEnv();
  const { settings } = useSettingsStore();
  const { updateBook, toggleSelectedBook, setSelectedBooks } = useLibraryStore();
  const selectedBooksSet = useLibraryStore((s) => s.selectedBooks);
  const selectedBooks = Array.from(selectedBooksSet);
  const queryTerm = searchParams?.get('q') || null;
  const rawFilter = searchParams?.get('filter') || 'all';
  const filter = rawFilter === 'want' ? 'finished' : rawFilter;
  const viewMode = (searchParams?.get('view') || settings.libraryViewMode || 'grid') as LibraryViewModeType;
  const sortBy = (searchParams?.get('sort') || settings.librarySortBy || 'updated') as any;
  const sortOrder = searchParams?.get('order') || (settings.librarySortAscending ? 'asc' : 'desc');
  const coverFit = (searchParams?.get('cover') || settings.libraryCoverFit || 'crop') as LibraryCoverFitType;

  const [loading, setLoading] = useState(false);
  const [showSelectModeActions, setShowSelectModeActions] = useState(false);
  const [bookIdsToDelete, setBookIdsToDelete] = useState<string[]>([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showGroupingModal, setShowGroupingModal] = useState(false);
  const [hoverBook, setHoverBook] = useState<Book | null>(null);
  const [hoverEl, setHoverEl] = useState<HTMLElement | null>(null);

  const shelfRef = useRef<HTMLDivElement>(null);


const groupId = searchParams?.get('group') || '';

  // Filter + sort
  const filteredBooks = useMemo(() => {
    let books = libraryBooks.filter((b) => !b.deletedAt);

    // Group filter
    if (groupId) {
      const { getGroupName } = useLibraryStore.getState();
      const groupName = getGroupName(groupId);
      if (groupName) {
        books = books.filter((b) => b.groupName === groupName || (b.groupName && b.groupName.startsWith(groupName + '/')));
      }
    }

    // Status filter
    if (filter !== 'all') {
      books = books.filter((b) => {
        const status = getBookReadStatus(b);
        if (filter === 'reading') return status === 'reading';
        if (filter === 'finished') return status === 'finished';
        if (filter === 'unread') return status === 'unread';
        if (filter === 'favorite') return b.isFavorite;
        return true;
      });
    }

    // Search filter
    if (queryTerm) {
      const filterFn = createBookFilter(queryTerm);
      books = books.filter(filterFn);
    }

    // Sort
    const sorter = createBookSorter(sortBy, 'zh');
    books.sort(sorter);
    if (sortOrder === 'desc') books.reverse();

    return books;
  }, [libraryBooks, groupId, filter, queryTerm, sortBy, sortOrder]);

  // Select all / deselect all
  useEffect(() => {
    if (isSelectMode && isSelectAll) {
      setSelectedBooks(filteredBooks.map((b) => b.hash));
    } else if (isSelectMode && isSelectNone) {
      setSelectedBooks([]);
    }
  }, [isSelectAll, isSelectNone, isSelectMode, filteredBooks, setSelectedBooks]);


  useEffect(() => {
    if (isSelectMode) {
      setShowSelectModeActions(selectedBooks.length > 0);
    } else {
      setShowSelectModeActions(false);
    }
  }, [isSelectMode, selectedBooks.length]);

  const handleBookClick = useCallback(
    async (book: Book) => {
      if (isSelectMode) {
        toggleSelectedBook(book.hash);
      } else {
        const available = await appService?.isBookAvailable(book);
        if (!available) return;
        const now = Date.now();
        await updateBook(envConfig, { ...book, lastReadAt: now, updatedAt: now });
        if (appService?.hasWindow && settings.openBookInNewWindow) {
          showReaderWindow(appService, [book.hash]);
        } else {
          navigateToReader(router, [book.hash]);
        }
      }
    },
    [isSelectMode, appService, envConfig, updateBook, router, settings.openBookInNewWindow],
  );

  // Spine rendering
  const spineHeight = (book: Book) => {
    const pages = book.progress?.[1] || 300;
    return Math.round(190 + Math.min(pages, 1300) / 1300 * 44);
  };

  const spineStatusClass = (book: Book) => {
    const status = getBookReadStatus(book);
    if (status === 'reading') return 'st-reading';
    if (status === 'finished') return 'st-read';
    if (status === 'unread') return 'st-unread';
    return 'st-shelved';
  };

  const spineProgress = (book: Book) => {
    return getBookProgressPercentage(book);
  };

  const handleToggleFinished = async (e: React.MouseEvent, book: Book) => {
    e.stopPropagation();
    const status = getBookReadStatus(book);
    const isFinished = status === 'finished';
    const now = Date.now();
    await updateBook(envConfig, {
      ...book,
      finishedAt: isFinished ? undefined : now,
      progress: isFinished ? ([0, 0] as [number, number]) : ([1, 1] as [number, number]),
      lastReadAt: isFinished ? book.lastReadAt : now,
      updatedAt: now,
    });
  };

  const handleToggleFavorite = async (e: React.MouseEvent, book: Book) => {
    e.stopPropagation();
    await updateBook(envConfig, {
      ...book,
      isFavorite: !book.isFavorite,
      favoriteAt: !book.isFavorite ? Date.now() : undefined,
    });
  };

  const handleSpineHover = (book: Book, el: HTMLElement) => {
    if (isSelectMode) return;
    setHoverBook(book);
    setHoverEl(el);
  };

  const handleSpineLeave = () => {
    setHoverBook(null);
    setHoverEl(null);
  };

  // 右键菜单（详情/编辑/删除/收藏）
  const handleSpineContextMenu = async (book: Book) => {
    if (!appService?.hasContextMenu) {
      // Web 模式：直接打开详情弹窗
      handleShowDetailsBook(book);
      return;
    }
    const osPlatform = getOSPlatform();
    const fileRevealLabel = FILE_REVEAL_LABELS[osPlatform as FILE_REVEAL_PLATFORMS] || FILE_REVEAL_LABELS.default;
    const selectBookMenuItem = await MenuItem.new({
      text: _('Select Book'),
      action: async () => { if (!isSelectMode) handleSetSelectMode(true); toggleSelectedBook(book.hash); },
    });
    const showBookDetailsMenuItem = await MenuItem.new({
      text: _('Show Book Details'),
      action: async () => { handleShowDetailsBook(book); },
    });
    const toggleFavoriteMenuItem = await MenuItem.new({
      text: book.isFavorite ? _('Unfavorite') : _('Favorite'),
      action: async () => {
        const updated = { ...book, isFavorite: !book.isFavorite, favoriteAt: !book.isFavorite ? Date.now() : undefined };
        await updateBook(envConfig, updated);
      },
    });
    const showBookInFinderMenuItem = await MenuItem.new({
      text: _(fileRevealLabel),
      action: async () => {
        const folder = book.relativePath
          ? `${settings.localBooksDir}/${book.relativePath.replace(/\/[^\/]+$/, '')}`
          : settings.localBooksDir;
        revealItemInDir(folder);
      },
    });
    const deleteBookMenuItem = await MenuItem.new({
      text: _('Delete'),
      action: async () => { eventDispatcher.dispatch('delete-books', { ids: [book.hash] }); },
    });
    const menu = await Menu.new();
    menu.append(selectBookMenuItem);
    menu.append(showBookDetailsMenuItem);
    menu.append(toggleFavoriteMenuItem);
    menu.append(showBookInFinderMenuItem);
    menu.append(deleteBookMenuItem);
    menu.popup();
  };

  // Delete handling
  const confirmDelete = async () => {
    for (const id of bookIdsToDelete) {
      const book = libraryBooks.find((b) => b.hash === id);
      if (book) await handleBookDelete(book, false);
    }
    await handlePushLibrary();
    setBookIdsToDelete([]);
    setShowDeleteAlert(false);
    handleSetSelectMode(false);
  };

  const handleDeleteSelected = () => {
    const ids = isSelectMode ? selectedBooks : bookIdsToDelete;
    setBookIdsToDelete(ids);
    setShowDeleteAlert(true);
  };

  // Grouping
  const handleGroupSelected = () => {
    setShowGroupingModal(true);
  };

  // Open selected
  const handleOpenSelected = async () => {
    const ids = selectedBooks;
    if (ids.length === 0) return;
    const books = libraryBooks.filter((b) => ids.includes(b.hash));
    const now = Date.now();
    for (const book of books) {
      await updateBook(envConfig, { ...book, lastReadAt: now, updatedAt: now });
    }
    navigateToReader(router, ids);
  };

  // Details for single selected
  const handleDetailsSelected = () => {
    if (selectedBooks.length === 1) {
      const book = libraryBooks.find((b) => b.hash === selectedBooks[0]);
      if (book) handleShowDetailsBook(book);
    }
  };

  if (viewMode === 'list') {
    // Keep original list view for list mode
    return (
      <>
        <div
          ref={shelfRef}
          className='morgan-shelf'
          style={{ gridTemplateColumns: '1fr', gap: '0', padding: '0', border: 'none', boxShadow: 'none', background: 'none' }}
        >
          {filteredBooks.map((book) => (
            <BookshelfItem
              key={book.hash}
              mode='list'
              item={book}
              coverFit={coverFit}
              isSelectMode={isSelectMode}
              itemSelected={selectedBooks.includes(book.hash)}
              setLoading={setLoading}
              toggleSelection={toggleSelectedBook}
              handleGroupBooks={handleGroupSelected}
              handleBookDelete={handleBookDelete}
              handleSetSelectMode={handleSetSelectMode}
              handleShowDetailsBook={handleShowDetailsBook}
            />
          ))}
        </div>
        {filteredBooks.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--parchment-dim)', fontStyle: 'italic' }}>
            书架尚空——导入书籍或扫描书库以填充。
          </div>
        )}
        {showSelectModeActions && (
          <SelectModeActions
            selectedBooks={selectedBooks}
            safeAreaBottom={0}
            onOpen={handleOpenSelected}
            onGroup={handleGroupSelected}
            onDetails={handleDetailsSelected}
            onDelete={handleDeleteSelected}
            onCancel={() => handleSetSelectMode(false)}
          />
        )}
        {showDeleteAlert && (
          <Alert
            open={showDeleteAlert}
            title={_('Delete Books')}
            message={_('Are you sure you want to delete the selected books?')}
            onConfirm={confirmDelete}
            onCancel={() => setShowDeleteAlert(false)}
          />
        )}
        {showGroupingModal && (
          <GroupingModal
            isOpen={showGroupingModal}
            selectedBookIds={selectedBooks}
            onClose={() => setShowGroupingModal(false)}
          />
        )}
        {loading && <Spinner loading={loading} />}
      </>
    );
  }

  // Grid mode = 书脊墙
  return (
    <>
      <div
        ref={shelfRef}
        className='morgan-shelf'
        onMouseLeave={handleSpineLeave}
      >
        {filteredBooks.map((book) => {
          const stCls = spineStatusClass(book);
          const h = spineHeight(book);
          const pct = spineProgress(book);
          const fs = book.title.length > 11 ? '10px' : book.title.length > 8 ? '11px' : '12.5px';
          const authorShort = (book.author || '').split(/[·,]/).pop()?.trim() || '';
          const status = getBookReadStatus(book);
          const isSelected = isSelectMode && selectedBooks.includes(book.hash);
          const hasCover = !!book.coverImageUrl;

          return (
            <div
              key={book.hash}
              className={clsx('morgan-spine', stCls, isSelected && 'selected')}
              style={{ ['--p' as any]: `${pct}%` }}
              tabIndex={0}
              onClick={() => handleBookClick(book)}
              onContextMenu={(e) => { e.preventDefault(); handleSpineContextMenu(book); }}
              onMouseEnter={(e) => handleSpineHover(book, e.currentTarget)}
              onFocus={(e) => handleSpineHover(book, e.currentTarget)}
            >
              {status === 'reading' && <i className='ribbon' />}
              <div className='spine-cover'>
                {hasCover ? (
                  <img src={book.coverImageUrl!} alt={book.title} />
                ) : (
                  <div className='spine-cover-fallback'>
                    <div className='fb-title'>{formatTitle(book.title)}</div>
                    <div className='fb-author'>{authorShort}</div>
                  </div>
                )}
              </div>
              {/* 已读对号徽标 — 左上角，常显示 */}
              {status === 'finished' && (
                <button
                  className='spine-finished-badge'
                  onClick={(e) => handleToggleFinished(e, book)}
                  title={_('Mark as Unfinished')}
                >
                  <MdCheck />
                </button>
              )}
              {/* 未读的标记已读按钮 — 左上角，hover 显示 */}
              {status !== 'finished' && (
                <button
                  className='spine-finish-btn'
                  onClick={(e) => handleToggleFinished(e, book)}
                  title={_('Mark as Finished')}
                >
                  ✓
                </button>
              )}
              {/* 收藏按钮 — 右上角，已收藏时常显示 */}
              <button
                className={clsx('spine-fav-btn', book.isFavorite && 'favorited')}
                onClick={(e) => handleToggleFavorite(e, book)}
                title={book.isFavorite ? _('Unfavorite') : _('Favorite')}
              >
                {book.isFavorite ? '♥' : '♡'}
              </button>
              {status === 'reading' && (
                <div className='spine-reading-dot' title={_('Reading')} />
              )}
              <div className='spine-text'>
                <span className='spine-title'>
                  {formatTitle(book.title)}
                </span>
              </div>
              <button
                className='spine-info-btn'
                onClick={(e) => { e.stopPropagation(); handleShowDetailsBook(book); }}
                title={_('Show Book Details')}
              >
                i
              </button>
              {status !== 'unread' && <span className='spine-progress' />}
              {isSelected && (
                <div style={{
                  position: 'absolute', inset: 0, background: 'rgba(168,50,38,.3)',
                  pointerEvents: 'none', zIndex: 4,
                }} />
              )}
            </div>
          );
        })}
      </div>

      {filteredBooks.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--parchment-dim)', fontStyle: 'italic' }}>
          书架尚空——导入书籍或扫描书库以填充。
        </div>
      )}

      {/* hover 著录卡 */}
      <SpineCard book={hoverBook} spineEl={hoverEl} />

      {/* 选择模式工具栏 */}
      {showSelectModeActions && (
        <SelectModeActions
          selectedBooks={selectedBooks}
          safeAreaBottom={0}
          onOpen={handleOpenSelected}
          onGroup={handleGroupSelected}
          onDetails={handleDetailsSelected}
          onDelete={handleDeleteSelected}
          onCancel={() => handleSetSelectMode(false)}
        />
      )}

      {/* 删除确认 */}
      {showDeleteAlert && (
        <Alert
          open={showDeleteAlert}
          title={_('Delete Books')}
          message={_('Are you sure you want to delete the selected books?')}
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteAlert(false)}
        />
      )}

      {/* 分组弹窗 */}
      {showGroupingModal && (
        <GroupingModal
          isOpen={showGroupingModal}
          selectedBookIds={selectedBooks}
          onClose={() => setShowGroupingModal(false)}
        />
      )}

      {loading && <Spinner loading={loading} />}
    </>
  );
};

export default Bookshelf;
