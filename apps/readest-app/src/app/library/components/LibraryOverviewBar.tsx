'use client';

import clsx from 'clsx';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import {
    MdOutlineAutoStories,
    MdOutlineBookmarkBorder,
    MdOutlineCheckCircle,
    MdOutlineSchedule,
    MdOutlineLibraryBooks,
    MdOutlineMoreHoriz,
    MdOutlineToday,
} from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { PiPlus, PiSelectionAll, PiSelectionAllFill, PiGear } from 'react-icons/pi';

import { useTranslation } from '@/hooks/useTranslation';
import { useLibraryStore } from '@/store/libraryStore';
import { useEnv } from '@/context/EnvContext';
import { formatDurationMs } from '@/utils/misc';
import { getBookProgressPercentage, getBookReadStatus } from '../utils/libraryUtils';
import { Book, BookNote } from '@/types/book';
import { navigateToReader } from '@/utils/nav';
import BookCover from '@/components/BookCover';
import Dropdown from '@/components/Dropdown';
import ViewMenu from './ViewMenu';
import SettingsMenu from './SettingsMenu';
import { ScanBooksButton } from './ScanBooksButton';
import { isWebAppPlatform } from '@/services/environment';
import { debounce } from '@/utils/debounce';
import ImportMenu from './ImportMenu';

type FilterKey = 'all' | 'unread' | 'reading' | 'finished' | 'favorite';

interface LibraryOverviewBarProps {
    isSelectMode: boolean;
    isSelectAll: boolean;
    onImportBooksFromFiles: () => void;
    onImportBooksFromDirectory?: () => void;
    onToggleSelectMode: () => void;
    onSelectAll: () => void;
    onDeselectAll: () => void;
}

const setParam = (searchParams: ReadonlyURLSearchParams | null, key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (!value) params.delete(key);
    else params.set(key, value);
    return params.toString();
};

