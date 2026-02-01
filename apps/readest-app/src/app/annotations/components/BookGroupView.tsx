'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { Book, BookNote } from '@/types/book';
import BookCover from '@/components/BookCover';
import AnnotationCard from './AnnotationCard';

interface BookGroup {
    book: Book;
    notes: BookNote[];
    config?: any;
}

interface BookGroupViewProps {
    groups: BookGroup[];
    onNavigate: (book: Book, note: BookNote) => void;
    onDelete: (book: Book, note: BookNote) => void;
}

const BookGroupView: React.FC<BookGroupViewProps> = ({ groups, onNavigate, onDelete }) => {
    const [expandedBooks, setExpandedBooks] = useState<Set<string>>(new Set(groups.map(g => g.book.hash)));

    const toggleBook = (hash: string) => {
        setExpandedBooks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(hash)) {
                newSet.delete(hash);
            } else {
                newSet.add(hash);
            }
            return newSet;
        });
    };

    return (
        <div className='space-y-6'>
            {groups.map((group) => {
                const isExpanded = expandedBooks.has(group.book.hash);
                return (
                    <div
                        key={group.book.hash}
                        className={clsx(
                            'bg-base-100 rounded-xl border border-base-300/50 overflow-hidden',
                            'transition-all duration-300 hover:shadow-lg'
                        )}
                    >
                        {/* 书籍头部 */}
                        <button
                            onClick={() => toggleBook(group.book.hash)}
                            className={clsx(
                                'w-full flex items-center gap-4 p-4 text-left',
                                'bg-gradient-to-r from-base-200/50 to-base-100',
                                'hover:from-base-200 hover:to-base-100/50',
                                'transition-all duration-200'
                            )}
                        >
                            <div className='flex-shrink-0'>
                                <BookCover
                                    book={group.book}
                                    mode='grid'
                                    className='h-20 w-14 rounded shadow-md'
                                />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-base-content text-lg font-semibold mb-1 truncate'>
                                    {group.book.title}
                                </h3>
                                {group.book.author && (
                                    <p className='text-base-content/60 text-sm mb-2 truncate'>
                                        {group.book.author}
                                    </p>
                                )}
                                <div className='flex items-center gap-2'>
                                    <span className='badge badge-primary badge-sm'>
                                        {group.notes.length} 条笔记
                                    </span>
                                </div>
                            </div>
                            <div className='flex-shrink-0'>
                                {isExpanded ? (
                                    <MdExpandLess size={24} className='text-base-content/60' />
                                ) : (
                                    <MdExpandMore size={24} className='text-base-content/60' />
                                )}
                            </div>
                        </button>

                        {/* 笔记列表 */}
                        {isExpanded && (
                            <div className='p-4 pt-0 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300'>
                                {group.notes.map((note, index) => (
                                    <AnnotationCard
                                        key={`${note.id}-${index}`}
                                        book={group.book}
                                        note={note}
                                        onNavigate={() => onNavigate(group.book, note)}
                                        onDelete={() => onDelete(group.book, note)}
                                        compact
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default BookGroupView;
