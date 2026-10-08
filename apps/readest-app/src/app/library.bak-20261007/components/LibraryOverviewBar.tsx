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
                .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))[0] ||
            visibleBooks
                .filter((b) => !b.deletedAt && getBookProgressPercentage(b) === 0)
                .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))[0];

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
        let fallbackMaxDays = 0;
        for (const book of visibleBooks) {
            if (book.readDates && book.readDates.length > 0) {
                for (const timestamp of book.readDates) {
                    const d = new Date(timestamp);
                    // Use local-time date key so early-morning reading is not
                    // shifted into the previous UTC day
                    const dateKey = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
                    uniqueDates.add(dateKey);
                }
            } else if (book.readingDays && book.readingDays > fallbackMaxDays) {
                // No per-day data for this book; keep its own day count as a lower bound
                fallbackMaxDays = book.readingDays;
            }
        }
        // Never short-circuit mid-loop: combine day-level data with the fallback
        if (uniqueDates.size > 0) return Math.max(uniqueDates.size, fallbackMaxDays);
        if (fallbackMaxDays > 0) return fallbackMaxDays;
        return Math.floor(totalReadHours / 24);
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

    const lastReadLabel = stats.continueReading[0]?.lastReadAt
        ? (() => {
              const d = new Date(stats.continueReading[0]!.lastReadAt!);
              return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
          })()
        : '尚未阅读';

    const dot = <span aria-hidden='true' className='text-[#7A8FB6]/50'>·</span>;

    const seg = (
        label: string,
        value: string | number,
        opts: { accent?: boolean; title: string; pop?: React.ReactNode },
    ) => (
        <span
            className='group relative inline-flex cursor-default items-baseline tabular-nums'
            title={opts.title}
        >
            {label}{' '}
            <b className={opts.accent ? 'font-semibold text-[#FFC971]' : 'font-semibold'}>
                {value}
            </b>
            {opts.pop && (
                <span className='absolute left-0 top-[calc(100%+8px)] z-30 hidden w-max max-w-[280px] rounded-lg border border-[#7A8FB6]/25 bg-[#0B1220]/95 px-3 py-2 text-[10px] leading-relaxed shadow-xl backdrop-blur group-hover:block'>
                    {opts.pop}
                </span>
            )}
        </span>
    );

    return (
        <div className='px-4 pb-0 pt-3'>
            {/* Masthead: identity / clock / search / actions */}
            <div className='mb-2 flex flex-wrap items-center gap-x-4 gap-y-2'>
                <div
                    className='text-[11px]'
                    style={{
                        fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace",
                        letterSpacing: '0.32em',
                        color: 'rgba(245,166,35,0.85)',
                    }}
                >
                    TUNGSTEN STUDY · 钨丝书房
                </div>
                <div
                    className='hidden text-[11px] tabular-nums sm:block'
                    style={{
                        fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace",
                        letterSpacing: '0.12em',
                        color: 'rgba(246,241,227,0.35)',
                    }}
                >
                    {new Date().toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        weekday: 'short',
                    })}
                </div>
                <div className='relative ml-auto flex h-7 w-full max-w-[200px] items-center'>
                    <span className='text-base-content/40 absolute ps-2'>
                        <FaSearch className='h-3 w-3' />
                    </span>
                    <input
                        type='text'
                        value={searchQuery}
                        placeholder='搜索书籍...'
                        onChange={handleSearchChange}
                        spellCheck='false'
                        className='h-7 w-full rounded-none border-0 border-b border-base-content/15 bg-transparent ps-7 pr-7 font-sans text-xs font-light text-base-content placeholder:text-base-content/40 focus:border-[#F5A623]/60 focus:outline-none focus:ring-0'
                    />
                    {searchQuery && (
                        <button
                            type='button'
                            onClick={() => {
                                setSearchQuery('');
                                debouncedUpdateQueryParam('');
                            }}
                            className='text-base-content/40 hover:text-base-content/70 absolute right-1 flex h-5 w-5 items-center justify-center rounded-full'
                            aria-label='清空搜索'
                            title='清空搜索'
                        >
                            <IoMdCloseCircle className='h-3.5 w-3.5' />
                        </button>
                    )}
                </div>
                <div className='flex flex-shrink-0 items-center gap-1'>
                    <button
                        type='button'
                        onClick={onImportBooksFromFiles}
                        className='btn btn-ghost btn-sm h-7 min-h-7 rounded-full px-2.5 text-xs !bg-transparent hover:!bg-[#F5A623]/10 !border-transparent text-base-content/75 hover:!text-[#FFC971]'
                        aria-label='导入'
                        title='导入'
                    >
                        <PiPlus role='none' className='h-3.5 w-3.5' />
                        <span className='text-xs'>导入</span>
                    </button>
                    <button
                        type='button'
                        onClick={onToggleSelectMode}
                        aria-label='管理'
                        title='管理'
                        className='btn btn-ghost btn-sm h-7 min-h-7 rounded-full px-2.5 text-xs !bg-transparent hover:!bg-[#F5A623]/10 !border-transparent text-base-content/75 hover:!text-[#FFC971]'
                    >
                        {isSelectMode ? (
                            <PiSelectionAllFill role='none' className='h-3.5 w-3.5' />
                        ) : (
                            <PiSelectionAll role='none' className='h-3.5 w-3.5' />
                        )}
                        <span className='text-xs'>管理</span>
                    </button>
                    {isSelectMode && (
                        <button
                            onClick={isSelectAll ? onDeselectAll : onSelectAll}
                            className='btn btn-ghost btn-sm h-7 min-h-7 rounded-full px-2.5 text-xs !bg-transparent hover:!bg-[#F5A623]/10 !border-transparent text-base-content/75'
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
                        buttonClassName='btn btn-ghost btn-sm h-7 min-h-7 rounded-full px-2.5 !bg-transparent hover:!bg-[#F5A623]/10 !border-transparent text-base-content/75'
                        toggleButton={
                            <>
                                <MdOutlineMoreHoriz className='h-3.5 w-3.5' />
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
                        buttonClassName='btn btn-ghost btn-sm h-7 min-h-7 rounded-full px-2.5 !bg-transparent hover:!bg-[#F5A623]/10 !border-transparent text-base-content/75'
                        toggleButton={
                            <>
                                <PiGear className='h-3.5 w-3.5' />
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

            {/* Iron hairline */}
            <div className='h-px w-full' style={{ background: 'rgba(122,143,182,0.22)' }} />

            {/* Data ribbon: seven dive-down measures, iron dots, one continue link, one lamp wick */}
            <div
                className='flex flex-wrap items-center gap-x-4 gap-y-1 py-2 text-[11px]'
                style={{
                    fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace",
                    color: 'rgba(246,241,227,0.55)',
                }}
            >
                {seg('藏书', stats.total, {
                    accent: true,
                    title: '近 7 日入库',
                    pop: <>近 7 日入库 · {stats.addedLast7Days} 本</>,
                })}
                {dot}
                {seg('在读', stats.reading, {
                    title: '正在阅读的书',
                    pop:
                        stats.continueReading.length > 0 ? (
                            <span className='flex flex-col gap-1'>
                                <span className='mb-0.5 text-[#7A8FB6]'>正在阅读</span>
                                {stats.continueReading.map((b) => (
                                    <span key={b.hash} className='flex items-baseline gap-2'>
                                        <span className='max-w-[160px] truncate'>《{b.title}》</span>
                                        <span className='text-[#FFC971]'>
                                            {getBookProgressPercentage(b)}%
                                        </span>
                                    </span>
                                ))}
                            </span>
                        ) : (
                            '暂无在读'
                        ),
                })}
                {dot}
                {seg('未读', stats.unread, {
                    title: '下一本',
                    pop: stats.nextTitle ? <>下一本 ·《{stats.nextTitle}》</> : '还没有待读的书',
                })}
                {dot}
                {seg('读完', stats.finished, {
                    title: '本月完成',
                    pop: <>本月完成 · {stats.finishedThisMonth} 本</>,
                })}
                {dot}
                {seg('累计', totalReadHours.toFixed(1) + ' 时', {
                    accent: true,
                    title: '最近在读时长',
                    pop:
                        stats.continueReading.length > 0 ? (
                            <span className='flex flex-col gap-1'>
                                <span className='mb-0.5 text-[#7A8FB6]'>最近在读</span>
                                {stats.continueReading.map((b) => (
                                    <span key={b.hash} className='flex items-baseline gap-2'>
                                        <span className='max-w-[160px] truncate'>《{b.title}》</span>
                                        <span className='text-[#FFC971]'>
                                            {formatDurationMs(b.totalReadTimeMs || 0)}
                                        </span>
                                    </span>
                                ))}
                            </span>
                        ) : (
                            '暂无记录'
                        ),
                })}
                {dot}
                {seg('阅读日', totalReadDays, {
                    title: '上次阅读',
                    pop: <>上次阅读 · {lastReadLabel}</>,
                })}
                {dot}
                {seg('笔记', stats.totalAnnotations, {
                    title: '笔记拾遗',
                    pop: activeReview ? (
                        <span className='flex flex-col gap-1'>
                            <span className='text-[#7A8FB6]'>《{activeReview.book.title}》</span>
                            <span className='max-w-[240px] truncate'>
                                {activeReview.note.note || activeReview.note.text || ''}
                            </span>
                        </span>
                    ) : (
                        '暂无笔记'
                    ),
                })}
                {stats.continueReading[0] && (
                    <button
                        type='button'
                        onClick={() => openBook(stats.continueReading[0]!)}
                        className='max-w-[240px] truncate text-[#F5A623] hover:text-[#FFC971]'
                        title={stats.continueReading[0].title}
                    >
                        继续《{stats.continueReading[0].title}》→
                    </button>
                )}
                <span
                    aria-hidden='true'
                    className='ml-auto inline-block h-2 w-2 rotate-45'
                    style={{
                        background: '#F5A623',
                        boxShadow: '0 0 8px rgba(245,166,35,0.5)',
                    }}
                />
            </div>

            {/* Iron hairline */}
            <div className='h-px w-full' style={{ background: 'rgba(122,143,182,0.22)' }} />
        </div>
    );
};

export default LibraryOverviewBar;
