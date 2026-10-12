'use client';

import clsx from 'clsx';
import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import { PiSelectionAll, PiGear, PiDownloadSimple, PiFunnel, PiBooks } from 'react-icons/pi';
import { BiScan } from 'react-icons/bi';
import { scanAndImportBooks } from '@/libs/storage';
import { eventDispatcher } from '@/utils/event';
import SettingsMenu from './SettingsMenu';
import { MdViewModule, MdViewList, MdCheckCircle } from 'react-icons/md';
import { useState as useSt } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

import { useTranslation } from '@/hooks/useTranslation';
import { useLibraryStore } from '@/store/libraryStore';
import { useEnv } from '@/context/EnvContext';
import { useSettingsStore } from '@/store/settingsStore';
import { getBookReadStatus } from '../utils/libraryUtils';
import { Book } from '@/types/book';
import { navigateToLibrary } from '@/utils/nav';
import { debounce } from '@/utils/debounce';
import { isWebAppPlatform } from '@/services/environment';

const setParam = (searchParams: ReadonlyURLSearchParams | null, key: string, value: string | null) => {
  const params = new URLSearchParams(searchParams?.toString());
  if (!value) params.delete(key);
  else params.set(key, value);
  return params.toString();
};

interface MorganOverviewBarProps {
  isSelectMode: boolean;
  isSelectAll: boolean;
  onImportBooksFromFiles: () => void;
  onImportBooksFromDirectory?: () => void;
  onToggleSelectMode: () => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  libraryBooks: Book[];
  compact?: boolean;
}

const SORT_OPTIONS = [
  { key: 'updated', label: '最后阅读' },
  { key: 'title', label: '书名' },
  { key: 'created', label: '按入藏' },
  { key: 'author', label: '作者' },
  { key: 'format', label: '格式' },
  { key: 'published', label: '出版' },
];

const FILTER_KEYS = ['all', 'reading', 'unread', 'finished', 'favorite'] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

