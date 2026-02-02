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
            { key: 'reading', label: _('Reading'), count: stats.reading },
            { key: 'unread', label: _('Unread'), count: stats.unread },
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
    const totalReadHours = stats.totalReadTimeMs / (1000 * 60 * 60);

    // Calculate total reading days from all books
    const totalReadDays = useMemo(() => {
        const uniqueDates = new Set<string>();
        for (const book of visibleBooks) {
            if (book.readDates && book.readDates.length > 0) {
                for (const timestamp of book.readDates) {
                    const dateKey = new Date(timestamp).toISOString().split('T')[0];
                    if (dateKey) {
                        uniqueDates.add(dateKey);
                    }
                }
            } else if (book.readingDays) {
                // Fallback to readingDays if readDates not available
                return book.readingDays;
            }
        }
        return uniqueDates.size || Math.floor(totalReadHours / 24);
    }, [visibleBooks, totalReadHours]);
    const recentAddedBooks = useMemo(() => {
        const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
        return visibleBooks
            .filter((b) => b.createdAt >= cutoff)
            .sort((a, b) => b.createdAt - a.createdAt);
    }, [visibleBooks]);
    const recentFinishedBooks = useMemo(() => {
        return visibleBooks
            .filter((b) => b.finishedAt)
            .sort((a, b) => (b.finishedAt || 0) - (a.finishedAt || 0));
    }, [visibleBooks]);

    return (
        <div className='px-4 pb-0 pt-0 -mt-2'>
            <div className='bg-base-100/70 border-base-300 flex flex-col gap-2 rounded-2xl rounded-t-none border border-t-0 p-2 shadow-sm backdrop-blur'>
                {/* Top controls */}
                <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-2'>
                    {/* Filter chips (left) */}
                    <div className='flex items-center gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-shrink-0'>
                        {chips.map((chip) => (
                            <button
                                key={chip.key}
                                type='button'
                                onClick={() => applyFilter(chip.key)}
                                className={clsx(
                                    'btn btn-sm h-8 min-h-8 rounded-full px-2.5 whitespace-nowrap text-xs',
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

                    {/* Search bar (middle) */}
                    <div className='flex flex-1 items-center gap-2'>
                        <div className='relative flex h-8 flex-1 items-center'>
                            <span className='text-base-content/50 absolute ps-3'>
                                <FaSearch className='h-3.5 w-3.5' />
                            </span>
                            <input
                                type='text'
                                value={searchQuery}
                                placeholder='搜索书籍...'
                                onChange={handleSearchChange}
                                spellCheck='false'
                                className={clsx(
                                    'search-input input h-8 w-full rounded-full ps-9 pr-8',
                                    'bg-base-200/40 border-0',
                                    'font-sans text-sm font-light',
                                    'placeholder:text-base-content/50',
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
                                    className='text-base-content/40 hover:text-base-content/70 absolute right-2 flex h-6 w-6 items-center justify-center rounded-full'
                                    aria-label='清空搜索'
                                    title='清空搜索'
                                >
                                    <IoMdCloseCircle className='h-4 w-4' />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right side buttons (compact) */}
                    <div className='flex items-center gap-1.5 flex-shrink-0'>
                        <button
                            type='button'
                            onClick={onImportBooksFromFiles}
                            className='btn btn-sm h-8 min-h-8 rounded-full px-2.5 gap-1'
                            aria-label='导入'
                            title='导入'
                        >
                            <PiPlus role='none' className='h-4 w-4' />
                            <span className='text-xs'>导入</span>
                        </button>

                        <button
                            type='button'
                            onClick={onToggleSelectMode}
                            aria-label='管理'
                            title='管理'
                            className='btn btn-sm h-8 min-h-8 rounded-full px-2.5 gap-1'
                        >
                            {isSelectMode ? (
                                <PiSelectionAllFill role='none' className='h-4 w-4' />
                            ) : (
                                <PiSelectionAll role='none' className='h-4 w-4' />
                            )}
                            <span className='text-xs'>管理</span>
                        </button>

                        {isSelectMode && (
                            <button
                                onClick={isSelectAll ? onDeselectAll : onSelectAll}
                                className='btn btn-sm h-8 min-h-8 rounded-full px-2.5 text-xs'
                                aria-label={isSelectAll ? '取消全选' : '全选'}
                            >
                                <span className='text-xs whitespace-nowrap'>
                                    {isSelectAll ? '取消全选' : '全选'}
                                </span>
                            </button>
                        )}

                        {isWebAppPlatform() && process.env['NEXT_PUBLIC_STORAGE_MODE'] === 'local' && (
                            <ScanBooksButton />
                        )}

                        <Dropdown
                            label='查看'
                            className='dropdown-bottom dropdown-end'
                            buttonClassName='btn btn-sm h-8 min-h-8 rounded-full px-2.5'
                            toggleButton={
                                <>
                                    <MdOutlineMoreHoriz className='h-4 w-4' />
                                    <span className='text-xs'>查看</span>
                                </>
                            }
                        >
                            <div className='w-64'>
                                <ViewMenu />
                            </div>
                        </Dropdown>

                        <Dropdown
                            label='设置'
                            className='dropdown-bottom dropdown-end'
                            buttonClassName='btn btn-sm h-8 min-h-8 rounded-full px-2.5'
                            toggleButton={
                                <>
                                    <PiGear className='h-4 w-4' />
                                    <span className='text-xs'>设置</span>
                                </>
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
                        <div className='grid grid-cols-1 gap-2 md:grid-cols-[0.85fr_1.15fr]'>
                            {/* 个人阅读统计 */}
                            <div className='bg-base-200/25 rounded-xl p-1.5 min-h-[112px] h-full flex flex-col'>
                                <div className='mb-2 h-6 flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-xs font-semibold text-base-content/80'>
                                        <MdOutlineSchedule className='h-4 w-4 text-primary' />
                                        <span>个人阅读统计</span>
                                    </div>
                                </div>
                                <div className='bg-base-100/60 flex flex-1 items-center gap-2.5 rounded-xl px-2.5 py-2'>
                                    {/* 核心数据 */}
                                    <div className='flex-shrink-0 w-[95px] border-r border-base-300/50 pr-2.5'>
                                        <div className='text-[11px] text-base-content/60 mb-0.5'>过去两周</div>
                                        <div className='flex items-baseline gap-1'>
                                            <span className='text-primary text-2xl font-bold leading-none tabular-nums'>
                                                {totalReadHours.toFixed(1)}
                                            </span>
                                            <span className='text-primary/60 text-[11px] font-medium'>小时</span>
                                        </div>
                                    </div>
                                    {/* 辅助数据 */}
                                    <div className='flex flex-1 items-center gap-3 text-xs'>
                                        <div className='flex-1'>
                                            <div className='text-[11px] text-base-content/60 mb-0.5'>累计阅读</div>
                                            <div className='font-medium text-xs tabular-nums'>
                                                {totalReadDays}<span className='text-[11px] text-base-content/60'>天</span>
                                                <span className='mx-0.5 text-base-content/40'>/</span>
                                                {totalReadHours.toFixed(1)}<span className='text-[11px] text-base-content/60'>小时</span>
                                            </div>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='text-[11px] text-base-content/60 mb-0.5'>上次阅读</div>
                                            <div className='font-medium text-xs'>
                                                {stats.continueReading.length > 0 && stats.continueReading[0]?.lastReadAt
                                                    ? (() => {
                                                        const date = new Date(stats.continueReading[0].lastReadAt);
                                                        return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
                                                    })()
                                                    : '尚未阅读'}
                                            </div>
                                        </div>
                                        <div className='flex-1'>
                                            <div className='text-[11px] text-base-content/60 mb-0.5'>本月完成</div>
                                            <div className='flex items-baseline gap-0.5'>
                                                <span className='font-bold text-success text-base tabular-nums'>{stats.finishedThisMonth}</span>
                                                <span className='text-xs text-base-content/60'>本</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 书库概览 */}
                            <div className='bg-base-200/25 rounded-xl p-1.5 min-h-[112px] h-full flex flex-col'>
                                <div className='mb-2 flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-xs font-semibold text-base-content/80'>
                                        <MdOutlineAutoStories className='h-4 w-4 text-secondary' />
                                        <span>书库概览</span>
                                    </div>
                                    <div className='flex items-center gap-1 rounded-full bg-secondary/10 px-2 py-0.5'>
                                        <span className='text-[11px] text-base-content/60'>近期入库</span>
                                        <span className='text-secondary text-sm font-bold tabular-nums'>{stats.addedLast7Days}</span>
                                    </div>
                                </div>
                                <div className='bg-base-100/60 flex flex-1 items-center gap-2 rounded-xl px-2.5 py-2'>
                                    {/* 最常阅读排行 */}
                                    <div className='flex flex-[1.05] flex-col items-start gap-1 overflow-hidden min-w-0'>
                                        {stats.continueReading.length > 0 ? (
                                            stats.continueReading.slice(0, 3).map((book, index) => {
                                                const readHours = (book.totalReadTimeMs || 0) / (1000 * 60 * 60);
                                                return (
                                                    <div key={book.hash} className='flex w-full items-center gap-1.5 min-w-0'>
                                                        <span
                                                            className={clsx(
                                                                'flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white',
                                                                index === 0 && 'bg-secondary',
                                                                index === 1 && 'bg-secondary/70',
                                                                index === 2 && 'bg-secondary/50',
                                                            )}
                                                        >
                                                            {index + 1}
                                                        </span>
                                                        <span className='truncate text-xs text-base-content/80 flex-1 max-w-[140px]' title={book.title}>
                                                            {book.title}
                                                        </span>
                                                        <span className='flex-shrink-0 text-[10px] text-base-content/50 tabular-nums ml-1'>
                                                            {readHours.toFixed(1)}h
                                                        </span>
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <div className='text-xs text-base-content/50'>暂无阅读记录</div>
                                        )}
                                    </div>
                                    {/* 分隔线 */}
                                    <div className='h-8 w-px bg-base-300/50 flex-shrink-0' />
                                    {/* 最近动态 */}
                                    <div className='flex flex-[1.05] gap-3 text-xs min-w-0'>
                                        <div className='flex-1 min-w-0'>
                                            <div className='text-[11px] text-base-content/60 mb-0.5'>最近加入</div>
                                            <div className='font-medium text-xs truncate' title={recentAddedBooks[0]?.title || ''}>
                                                {recentAddedBooks.length ? recentAddedBooks[0]?.title : '暂无'}
                                            </div>
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <div className='text-[11px] text-base-content/60 mb-0.5'>最近读完</div>
                                            <div className='font-medium text-xs truncate' title={recentFinishedBooks[0]?.title || ''}>
                                                {recentFinishedBooks.length ? recentFinishedBooks[0]?.title : '暂无'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content blocks (right column) */}
                    <div className='grid grid-cols-1 gap-2 lg:w-[40rem] lg:grid-cols-2'>
                        {/* Continue reading */}
                        <div className='bg-base-200/25 rounded-xl p-1.5 h-full min-h-[112px] flex flex-col'>
                            <div className='mb-2 h-6 flex items-center justify-between'>
                                <div className='flex items-center gap-2 text-xs font-semibold text-base-content/80'>
                                    <MdOutlineBookmarkBorder className='h-4 w-4' />
                                    <span>{_('Continue reading')}</span>
                                </div>
                            </div>
                            {stats.continueReading.length ? (
                                <div className='flex min-h-[64px] flex-1 gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
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
                        <div className='bg-base-200/25 hover:bg-base-200/40 rounded-xl p-1.5 h-full min-h-[112px] flex flex-col transition'>
                            <div className='mb-2 h-6 flex items-center justify-between'>
                                <div className='flex items-center gap-2 text-xs font-semibold text-base-content/80 hover:text-base-content transition'>
                                    <MdOutlineToday className='h-4 w-4' />
                                    <span>笔记拾遗</span>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <button
                                        type='button'
                                        onClick={() => router.push('/annotations')}
                                        className='btn btn-primary btn-xs h-5 min-h-5 rounded-full px-1.5 transition hover:shadow-md hover:scale-105'
                                        aria-label='查看全部'
                                    >
                                        <span className='text-[10px]'>查看全部</span>
                                    </button>
                                    {stats.reviewNotes.length > 1 && (
                                        <div className='text-base-content/50 text-[10px] tabular-nums leading-5'>
                                            {reviewIndex + 1}/{stats.reviewNotes.length}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {activeReview ? (
                                <div
                                    className='bg-base-100/60 hover:bg-base-100/80 flex min-h-[64px] flex-1 cursor-pointer gap-2 rounded-xl p-1.5 transition'
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
                                    <div className='aspect-[28/41] h-full flex-shrink-0 overflow-hidden rounded-md shadow'>
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
