'use client';

import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useBookDataStore } from '@/store/bookDataStore';
import { Book, BookNote } from '@/types/book';
import { navigateToReader } from '@/utils/nav';
import { eventDispatcher } from '@/utils/event';
import AnnotationsHeader from './components/AnnotationsHeader';
import CompactListView from './components/CompactListView';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

interface BookWithNotes extends Book {
    notes: BookNote[];
    config?: any;
}

const AnnotationsPage: React.FC = () => {
    const _ = useTranslation();
    const router = useRouter();
    const { envConfig, appService } = useEnv();
    const { library } = useLibraryStore();
    const { safeAreaInsets } = useThemeStore();
    const { getConfig } = useBookDataStore();
    const [booksWithNotes, setBooksWithNotes] = useState<BookWithNotes[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<'all' | 'annotation' | 'excerpt'>('all');
    const [sortBy, setSortBy] = useState<'date' | 'book'>('date');
    const [selectedBookHash, setSelectedBookHash] = useState<'all' | string>('all');
    const [loading, setLoading] = useState(true);

    // 确保进入页面时主题已正确应用
    useEffect(() => {
        if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
            const themeMode = localStorage.getItem('themeMode');
            const themeColor = localStorage.getItem('themeColor');
            if (themeMode && themeColor) {
                const systemIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDarkMode = themeMode === 'dark' || (themeMode === 'auto' && systemIsDarkMode);
                const theme = `${themeColor}-${isDarkMode ? 'dark' : 'light'}`;
                document.documentElement.setAttribute('data-theme', theme);
            }
        }
    }, []);

    useEffect(() => {
        const loadAnnotations = async () => {
            console.log('[Annotations] loadAnnotations triggered');

            if (!appService || !envConfig) {
                console.log('[Annotations] appService or envConfig not ready');
                setLoading(false);
                return;
            }

            setLoading(true);

            try {
                console.log('[Annotations] Reading notes from JSON file directly...');

                // 直接读取 note.json，不依赖 library 加载
                const notesService = await import('@/services/notesService');
                const allNotes = await notesService.loadAllNotes(envConfig);

                console.log('[Annotations] Loaded notes:', allNotes?.books ? Object.keys(allNotes.books).length : 0, 'books');

                if (!allNotes || !allNotes.books) {
                    console.log('[Annotations] No notes data available');
                    setLoading(false);
                    return;
                }

                // 从 library 获取书籍信息（可能还在加载中）
                const currentLibrary = library || [];
                console.log('[Annotations] Current library:', currentLibrary.length, 'books');

                const booksData: BookWithNotes[] = [];

                // 遍历 notes.json 中的所有书籍
                for (const [bookHash, bookEntry] of Object.entries(allNotes.books)) {
                    const notes = (bookEntry.notes || []).filter(
                        (note: BookNote) => !note.deletedAt && (note.note || note.text),
                    );

                    if (notes.length === 0) continue;

                    // 尝试从 library 中找到对应的书籍
                    let book = currentLibrary.find((b) => b.hash === bookHash);

                    // 如果 library 中没找到，使用 notes.json 中存储的信息创建一个临时 book 对象
                    if (!book) {
                        console.log(`[Annotations] Book ${bookHash} not in library, using notes metadata`);
                        book = {
                            hash: bookHash,
                            title: bookEntry.title || 'Unknown Book',
                            author: '',
                            format: 'unknown',
                            relativePath: '',
                            createdAt: Date.now(),
                            updatedAt: Date.now(),
                            progress: 0,
                        } as Book;
                    }

                    if (!book.deletedAt) {
                        console.log(`[Annotations] Book ${book.title}: found ${notes.length} notes`);

                        // 确保 note.json 中的 title 字段被正确保存（如果从 library 获取到书名）
                        if (book.title !== 'Unknown Book' && book.title !== bookEntry.title) {
                            // 异步更新 note.json 中的书名（不影响当前显示）
                            notesService.saveNotesForBook(
                                envConfig,
                                bookHash,
                                notes,
                                book.title,  // 使用 library 中的书名
                                bookEntry.metaHash,
                            ).catch((e) => console.warn(`[Annotations] Failed to update title for ${bookHash}:`, e));
                        }

                        const config = getConfig(`${book.hash}-0`);
                        booksData.push({
                            ...book,
                            notes,
                            config,
                        });
                    }
                }

                console.log('[Annotations] Final booksData:', booksData.length, 'books with notes');
                setBooksWithNotes(booksData);
            } catch (error) {
                console.error('[Annotations] Failed to load annotations:', error);
                eventDispatcher.dispatch('toast', {
                    type: 'error',
                    message: _('Failed to load annotations'),
                    timeout: 3000,
                });
            } finally {
                setLoading(false);
            }
        };

        loadAnnotations();
    }, [appService, envConfig, library]);

    const filteredNotes = useMemo(() => {
        let allNotes: Array<{
            book: Book;
            note: BookNote;
        }> = [];

        booksWithNotes.forEach((book) => {
            book.notes.forEach((note) => {
                if (filterType === 'all' || note.type === filterType) {
                    allNotes.push({ book, note });
                }
            });
        });

        // 搜索过滤
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            allNotes = allNotes.filter(
                ({ book, note }) =>
                    book.title.toLowerCase().includes(query) ||
                    book.author?.toLowerCase().includes(query) ||
                    note.text?.toLowerCase().includes(query) ||
                    note.note?.toLowerCase().includes(query),
            );
        }

        // 排序
        if (sortBy === 'date') {
            allNotes.sort((a, b) => b.note.updatedAt - a.note.updatedAt);
        } else if (sortBy === 'book') {
            allNotes.sort((a, b) => {
                const bookCompare = a.book.title.localeCompare(b.book.title);
                if (bookCompare !== 0) return bookCompare;
                return b.note.updatedAt - a.note.updatedAt;
            });
        }

        return allNotes;
    }, [booksWithNotes, searchQuery, filterType, sortBy]);

    const bookFilters = useMemo(() => {
        const map = new Map<string, { hash: string; title: string; count: number }>();
        filteredNotes.forEach(({ book }) => {
            const existing = map.get(book.hash);
            if (existing) {
                existing.count += 1;
            } else {
                map.set(book.hash, { hash: book.hash, title: book.title, count: 1 });
            }
        });
        return Array.from(map.values()).sort((a, b) => b.count - a.count);
    }, [filteredNotes]);

    const displayNotes = useMemo(() => {
        if (sortBy !== 'book' || selectedBookHash === 'all') return filteredNotes;
        return filteredNotes.filter(({ book }) => book.hash === selectedBookHash);
    }, [filteredNotes, sortBy, selectedBookHash]);

    useEffect(() => {
        if (sortBy !== 'book') {
            setSelectedBookHash('all');
        }
    }, [sortBy]);

    useEffect(() => {
        if (sortBy === 'book' && selectedBookHash !== 'all') {
            const exists = bookFilters.some((b) => b.hash === selectedBookHash);
            if (!exists) setSelectedBookHash('all');
        }
    }, [sortBy, selectedBookHash, bookFilters]);

    const handleNavigateToNote = (book: Book, note: BookNote) => {
        const params = new URLSearchParams();
        if (note.cfi) {
            params.set('cfi', note.cfi);
        }
        navigateToReader(router, [book.hash], params.toString());
    };

    const handleDeleteNote = async (book: Book, note: BookNote) => {
        if (!appService) return;

        try {
            const notesService = await import('@/services/notesService');
            const notes = await notesService.getNotesForBook(envConfig, book.hash);
            const noteIndex = notes.findIndex((n: BookNote) => n.id === note.id);

            if (noteIndex !== -1 && notes[noteIndex]) {
                notes[noteIndex]!.deletedAt = Date.now();
                // try to preserve metaHash
                let metaHash: string | undefined;
                try {
                    const cfg = await appService.loadBookConfig(book, {} as any);
                    metaHash = cfg?.metaHash;
                } catch (err) {
                    /* ignore */
                }
                await notesService.saveNotesForBook(envConfig, book.hash, notes, book.title, metaHash);

                // 更新本地状态
                setBooksWithNotes((prev) =>
                    prev
                        .map((b) => {
                            if (b.hash === book.hash) {
                                return {
                                    ...b,
                                    notes: b.notes.filter((n) => n.id !== note.id),
                                };
                            }
                            return b;
                        })
                        .filter((b) => b.notes.length > 0),
                );

                eventDispatcher.dispatch('toast', {
                    type: 'success',
                    message: _('Annotation deleted'),
                    timeout: 2000,
                });
            }
        } catch (error) {
            console.error('Failed to delete annotation:', error);
            eventDispatcher.dispatch('toast', {
                type: 'error',
                message: _('Failed to delete annotation'),
                timeout: 3000,
            });
        }
    };

    const totalCount = displayNotes.length;
    const annotationCount = displayNotes.filter((item) => item.note.type === 'annotation').length;
    const excerptCount = displayNotes.filter((item) => item.note.type === 'excerpt').length;

    const renderContent = () => {
        if (loading) {
            return (
                <div className='flex h-64 items-center justify-center'>
                    <span className='loading loading-spinner loading-lg'></span>
                </div>
            );
        }

        if (displayNotes.length === 0) {
            return (
                <div className='flex h-64 flex-col items-center justify-center text-center'>
                    <p className='text-base-content/60 text-lg'>
                        {searchQuery || filterType !== 'all'
                            ? _('No annotations found')
                            : _('No annotations yet')}
                    </p>
                    <p className='text-base-content/40 mt-2 text-sm'>
                        {_('Start reading and highlight text to create annotations')}
                    </p>
                </div>
            );
        }

        const listContent = (
            <CompactListView
                items={displayNotes}
                onNavigate={handleNavigateToNote}
                sortBy={sortBy}
            />
        );

        if (sortBy !== 'book') return listContent;

        return (
            <div className='flex flex-col gap-4'>
                {/* 小屏书籍筛选栏 */}
                <div className='md:hidden flex items-center gap-1.5 overflow-x-auto pb-2'>
                    <button
                        type='button'
                        onClick={() => setSelectedBookHash('all')}
                        className={clsx(
                            'btn btn-xs whitespace-nowrap font-medium',
                            selectedBookHash === 'all' ? 'btn-primary' : 'btn-ghost'
                        )}
                    >
                        {_('All')} ({filteredNotes.length})
                    </button>
                    {bookFilters.map((book) => (
                        <button
                            key={book.hash}
                            type='button'
                            onClick={() => setSelectedBookHash(book.hash)}
                            className={clsx(
                                'btn btn-xs whitespace-nowrap font-medium',
                                selectedBookHash === book.hash ? 'btn-primary' : 'btn-ghost'
                            )}
                        >
                            <span className='truncate max-w-xs'>{book.title}</span>
                            <span className='text-xs opacity-80'>({book.count})</span>
                        </button>
                    ))}
                </div>

                <div className='flex gap-4 justify-center'>
                    {/* 大屏书籍筛选栏 */}
                    <aside className='hidden md:block w-56 flex-shrink-0'>
                        <div className='sticky top-4 space-y-2'>
                            <button
                                type='button'
                                onClick={() => setSelectedBookHash('all')}
                                className={clsx(
                                    'btn btn-sm w-full justify-start h-auto py-2',
                                    selectedBookHash === 'all' ? 'btn-primary' : 'btn-ghost'
                                )}
                            >
                                {_('All')} ({filteredNotes.length})
                            </button>
                            {bookFilters.map((book) => (
                                <button
                                    key={book.hash}
                                    type='button'
                                    onClick={() => setSelectedBookHash(book.hash)}
                                    className={clsx(
                                        'btn btn-sm w-full justify-between items-center flex-nowrap h-auto py-2 px-3',
                                        selectedBookHash === book.hash ? 'btn-primary' : 'btn-ghost'
                                    )}
                                >
                                    <span className='flex items-center gap-2 min-w-0 flex-1'>
                                        <span className='h-2 w-2 flex-shrink-0 rounded-full bg-primary/60' />
                                        <span className='truncate'>{book.title}</span>
                                    </span>
                                    <span className='ml-2 flex-shrink-0 text-xs opacity-70 whitespace-nowrap'>({book.count})</span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    <div className='flex-1 min-w-0 max-w-4xl w-full'>{listContent}</div>
                </div>
            </div>
        );
    };

    return (
        <div className='flex h-screen w-full flex-col'>
            <AnnotationsHeader
                searchQuery={searchQuery}
                filterType={filterType}
                sortBy={sortBy}
                totalCount={totalCount}
                annotationCount={annotationCount}
                excerptCount={excerptCount}
                onSearchChange={setSearchQuery}
                onFilterChange={setFilterType}
                onSortChange={setSortBy}
            />

            <OverlayScrollbarsComponent
                defer
                className='flex-1'
                options={{
                    scrollbars: { autoHide: 'scroll', autoHideDelay: 600 },
                    overflow: { x: 'hidden' },
                }}
            >
                <div
                    className={clsx(
                        'mx-auto w-full px-4 py-6',
                        sortBy === 'book' ? 'max-w-6xl' : 'max-w-5xl'
                    )}
                    style={{
                        paddingBottom: `${(safeAreaInsets?.bottom || 0) + 24}px`,
                    }}
                >
                    {renderContent()}
                </div>
            </OverlayScrollbarsComponent>
        </div>
    );
};

export default AnnotationsPage;