const MorganOverviewBar: React.FC<MorganOverviewBarProps> = ({
  isSelectMode,
  isSelectAll,
  onImportBooksFromFiles,
  onImportBooksFromDirectory,
  onToggleSelectMode,
  onSelectAll,
  onDeselectAll,
  libraryBooks,
  compact = false,
}) => {
  const _ = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { envConfig } = useEnv();
  const { settings, setSettingsDialogOpen } = useSettingsStore();

  const [searchQuery, setSearchQuery] = useState(searchParams?.get('q') ?? '');
  const rawFilter = (searchParams?.get('filter') || 'all') as FilterKey;
  const filter = ((rawFilter as string) === 'want' ? 'finished' : rawFilter) as FilterKey;
  const sortBy = searchParams?.get('sort') || settings.librarySortBy || 'updated';
  const sortOrder = searchParams?.get('order') || (settings.librarySortAscending ? 'asc' : 'desc');
  const groupId = searchParams?.get('group') || '';
  const groupName = useLibraryStore((s) => s.getGroupName(groupId));

  const debouncedPush = useCallback(
    debounce((value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      if (value) params.set('q', value);
      else params.delete('q');
      router.push(`?${params.toString()}`);
    }, 500),
    [searchParams, router],
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setSearchQuery(v);
    debouncedPush(v);
  };

  const handleSort = (key: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('sort', key);
    // Toggle order if same sort
    if (sortBy === key) {
      params.set('order', sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      params.set('order', 'desc');
    }
    navigateToLibrary(router, params.toString());
  };

  const handleSetView = (mode: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('view', mode);
    navigateToLibrary(router, params.toString());
  };

  const applyFilter = (key: FilterKey) => {
    const next = key === 'all' ? null : key;
    router.push(`?${setParam(searchParams, 'filter', next)}`);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams?.toString());
    params.delete('filter');
    params.delete('q');
    params.delete('group');
    setSearchQuery('');
    navigateToLibrary(router, params.toString());
  };

  const hasFilters = filter !== 'all' || !!searchQuery || !!groupId;
  const visibleBooks = useMemo(() => libraryBooks.filter((b) => !b.deletedAt), [libraryBooks]);
  const counts = useMemo(() => {
    let reading = 0, unread = 0, finished = 0, favorite = 0;
    for (const b of visibleBooks) {
      const s = getBookReadStatus(b);
      if (s === 'reading') reading++;
      else if (s === 'finished') finished++;
      else unread++;
      if (b.isFavorite) favorite++;
    }
    return { all: visibleBooks.length, reading, unread, finished, favorite };
  }, [visibleBooks]);

  const filterLabels: Record<FilterKey, string> = {
    all: _('All'), reading: _('Reading'), unread: _('Unread'),
    finished: _('Finished'), favorite: _('Favorites'),
  };

  const [openMenu, setOpenMenu] = useSt<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => setOpenMenu(null);

  // 点击外部关闭
  useEffect(() => {
    if (!openMenu) return;
    const handler = () => setOpenMenu(null);
    setTimeout(() => {
      window.addEventListener('click', handler);
    }, 0);
    return () => window.removeEventListener('click', handler);
  }, [openMenu]);

  const stopProp = (e: React.MouseEvent) => e.stopPropagation();

  // compact 模式：图标按钮组放在馆牌
  if (compact) {
    return (
      <div className='morgan-header-actions'>
        {/* 视图 */}
        <div className='morgan-dropdown-wrap'>
          <button
            className={clsx('morgan-icon-btn', openMenu === 'view' && 'active')}
            onClick={() => toggleMenu('view')}
          >
            <MdViewModule />
            <span className='tooltip'>{_('View')}</span>
          </button>
          {openMenu === 'view' && (
            <div className='morgan-dropdown' onClick={stopProp}>
              <div className='dd-label'>{_('View Mode')}</div>
              <div className='dd-item' onClick={() => { handleSetView('grid'); closeMenu(); }}>
                <MdViewModule /> {_('Grid')}
              </div>
              <div className='dd-item' onClick={() => { handleSetView('list'); closeMenu(); }}>
                <MdViewList /> {_('List')}
              </div>
              <div className='dd-sep' />
              <div className='dd-label'>{_('Sort by')}</div>
              {SORT_OPTIONS.map((opt) => (
                <div
                  key={opt.key}
                  className='dd-item'
                  onClick={() => { handleSort(opt.key); closeMenu(); }}
                  style={sortBy === opt.key ? { color: 'var(--gilt-bright)' } : {}}
                >
                  {sortBy === opt.key ? <MdCheckCircle /> : <span style={{ width: '14px' }} />}
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 导入 */}
        <div className='morgan-dropdown-wrap'>
          <button
            className={clsx('morgan-icon-btn', openMenu === 'import' && 'active')}
            onClick={() => toggleMenu('import')}
          >
            <PiDownloadSimple />
            <span className='tooltip'>{_('Import')}</span>
          </button>
          {openMenu === 'import' && (
            <div className='morgan-dropdown' onClick={stopProp}>
              <div className='dd-item' onClick={() => { onImportBooksFromFiles(); closeMenu(); }}>
                <PiBooks /> {_('From Local File')}
              </div>
              {onImportBooksFromDirectory && (
                <div className='dd-item' onClick={() => { onImportBooksFromDirectory(); closeMenu(); }}>
                  <PiBooks /> {_('From Directory')}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 扫库 */}
        <button
          className={clsx('morgan-icon-btn', openMenu === 'scan' && 'active')}
          onClick={async () => {
            eventDispatcher.dispatch('toast', { type: 'info', timeout: 0, message: _('Scanning books directory...') });
            try {
              const result = await scanAndImportBooks();
              if (result.success) {
                const appService = await envConfig.getAppService();
                const updatedLibrary = await appService.loadLibraryBooks();
                useLibraryStore.getState().setLibrary(updatedLibrary);
                try { await appService.regenerateMissingCovers(updatedLibrary); } catch {}
                const msgs: string[] = [];
                if (result.summary.newCount > 0) msgs.push(_('Found {{count}} new book(s)', { count: result.summary.newCount }));
                if (result.summary.movedCount > 0) msgs.push(_('{{count}} book(s) moved', { count: result.summary.movedCount }));
                eventDispatcher.dispatch('toast', { type: msgs.length > 0 ? 'success' : 'info', timeout: 5000, message: msgs.length > 0 ? msgs.join(' · ') : _('No changes detected') });
              }
            } catch (error: any) {
              eventDispatcher.dispatch('toast', { type: 'error', timeout: 5000, message: _('Scan failed: {{error}}', { error: error?.message || 'Unknown' }) });
            }
          }}
        >
          <BiScan />
          <span className='tooltip'>{_('Scan')}</span>
        </button>

        {/* 选择模式 */}
        <button
          className={clsx('morgan-icon-btn', isSelectMode && 'active')}
          onClick={onToggleSelectMode}
        >
          <PiSelectionAll />
          <span className='tooltip'>{isSelectMode ? _('Select Mode') : _('Select')}</span>
        </button>

        {/* 设置菜单 — 完整用户管理/主题/功能 */}
        <div className='morgan-dropdown-wrap'>
          <button
            className={clsx('morgan-icon-btn', openMenu === 'settings' && 'active')}
            onClick={() => toggleMenu('settings')}
          >
            <PiGear />
            <span className='tooltip'>{_('Settings')}</span>
          </button>
          {openMenu === 'settings' && (
            <div className='morgan-settings-dropdown' onClick={stopProp}>
              <SettingsMenu setIsDropdownOpen={closeMenu} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // 非 compact 模式：完整工具行（搜索+排序+按钮+视图行）
  return (
    <div className='morgan-toolbar'>
      <div className='morgan-search'>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={_('Search books...')}
        />
      </div>
      {SORT_OPTIONS.slice(0, 4).map((opt) => (
        <button
          key={opt.key}
          className={clsx('morgan-sort-btn', sortBy === opt.key && 'active')}
          onClick={() => handleSort(opt.key)}
        >
          {opt.label}
          {sortBy === opt.key && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
        </button>
      ))}
      <button
        className={clsx('morgan-icon-btn', isSelectMode && 'active')}
        onClick={onToggleSelectMode}
        title={_('Select')}
      >
        <PiSelectionAll />
      </button>
      <button
        className='morgan-icon-btn'
        onClick={() => setSettingsDialogOpen(true)}
        title={_('Settings')}
      >
        <PiGear />
      </button>
      <div className='morgan-filterbar'>
        <span className='fb-main'>
          {groupName || filter !== 'all' ? `${groupName || filterLabels[filter]}` : _('All Books')}
        </span>
        <span className='fb-dim'>
          {filter !== 'all' ? counts[filter] : counts.all} / {counts.all} {_('books')}
        </span>
        {hasFilters && (
          <span className='fb-clear' onClick={clearFilters}>
            {_('Clear')} ✕
          </span>
        )}
      </div>
    </div>
  );
};

export default MorganOverviewBar;
