'use client';

import clsx from 'clsx';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Book } from '@/types/book';
import { LibraryCoverFitType, LibraryViewModeType } from '@/types/settings';
import { useEnv } from '@/context/EnvContext';
import { useSettingsStore } from '@/store/settingsStore';
import { useLibraryStore } from '@/store/libraryStore';
import { useTranslation } from '@/hooks/useTranslation';
import { navigateToReader, navigateToLibrary, showReaderWindow } from '@/utils/nav';
import { createBookFilter, getBookReadStatus } from '../utils/libraryUtils';
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

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

// P6 decorate-sort-undecorate：预计算排序键，避免比较器内每次比较重复执行 formatTitle/formatAuthors
// 行为与原 createBookSorter 保持一致（含 published 无日期 '0001-01-01' 兜底、无法解析时退化字符串比较）
const sortBooks = (books: Book[], sortBy: string, sortOrder: string): Book[] => {
  let keyFn: (b: Book) => string | number;
  switch (sortBy) {
    case 'title':
      keyFn = (b) => formatTitle(b.title);
      break;
    case 'author':
      keyFn = (b) => formatAuthors(b.author, b?.primaryLanguage || 'en', true);
      break;
    case 'updated':
      keyFn = (b) => new Date(b.updatedAt).getTime();
      break;
    case 'format':
      keyFn = (b) => b.format;
      break;
    case 'published':
      keyFn = (b) => {
        const published = b.metadata?.published || '0001-01-01';
        const time = new Date(published).getTime();
        return isNaN(time) ? `zz:${published}` : time;
      };
      break;
    case 'created':
      keyFn = (b) => new Date(b.createdAt).getTime();
      break;
    default:
      keyFn = (b) => new Date(b.updatedAt).getTime();
      break;
  }
  const decorated = books.map((b) => ({ b, key: keyFn(b) }));
  decorated.sort((x, y) => {
    if (typeof x.key === 'number' && typeof y.key === 'number') return x.key - y.key;
    return String(x.key).localeCompare(String(y.key), 'zh');
  });
  const sorted = decorated.map((d) => d.b);
  return sortOrder === 'desc' ? sorted.reverse() : sorted;
};

// 书脊状态 class / 进度（纯函数，module 级）
const spineStatusClass = (book: Book) => {
  const status = getBookReadStatus(book);
  if (status === 'reading') return 'st-reading';
  if (status === 'finished') return 'st-read';
  if (status === 'unread') return 'st-unread';
  return 'st-shelved';
};

const spineProgress = (book: Book) => getBookProgressPercentage(book);

interface SpineItemProps {
  book: Book;
  isSelected: boolean;
  onBookClick: (book: Book) => void;
  onSpineContextMenu: (book: Book) => void;
  onSpineHover: (book: Book, el: HTMLElement) => void;
  onSpineLeave: () => void;
  onToggleFinished: (e: React.MouseEvent, book: Book) => void;
  onToggleFavorite: (e: React.MouseEvent, book: Book) => void;
  onShowDetails: (book: Book) => void;
}

// P5：书脊卡片独立组件 + React.memo + 稳定回调——hover/选中状态变化时，未受影响的书脊直接跳过重渲染
const SpineItem = React.memo(({
  book,
  isSelected,
  onBookClick,
  onSpineContextMenu,
  onSpineHover,
  onSpineLeave,
  onToggleFinished,
  onToggleFavorite,
  onShowDetails,
}: SpineItemProps) => {
  const _ = useTranslation();
  const stCls = spineStatusClass(book);
  const pct = spineProgress(book);
  const authorShort = (book.author || '').split(/[·,]/).pop()?.trim() || '';
  const status = getBookReadStatus(book);
  const hasCover = !!book.coverImageUrl;

  return (
    <div
      className={clsx('morgan-spine', stCls, isSelected && 'selected')}
      style={{ ['--p' as any]: `${pct}%` }}
      tabIndex={0}
      onClick={() => onBookClick(book)}
      onContextMenu={(e) => { e.preventDefault(); onSpineContextMenu(book); }}
      onMouseEnter={(e) => onSpineHover(book, e.currentTarget)}
      onMouseLeave={onSpineLeave}
      onFocus={(e) => onSpineHover(book, e.currentTarget)}
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
          onClick={(e) => onToggleFinished(e, book)}
          title={_('Mark as Unfinished')}
        >
          <MdCheck />
        </button>
      )}
      {status !== 'finished' && (
        <button
          className='spine-finish-btn'
          onClick={(e) => onToggleFinished(e, book)}
          title={_('Mark as Finished')}
        >
          ✓
        </button>
      )}
      <button
        className={clsx('spine-fav-btn', book.isFavorite && 'favorited')}
        onClick={(e) => onToggleFavorite(e, book)}
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
        onClick={(e) => { e.stopPropagation(); onShowDetails(book); }}
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
});
SpineItem.displayName = 'SpineItem';