const LibraryOverviewBar: React.FC<LibraryOverviewBarProps> = ({
    isSelectMode,
    isSelectAll,
    onImportBooksFromFiles,
    onImportBooksFromDirectory,
    onToggleSelectMode,
    onSelectAll,
    onDeselectAll,
}) => {
    const _ = useTranslation();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { envConfig } = useEnv();

    const { library, notesData, currentBookshelf, updateBook } = useLibraryStore();
    const [searchQuery, setSearchQuery] = useState(searchParams?.get('q') ?? '');
    const rawFilter = searchParams?.get('filter') || 'all';
    // Legacy: want-to-read filter was removed; treat it as finished.
    const filter = (rawFilter === 'want' ? 'finished' : rawFilter) as FilterKey;

    const visibleBooks = useMemo(() => library.filter((b) => !b.deletedAt), [library]);
    const booksByHash = useMemo(() => new Map(visibleBooks.map((b) => [b.hash, b] as const)), [visibleBooks]);

    const [reviewIndex, setReviewIndex] = useState(0);
    const currentBooksCount = currentBookshelf.reduce(
        (acc, item) => acc + ('books' in item ? item.books.length : 1),
        0,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedUpdateQueryParam = useCallback(
        debounce((value: string) => {
            const params = new URLSearchParams(searchParams?.toString());
            if (value) {
                params.set('q', value);
            } else {
                params.delete('q');
            }
            router.push(`?${params.toString()}`);
        }, 500),
        [searchParams],
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setSearchQuery(newQuery);
        debouncedUpdateQueryParam(newQuery);
    };

    const stats = useMemo(() => {
        const now = Date.now();
        const dt = new Date(now);
        const monthStart = new Date(dt.getFullYear(), dt.getMonth(), 1).getTime();
        const nextMonthStart = new Date(dt.getFullYear(), dt.getMonth() + 1, 1).getTime();
        const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

        let finished = 0;
        let reading = 0;
        let unread = 0;
        let favorites = 0;

        let finishedThisMonth = 0;
        let addedThisMonth = 0;
        let addedLast7Days = 0;

        let totalReadTimeMs = 0;

        for (const book of visibleBooks) {
            const status = getBookReadStatus(book);
            if (status === 'finished') finished++;
            else if (status === 'reading') reading++;
            else unread++;

            if (book.isFavorite) favorites++;

            if (book.finishedAt && book.finishedAt >= monthStart && book.finishedAt < nextMonthStart) {
                finishedThisMonth++;
            }

            if (book.createdAt >= monthStart && book.createdAt < nextMonthStart) {
                addedThisMonth++;
            }
            if (book.createdAt >= sevenDaysAgo) {
                addedLast7Days++;
            }

            totalReadTimeMs += book.totalReadTimeMs || 0;
        }

        const totalAnnotations = notesData?.books
            ? Object.values(notesData.books).reduce((acc, b) => acc + (b?.notes?.length || 0), 0)
            : 0;

        const continueReading = visibleBooks
            .filter((b) => !b.deletedAt && getBookReadStatus(b) === 'reading')
            .sort((a, b) => (b.lastReadAt || 0) - (a.lastReadAt || 0))
            .slice(0, 2);

        const nearFinish = visibleBooks
            .map((b) => ({
                book: b,
                percent: getBookProgressPercentage(b),
            }))
            .filter(({ percent, book }) => percent >= 80 && percent < 100 && !book.deletedAt)
            .sort((a, b) => b.percent - a.percent || ((b.book.lastReadAt || 0) - (a.book.lastReadAt || 0)))
            .slice(0, 3);

        // Recent notes for "Today review" carousel
        const recentNotes: Array<{ book: Book; note: BookNote }> = [];
        if (notesData?.books) {
            for (const [bookHash, entry] of Object.entries(notesData.books)) {
                const book = booksByHash.get(bookHash);
                if (!book) continue;
                const notes = (entry?.notes || []) as BookNote[];
                for (const note of notes) {
                    if (note?.deletedAt) continue;
                    if (!note.note && !note.text) continue;
                    recentNotes.push({ book, note });
                }
            }
            recentNotes.sort((a, b) => (b.note.updatedAt || 0) - (a.note.updatedAt || 0));
        }

        const reviewNotes = recentNotes.slice(0, 3);

        // next-to-read: unread favorites, then newest unread
        const next =
            visibleBooks
                .filter((b) => !b.deletedAt && getBookProgressPercentage(b) === 0 && b.isFavorite)
                .sort((a, b) => b.createdAt - a.createdAt)[0] ||
            visibleBooks
                .filter((b) => !b.deletedAt && getBookProgressPercentage(b) === 0)
                .sort((a, b) => b.createdAt - a.createdAt)[0];

        return {
            total: visibleBooks.length,
            unread,
            reading,
            finished,
            finishedThisMonth,
            favorites,
            addedThisMonth,
            addedLast7Days,
            totalReadTimeMs,
            totalAnnotations,
            nextTitle: next?.title || null,
            continueReading,
            nearFinish,
            reviewNotes,
        };
    }, [booksByHash, notesData, visibleBooks]);

    const chips: Array<{ key: FilterKey; label: string; count: number }> = useMemo(
        () => [
            { key: 'all', label: _('All'), count: stats.total },
            { key: 'unread', label: _('Unread'), count: stats.unread },
            { key: 'reading', label: _('Reading'), count: stats.reading },
            { key: 'finished', label: _('Finished'), count: stats.finished },
            { key: 'favorite', label: _('Favorites'), count: stats.favorites },
        ],
        [_, stats],
    );

    const applyFilter = (key: FilterKey) => {
        const next = key === 'all' ? null : key;
        router.push(`?${setParam(searchParams, 'filter', next)}`);
    };

    useEffect(() => {
        if (!stats.reviewNotes.length) return;
        const timer = window.setInterval(() => {
            setReviewIndex((i) => (i + 1) % stats.reviewNotes.length);
        }, 8000);
        return () => window.clearInterval(timer);
    }, [stats.reviewNotes.length]);

    const openBook = async (book: Book, params?: Record<string, string>) => {
        const now = Date.now();
        const updated = {
            ...book,
            lastReadAt: now,
            updatedAt: now,
        };
        await updateBook(envConfig, updated);
        const qs = new URLSearchParams();
        if (params) {
            for (const [k, v] of Object.entries(params)) qs.set(k, v);
        }
        navigateToReader(router, [book.hash], qs.toString());
    };

    const activeReview = stats.reviewNotes.length ? stats.reviewNotes[reviewIndex % stats.reviewNotes.length] : null;

    return (
        <div className='px-4 pb-0 pt-0 -mt-2'>
            <div className='bg-base-100/70 border-base-300 flex flex-col gap-2 rounded-2xl rounded-t-none border border-t-0 p-2 shadow-sm backdrop-blur'>
                {/* Top controls */}
                <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                    <div className='flex flex-1 items-center gap-2'>
                        <div className='relative flex h-9 flex-1 items-center sm:h-8'>
                            <span className='text-base-content/50 absolute ps-3'>
                                <FaSearch className='h-4 w-4' />
                            </span>
                            <input
                                type='text'
                                value={searchQuery}
                                placeholder={
                                    currentBooksCount > 1
                                        ? _('Search in {{count}} Book(s)...', { count: currentBooksCount })
                                        : _('Search Books...')
                                }
                                onChange={handleSearchChange}
                                spellCheck='false'
                                className={clsx(
                                    'search-input input h-9 w-full rounded-full ps-10 pr-10 sm:h-8',
                                    'bg-base-200/40 border-0',
                                    'font-sans text-sm font-light',
                                    'placeholder:text-base-content/50 truncate',
                                    'focus:outline-none focus:ring-0',
                                )}
                            />

                            {searchQuery && (
                                <button
                                    type='button'
                                    onClick={() => {
                                        setSearchQuery('');
                                        debouncedUpdateQueryParam('');
                                    }}
                                    className='text-base-content/40 hover:text-base-content/70 absolute right-2 flex h-7 w-7 items-center justify-center rounded-full'
                                    aria-label={_('Clear Search')}
                                    title={_('Clear Search')}
                                >
                                    <IoMdCloseCircle className='h-4 w-4' />
                                </button>
                            )}
                        </div>

                        <Dropdown
                            label={_('Import Books')}
                            className={clsx('dropdown-bottom dropdown-end')}
                            buttonClassName='btn btn-sm h-9 min-h-9 w-9 rounded-full p-0'
                            toggleButton={<PiPlus role='none' className='h-5 w-5' />}
                        >
                            <ImportMenu
                                onImportBooksFromFiles={onImportBooksFromFiles}
                                onImportBooksFromDirectory={onImportBooksFromDirectory}
                            />
                        </Dropdown>

                        <button
                            type='button'
                            onClick={onToggleSelectMode}
                            aria-label={_('Select Books')}
                            title={_('Select Books')}
                            className='btn btn-sm h-9 min-h-9 w-9 rounded-full p-0'
                        >
                            {isSelectMode ? (
                                <PiSelectionAllFill role='none' className='h-5 w-5' />
                            ) : (
                                <PiSelectionAll role='none' className='h-5 w-5' />
                            )}
                        </button>

                        {isSelectMode && (
                            <button
                                onClick={isSelectAll ? onDeselectAll : onSelectAll}
                                className='btn btn-sm h-9 min-h-9 rounded-full px-3'
                                aria-label={isSelectAll ? _('Deselect') : _('Select All')}
                            >
                                <span className='text-xs'>
                                    {isSelectAll ? _('Deselect') : _('Select All')}
                                </span>
                            </button>
                        )}
                    </div>

                    <div className='flex flex-wrap items-center gap-2 md:justify-end'>
                        <button
                            type='button'
                            onClick={() => router.push('/annotations')}
                            className='btn btn-sm rounded-full'
                            title={_('All Annotations')}
                        >
                            <MdOutlineLibraryBooks className='h-4 w-4' />
                            <span className='text-xs'>{_('Annotations')}</span>
                        </button>

                        {isWebAppPlatform() && process.env['NEXT_PUBLIC_STORAGE_MODE'] === 'local' && (
                            <ScanBooksButton />
                        )}

                        <Dropdown
                            label={_('View Menu')}
                            className='dropdown-bottom dropdown-end'
                            buttonClassName='btn btn-sm rounded-full'
                            toggleButton={
                                <span className='inline-flex items-center gap-1 text-xs'>
                                    <MdOutlineMoreHoriz className='h-4 w-4' />
                                    {_('View')}
                                </span>
                            }
                        >
                            <div className='w-64'>
                                <ViewMenu />
                            </div>
                        </Dropdown>

                        <Dropdown
                            label={_('Settings')}
                            className='dropdown-bottom dropdown-end'
                            buttonClassName='btn btn-sm rounded-full'
                            toggleButton={
                                <span className='inline-flex items-center gap-1 text-xs'>
                                    <PiGear className='h-4 w-4' />
                                    {_('Settings')}
                                </span>
                            }
                        >
                            <div className='w-64'>
                                <SettingsMenu />
                            </div>
                        </Dropdown>
                    </div>
                </div>

                <div className='flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4'>
                    {/* Stats + Filters (compact) */}
                    <div className='flex min-w-0 flex-1 flex-col gap-2'>
                        {/* 阅读数据卡片 */}
                        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                            {/* 个人阅读统计 */}
                            <div className='bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-3 border border-primary/20'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <MdOutlineSchedule className='h-5 w-5 text-primary' />
                                    <h3 className='text-sm font-semibold'>个人阅读统计</h3>
                                </div>
                                <div className='space-y-1.5 text-xs'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>14天阅读时长</span>
                                        <span className='font-semibold'>{formatDurationMs(stats.totalReadTimeMs)}</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>累计阅读时长</span>
                                        <span className='font-semibold'>{formatDurationMs(stats.totalReadTimeMs)}</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>最近阅读</span>
                                        <span className='font-semibold'>
                                            {stats.continueReading.length > 0 && stats.continueReading[0]?.lastReadAt
                                                ? new Date(stats.continueReading[0].lastReadAt).toLocaleString(undefined, {
                                                    month: '2-digit',
                                                    day: '2-digit',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                                : '尚未阅读'}
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>本月完成</span>
                                        <span className='font-semibold'>{stats.finishedThisMonth} 本</span>
                                    </div>
                                </div>
                            </div>

                            {/* 书库概览 */}
                            <div className='bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-3 border border-secondary/20'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <MdOutlineAutoStories className='h-5 w-5 text-secondary' />
                                    <h3 className='text-sm font-semibold'>书库概览</h3>
                                </div>
                                <div className='space-y-1.5 text-xs'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>高频阅读 TOP 3</span>
                                        <span className='font-semibold truncate max-w-[140px]' title={stats.continueReading.slice(0, 3).map(b => b.title).join(', ')}>
                                            {stats.continueReading.length > 0
                                                ? stats.continueReading.slice(0, 3).map(b => b.title.substring(0, 8)).join(', ')
                                                : '暂无'}
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>7天新增</span>
                                        <span className='font-semibold'>{stats.addedLast7Days} 本</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>最近加入</span>
                                        <span className='font-semibold truncate max-w-[140px]' title={visibleBooks.filter(b => b.createdAt >= Date.now() - 7 * 24 * 60 * 60 * 1000).slice(0, 3).map(b => b.title).join(', ')}>
                                            {visibleBooks.filter(b => b.createdAt >= Date.now() - 7 * 24 * 60 * 60 * 1000).length > 0
                                                ? visibleBooks.filter(b => b.createdAt >= Date.now() - 7 * 24 * 60 * 60 * 1000).slice(0, 3).map(b => b.title.substring(0, 8)).join(', ')
                                                : '暂无'}
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base-content/70'>最近读完</span>
                                        <span className='font-semibold truncate max-w-[140px]' title={visibleBooks.filter(b => b.finishedAt).sort((a, b) => (b.finishedAt || 0) - (a.finishedAt || 0)).slice(0, 1).map(b => b.title).join('')}>
                                            {visibleBooks.filter(b => b.finishedAt).length > 0
                                                ? visibleBooks.filter(b => b.finishedAt).sort((a, b) => (b.finishedAt || 0) - (a.finishedAt || 0))[0]?.title.substring(0, 15) || '暂无'
                                                : '暂无'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                            {chips.map((chip) => (
                                <button
                                    key={chip.key}
                                    type='button'
                                    onClick={() => applyFilter(chip.key)}
                                    className={clsx(
                                        'btn btn-sm h-8 min-h-8 rounded-full px-3',
                                        filter === chip.key || (chip.key === 'all' && filter === 'all')
                                            ? 'btn-primary'
                                            : 'btn-ghost bg-base-200/40',
                                    )}
                                    aria-pressed={filter === chip.key}
                                >
                                    <span className='text-xs'>
                                        {chip.label} <span className='text-base-content/60'>({chip.count})</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content blocks (right column) */}
                    <div className='grid grid-cols-1 gap-2 lg:w-[36rem] lg:grid-cols-2'>
                        {/* Continue reading */}
                        <div className='bg-base-200/25 rounded-xl p-1.5 h-full flex flex-col'>
                            <div className='mb-2 flex items-center justify-between'>
                                <div className='text-xs font-semibold'>{_('Continue reading')}</div>
                            </div>
                            {stats.continueReading.length ? (
                                <div className='flex min-h-[84px] flex-1 gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                                    {stats.continueReading.map((book) => (
                                        <button
                                            key={book.hash}
                                            type='button'
                                            onClick={() => void openBook(book)}
                                            className='bg-base-100/60 hover:bg-base-100/80 flex h-full w-36 flex-shrink-0 items-center gap-2 rounded-xl p-1.5 text-left transition'
                                        >
                                            <div className='aspect-[28/41] w-7 overflow-hidden rounded-md shadow'>
                                                <BookCover book={book} mode='list' coverFit='crop' imageClassName='rounded-md' />
                                            </div>
                                            <div className='min-w-0 flex-1'>
                                                <div className='line-clamp-1 max-w-[7.5rem] text-xs font-medium'>
                                                    {book.title}
                                                </div>
                                                <div className='text-base-content/60 mt-0.5 text-[11px]'>
                                                    {_('Progress')}: {getBookProgressPercentage(book)}%
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className='text-base-content/60 text-xs'>{_('None')}</div>
                            )}
                        </div>

                        {/* Today review */}
                        <div className='bg-base-200/25 rounded-xl p-1.5 h-full flex flex-col'>
                            <div className='mb-2 flex items-center justify-between'>
                                <div className='flex items-center gap-2 text-xs font-semibold'>
                                    <MdOutlineToday className='h-4 w-4' />
                                    <span>{_('Today review')}</span>
                                </div>
                                {stats.reviewNotes.length > 1 && (
                                    <div className='text-base-content/50 text-xs tabular-nums'>
                                        {reviewIndex + 1}/{stats.reviewNotes.length}
                                    </div>
                                )}
                            </div>

                            {activeReview ? (
                                <div
                                    className='bg-base-100/60 hover:bg-base-100/80 flex min-h-[84px] flex-1 cursor-pointer gap-2 rounded-xl p-1.5 transition'
                                    role='button'
                                    tabIndex={0}
                                    onClick={() => void openBook(activeReview.book, activeReview.note.cfi ? { cfi: activeReview.note.cfi } : undefined)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            void openBook(activeReview.book, activeReview.note.cfi ? { cfi: activeReview.note.cfi } : undefined);
                                        }
                                    }}
                                >
                                    <div className='aspect-[28/41] w-7 flex-shrink-0 overflow-hidden rounded-md shadow'>
                                        <BookCover book={activeReview.book} mode='list' coverFit='crop' imageClassName='rounded-md' />
                                    </div>
                                    <div className='min-w-0 flex-1'>
                                        <div className='line-clamp-1 max-w-[7.5rem] text-xs font-medium'>
                                            {activeReview.book.title}
                                        </div>
                                        <div className='text-base-content/70 mt-0.5 line-clamp-2 text-[11px]'>
                                            {activeReview.note.note || activeReview.note.text}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='text-base-content/60 text-xs'>{_('No annotations yet')}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryOverviewBar;
