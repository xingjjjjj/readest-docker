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
import { BOOK_UNGROUPED_NAME } from '@/services/constants';
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

  // --- A. 分区陈列：按顶层分组分区 ---
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const currentGroupName = groupId ? useLibraryStore.getState().getGroupName(groupId) : null;

  const bookSections = useMemo(() => {
    // 已在具体分组视图时不分区
    if (currentGroupName) {
      return [{ name: currentGroupName, books: filteredBooks, topLevel: false }];
    }
    // "全部书架"视图：按顶层分组分区，未分组在最后
    const sections: { name: string; books: Book[]; topLevel: boolean }[] = [];
    const byTop: Record<string, Book[]> = {};
    for (const b of filteredBooks) {
      const gn = (b.groupName || '').trim() || BOOK_UNGROUPED_NAME;
      const top = gn.split('/')[0];
      if (!byTop[top]) byTop[top] = [];
      byTop[top].push(b);
    }
    const tops = Object.keys(byTop).sort((a, b2) => {
      if (a === BOOK_UNGROUPED_NAME) return 1;
      if (b2 === BOOK_UNGROUPED_NAME) return -1;
      return a.localeCompare(b2, 'zh');
    });
    for (const top of tops) {
      sections.push({ name: top, books: byTop[top], topLevel: true });
    }
    return sections;
  }, [filteredBooks, currentGroupName]);

  const toggleSection = (name: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  // --- D. 虚拟滚动：可视区外占位 ---
  const [visibleSet, setVisibleSet] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 当书单变化时重置可见集（先标记前 N 本可见，其余由 observer 接管）
  useEffect(() => {
    if (filteredBooks.length <= 60) {
      setVisibleSet(new Set(filteredBooks.map((b) => b.hash)));
    } else {
      setVisibleSet(new Set(filteredBooks.slice(0, 40).map((b) => b.hash)));
    }
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [filteredBooks]);

  // IntersectionObserver：进入视口的占位符变为真实卡片
  const registerSpineSentinel = useCallback((bookHash: string, el: HTMLElement | null) => {
    if (!el || filteredBooks.length <= 60) return;
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          setVisibleSet((prev) => {
            let changed = false;
            const next = new Set(prev);
            for (const entry of entries) {
              const hash = (entry.target as HTMLElement).dataset.bookHash;
              if (hash && entry.isIntersecting && !next.has(hash)) {
                next.add(hash);
                changed = true;
              }
            }
            return changed ? next : prev;
          });
        },
        { rootMargin: '600px 0px' }
      );
    }
    observerRef.current.observe(el);
  }, [filteredBooks.length]);

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

  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSpineHover = (book: Book, el: HTMLElement) => {
    if (isSelectMode) return;
    // 防抖：60ms——防止快速划过的状态抖动，但人眼基本无感知
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setHoverBook(book);
      setHoverEl(el);
    }, 60);
  };

  const handleSpineLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
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
        <div className='morgan-list-view'>
          {filteredBooks.map((book) => {
            const status = getBookReadStatus(book);
            const isSelected = isSelectMode && selectedBooks.includes(book.hash);
            const hasCover = !!book.coverImageUrl;
            const pct = getBookProgressPercentage(book);
            return (
              <div
                key={book.hash}
                className={clsx('morgan-list-item', isSelected && 'selected')}
                onClick={() => handleBookClick(book)}
                onContextMenu={(e) => { e.preventDefault(); handleSpineContextMenu(book); }}
              >
                <div className='list-item-cover'>
                  {hasCover ? (
                    <img src={book.coverImageUrl!} alt={book.title} />
                  ) : (
                    <div className='list-cover-fallback'>{formatTitle(book.title).slice(0, 4)}</div>
                  )}
                </div>
                <div className='list-item-body'>
                  <div className='list-item-title' title={book.title}>{formatTitle(book.title)}</div>
                  <div className='list-item-author'>{(book.author || '').split(/[·,]/).pop()?.trim() || ''}</div>
                  <div className='list-item-meta'>
                    <span className='list-item-status' style={{ color: status === 'reading' ? 'var(--gilt)' : status === 'finished' ? '#4ade80' : 'var(--parchment-dim)' }}>
                      {status === 'reading' ? _('Reading') : status === 'finished' ? _('Finished') : _('Unread')}
                    </span>
                    {book.lastReadAt && (
                      <span className='list-item-date'>{new Date(book.lastReadAt).toLocaleDateString('zh-CN')}</span>
                    )}
                    {pct > 0 && <span className='list-item-pct'>{pct}%</span>}
                  </div>
                </div>
                <div className='list-item-actions'>
                  <button
                    className='list-action-btn'
                    onClick={(e) => { e.stopPropagation(); handleShowDetailsBook(book); }}
                    title={_('Show Book Details')}
                  >i</button>
                </div>
                {pct > 0 && <div className='list-item-progress'><div style={{ width: `${pct}%` }} /></div>}
              </div>
            );
          })}
        </div>
        {filteredBooks.length === 0 && (
          <div className='morgan-empty-shelf'>
            <div className='empty-icon'>❦</div>
            <div className='empty-title'>书架尚空</div>
            <div className='empty-hint'>导入书籍或扫描书库以填充</div>
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

  // 渲染单本书脊卡片（真实内容）
  const renderSpine = (book: Book) => {
    const stCls = spineStatusClass(book);
    const pct = spineProgress(book);
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
        {status === 'finished' && (
          <button
            className='spine-finished-badge'
            onClick={(e) => handleToggleFinished(e, book)}
            title={_('Mark as Unfinished')}
          >
            <MdCheck />
          </button>
        )}
        {status !== 'finished' && (
          <button
            className='spine-finish-btn'
            onClick={(e) => handleToggleFinished(e, book)}
            title={_('Mark as Finished')}
          >
            ✓
          </button>
        )}
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
          <span className='spine-title' title={book.title}>
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
          <div className='spine-selected-overlay' />
        )}
      </div>
    );
  };

  // 渲染虚拟占位符（固定高度避免布局跳动）
  const renderSentinel = (book: Book) => (
    <div
      key={book.hash}
      className='morgan-spine morgan-spine-placeholder'
      ref={(el) => registerSpineSentinel(book.hash, el)}
      data-book-hash={book.hash}
    />
  );

  // Grid mode = 分区书脊墙（A）+ 虚拟滚动（D）
  return (
    <>
      <div
        ref={shelfRef}
        className='morgan-shelf-wrap'
        onMouseLeave={handleSpineLeave}
      >
        {bookSections.map((section) => {
          const isCollapsed = collapsedGroups.has(section.name);
          const sectionBooks = isCollapsed ? [] : section.books;
          return (
            <section key={section.name} className='morgan-shelf-section'>
              {/* 分区标题横带 */}
              <div
                className='section-header'
                onClick={() => section.topLevel && toggleSection(section.name)}
                style={{ cursor: section.topLevel ? 'pointer' : 'default' }}
              >
                <span className='section-name'>◆ {section.name}</span>
                <span className='section-line' />
                <span className='section-count'>{section.books.length} 册</span>
                {section.topLevel && (
                  <span className={clsx('section-chevron', isCollapsed && 'collapsed')}>▶</span>
                )}
              </div>
              {/* 书脊墙 */}
              <div className='morgan-shelf'>
                {sectionBooks.map((book) =>
                  visibleSet.has(book.hash) ? renderSpine(book) : renderSentinel(book)
                )}
              </div>
            </section>
          );
        })}
      </div>

      {filteredBooks.length === 0 && (
        <div className='morgan-empty-shelf'>
          <div className='empty-icon'>❦</div>
          <div className='empty-title'>书架尚空</div>
          <div className='empty-hint'>导入书籍或扫描书库以填充</div>
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