interface BookshelfProps {
  libraryBooks: Book[];
  isSelectMode: boolean;
  isSelectAll: boolean;
  isSelectNone: boolean;
  handleImportBooks: () => void;
  handleBookDelete: (book: Book, syncBooks?: boolean) => Promise<boolean>;
  handleSetSelectMode: (selectMode: boolean) => void;
  handleShowDetailsBook: (book: Book) => void;
  handleRefreshLibrary: () => Promise<void>;
  currentGroupPath?: string;
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
  handleRefreshLibrary,
  currentGroupPath,
}) => {
  const _ = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { appService, envConfig } = useEnv();
  const { settings } = useSettingsStore();
  const { updateBook, toggleSelectedBook, setSelectedBooks } = useLibraryStore();
  const selectedBooksSet = useLibraryStore((s) => s.selectedBooks);
  // 仅用于 SelectModeActions / GroupingModal 等需要数组的下游；书脊选中判定一律用 Set.has（P4）
  const selectedBooks = Array.from(selectedBooksSet);
  const queryTerm = searchParams?.get('q') || null;
  const rawFilter = searchParams?.get('filter') || 'all';
  const filter = rawFilter === 'want' ? 'finished' : rawFilter;
  const viewMode = (searchParams?.get('view') || settings.libraryViewMode || 'grid') as LibraryViewModeType;
  const sortBy = (searchParams?.get('sort') || settings.librarySortBy || 'created') as any;
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

    // Group filter（P17：用 prop 传入的分组名，替代渲染期 useLibraryStore.getState() 非响应式读取）
    if (groupId) {
      const groupName = currentGroupPath;
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

    // Sort（P6）
    return sortBooks(books, sortBy, sortOrder);
  }, [libraryBooks, groupId, currentGroupPath, filter, queryTerm, sortBy, sortOrder]);

  // --- A. 分区陈列：按顶层分组分区 ---
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const currentGroupName = currentGroupPath || null;

  const bookSections = useMemo(() => {
    // "全部书架"视图：最近阅读分区放最上面，然后按顶层分组分区，未分组在最后
    const sections: { name: string; books: Book[]; topLevel: boolean; isRecent?: boolean }[] = [];

    // 最近阅读分区：有 lastReadAt 的书按时间降序取前 6
    const recent = filteredBooks
      .filter((b) => b.lastReadAt)
      .sort((a, b) => (b.lastReadAt || 0) - (a.lastReadAt || 0))
      .slice(0, 6);
    if (recent.length > 0 && !currentGroupName) {
      sections.push({ name: '最近阅读', books: recent, topLevel: false, isRecent: true });
    }

    // 已在具体分组视图时不分区
    if (currentGroupName) {
      return [{ name: currentGroupName, books: filteredBooks, topLevel: false }];
    }
    const byTop: Record<string, Book[]> = {};
    for (const b of filteredBooks) {
      const gn = (b.groupName || '').trim() || BOOK_UNGROUPED_NAME;
      const top = gn.split('/')[0]!;
      if (!byTop[top]) byTop[top] = [];
      byTop[top].push(b);
    }
    const tops = Object.keys(byTop).sort((a, b2) => {
      if (a === BOOK_UNGROUPED_NAME) return 1;
      if (b2 === BOOK_UNGROUPED_NAME) return -1;
      return a.localeCompare(b2, 'zh');
    });
    for (const top of tops) {
      sections.push({ name: top, books: byTop[top]!, topLevel: true });
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
  const sentinelElsRef = useRef(new Map<string, HTMLElement>());

  // P3：仅在过滤/排序条件变化时重置"种子可见集"（数据更新不重置——已挂载书脊不再闪回占位符）
  const visibleResetKey = `${groupId}|${filter}|${queryTerm}|${sortBy}|${sortOrder}|${filteredBooks.length}`;
  useEffect(() => {
    setVisibleSet((prev) => {
      if (filteredBooks.length <= 60) {
        const next = new Set(filteredBooks.map((b) => b.hash));
        if (next.size === prev.size && filteredBooks.every((b) => prev.has(b.hash))) return prev;
        return next;
      }
      // >60 册：前 40 册作种子，保留此前已进入过视口的书
      const next = new Set(filteredBooks.slice(0, 40).map((b) => b.hash));
      const valid = new Set(filteredBooks.map((b) => b.hash));
      for (const h of prev) if (valid.has(h)) next.add(h);
      return next;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleResetKey]);

  // P3：observer 生命周期独立管理——书单回到 ≤60 册时销毁；卸载时销毁（不再随每次渲染重建）
  useEffect(() => {
    if (filteredBooks.length > 60) return;
    observerRef.current?.disconnect();
    observerRef.current = null;
    sentinelElsRef.current.clear();
  }, [filteredBooks.length]);
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      sentinelElsRef.current.clear();
    };
  }, []);

  // IntersectionObserver：进入视口的占位符变为真实卡片
  // P3：ref 回调收到 null（元素卸载）时显式 unobserve，杜绝 observer 持有已卸载元素引用
  const registerSpineSentinel = useCallback((bookHash: string, el: HTMLElement | null) => {
    const prevEl = sentinelElsRef.current.get(bookHash);
    if (prevEl && prevEl !== el) observerRef.current?.unobserve(prevEl);
    if (!el) {
      sentinelElsRef.current.delete(bookHash);
      return;
    }
    sentinelElsRef.current.set(bookHash, el);
    if (filteredBooks.length <= 60) return;
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          setVisibleSet((prev) => {
            let changed = false;
            const next = new Set(prev);
            for (const entry of entries) {
              const hash = (entry.target as HTMLElement).dataset['bookHash'];
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
        // 2026-10-15 还原 v0205 守卫:本地已在库的书(downloadedAt 已置位)直接放行;
        // 仅"云端有、本地未落盘"的书才现场校验。旧逻辑每次点击都 isBookAvailable
        // → exists+stats 全量拉书,111MB PDF 点击即卡 10s+(详见 apiFileSystem 轻量化注释)
        if (book.uploadedAt && !book.downloadedAt) {
          const available = await appService?.isBookAvailable(book);
          if (!available) return;
        }
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

  // spineHeight 原为死代码（渲染中无调用），已随 P5 重构一并移除；
  // spineStatusClass / spineProgress 已上移为 module 级纯函数供 SpineItem 使用

  const handleToggleFinished = useCallback(async (e: React.MouseEvent, book: Book) => {
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
  }, [envConfig, updateBook]);

  const handleToggleFavorite = useCallback(async (e: React.MouseEvent, book: Book) => {
    e.stopPropagation();
    await updateBook(envConfig, {
      ...book,
      isFavorite: !book.isFavorite,
      favoriteAt: !book.isFavorite ? Date.now() : undefined,
    });
  }, [envConfig, updateBook]);

  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSpineHover = useCallback((book: Book, el: HTMLElement) => {
    if (isSelectMode) return;
    // 清除离开定时器（鼠标又回到书脊上）
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    // 防抖：60ms——防止快速划过的状态抖动，但人眼基本无感知
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setHoverBook(book);
      setHoverEl(el);
    }, 60);
  }, [isSelectMode]);

  const handleSpineLeave = useCallback(() => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    // 延迟 150ms 清除——给鼠标留出"移到著录卡上"的时间
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setHoverBook(null);
      setHoverEl(null);
    }, 150);
  }, []);

  // 鼠标进入著录卡时保持显示（取消清除）
  const handleCardEnter = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  }, []);

  // 右键菜单（详情/编辑/删除/收藏）
  const handleSpineContextMenu = useCallback(async (book: Book) => {
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
  }, [_, appService, isSelectMode, handleSetSelectMode, toggleSelectedBook, handleShowDetailsBook, updateBook, envConfig, settings]);

  // Delete handling
  const confirmDelete = async () => {
    for (const id of bookIdsToDelete) {
      const book = libraryBooks.find((b) => b.hash === id);
      if (book) await handleBookDelete(book, false);
    }
    await handleRefreshLibrary();
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
            const isSelected = isSelectMode && selectedBooksSet.has(book.hash);
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
            title={_('Delete Books')}
            message={_('Are you sure you want to delete the selected books?')}
            onConfirm={() => void confirmDelete()}
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

  // 书脊卡片渲染已提取为 module 级 <SpineItem>（React.memo，见文件头部）——
  // 原 renderSpine 内联函数会在每次渲染时重建整墙 JSX 与全部内联事件闭包

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
        {(() => {
          let groupIdx = 0; // 分组罗马数字独立计数（最近阅读不占号）
          return bookSections.map((section) => {
          const isCollapsed = collapsedGroups.has(section.name);
          const sectionBooks = isCollapsed ? [] : section.books;
          if (section.isRecent) {
            // 最近阅读——独立视觉：背景框+横向滚动书带，与分组分区区分
            return (
              <section key={section.name} className='morgan-shelf-section section-recent'>
                <div className='recent-shelf-box'>
                  <div className='recent-header'>
                    <span className='recent-label'>最近阅读</span>
                    <span className='recent-line' />
                    <span className='recent-hint'>RECENT</span>
                  </div>
                  <div className='morgan-shelf recent-shelf'>
                    {sectionBooks.map((book) =>
                      visibleSet.has(book.hash) ? (
                        <SpineItem
                          key={book.hash}
                          book={book}
                          isSelected={isSelectMode && selectedBooksSet.has(book.hash)}
                          onBookClick={handleBookClick}
                          onSpineContextMenu={handleSpineContextMenu}
                          onSpineHover={handleSpineHover}
                          onSpineLeave={handleSpineLeave}
                          onToggleFinished={handleToggleFinished}
                          onToggleFavorite={handleToggleFavorite}
                          onShowDetails={handleShowDetailsBook}
                        />
                      ) : (
                        renderSentinel(book)
                      )
                    )}
                  </div>
                </div>
              </section>
            );
          }
          const roman = ROMAN[groupIdx] || `${groupIdx + 1}`;
          groupIdx++;
          return (
            <section key={section.name} className='morgan-shelf-section'>
              {/* 分区标题横带 */}
              <div
                className='section-header'
                onClick={() => section.topLevel && toggleSection(section.name)}
                style={{ cursor: section.topLevel ? 'pointer' : 'default' }}
              >
                <span className='section-roman'>{roman}</span>
                <span className='section-name'>{section.name}</span>
                <span className='section-line' />
                <span className='section-count'>{section.books.length} 册</span>
                {section.topLevel && (
                  <span className={clsx('section-chevron', isCollapsed && 'collapsed')}>▶</span>
                )}
              </div>
              {/* 书脊墙 */}
              <div className='morgan-shelf'>
                {sectionBooks.map((book) =>
                  visibleSet.has(book.hash) ? (
                    <SpineItem
                      key={book.hash}
                      book={book}
                      isSelected={isSelectMode && selectedBooksSet.has(book.hash)}
                      onBookClick={handleBookClick}
                      onSpineContextMenu={handleSpineContextMenu}
                      onSpineHover={handleSpineHover}
                      onSpineLeave={handleSpineLeave}
                      onToggleFinished={handleToggleFinished}
                      onToggleFavorite={handleToggleFavorite}
                      onShowDetails={handleShowDetailsBook}
                    />
                  ) : (
                    renderSentinel(book)
                  )
                )}
              </div>
            </section>
          );
          });
        })()}
      </div>

      {filteredBooks.length === 0 && (
        <div className='morgan-empty-shelf'>
          <div className='empty-icon'>❦</div>
          <div className='empty-title'>书架尚空</div>
          <div className='empty-hint'>导入书籍或扫描书库以填充</div>
        </div>
      )}

      {/* hover 著录卡 */}
      <SpineCard book={hoverBook} spineEl={hoverEl} onCardEnter={handleCardEnter} onCardLeave={handleSpineLeave} />

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
          title={_('Delete Books')}
          message={_('Are you sure you want to delete the selected books?')}
          onConfirm={() => void confirmDelete()}
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

// P5：React.memo——配合 page 侧 useCallback 化的 props 与 useMemo 稳定的 libraryBooks，父组件渲染时书脊墙整体跳过
export default React.memo(Bookshelf);
