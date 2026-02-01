'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';
import { Book, BookNote } from '@/types/book';
import { navigateToReader } from '@/utils/nav';
import { eventDispatcher } from '@/utils/event';
import AnnotationsHeader from './components/AnnotationsHeader';
import AnnotationCard from './components/AnnotationCard';
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
    const [booksWithNotes, setBooksWithNotes] = useState<BookWithNotes[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<'all' | 'annotation' | 'excerpt'>('all');
    const [sortBy, setSortBy] = useState<'date' | 'book'>('date');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAnnotations = async () => {
            if (!appService) return;
            setLoading(true);

            try {
                const booksData: BookWithNotes[] = [];

                for (const book of library) {
                    if (book.deletedAt) continue;

                    try {
                        const notesService = await import('@/services/notesService');
                        const notes = (await notesService.getNotesForBook(envConfig, book.hash)).filter(
                            (note: BookNote) => !note.deletedAt && (note.note || note.text),
                        );

                        if (notes.length > 0) {
                            booksData.push({
                                ...book,
                                notes,
                                config,
                            });
                        }
                    } catch (error) {
                        console.warn(`Failed to load config for book: ${book.title}`, error);
                    }
                }

                setBooksWithNotes(booksData);
            } catch (error) {
                console.error('Failed to load annotations:', error);
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
    }, [library, appService, _, envConfig]);

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

    const totalCount = filteredNotes.length;
    const annotationCount = filteredNotes.filter((item) => item.note.type === 'annotation').length;
    const excerptCount = filteredNotes.filter((item) => item.note.type === 'excerpt').length;

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
                    className='mx-auto max-w-5xl px-4 py-6'
                    style={{
                        paddingBottom: `${(safeAreaInsets?.bottom || 0) + 24}px`,
                    }}
                >
                    {loading ? (
                        <div className='flex h-64 items-center justify-center'>
                            <span className='loading loading-spinner loading-lg'></span>
                        </div>
                    ) : filteredNotes.length === 0 ? (
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
                    ) : (
                        <div className='space-y-4'>
                            {filteredNotes.map(({ book, note }, index) => (
                                <AnnotationCard
                                    key={`${book.hash}-${note.id}-${index}`}
                                    book={book}
                                    note={note}
                                    onNavigate={() => handleNavigateToNote(book, note)}
                                    onDelete={() => handleDeleteNote(book, note)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </OverlayScrollbarsComponent>
        </div>
    );
};

export default AnnotationsPage;
