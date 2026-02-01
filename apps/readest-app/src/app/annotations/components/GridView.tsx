'use client';

import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { Book, BookNote } from '@/types/book';
import { HIGHLIGHT_COLOR_HEX } from '@/services/constants';

interface GridViewProps {
    items: Array<{ book: Book; note: BookNote }>;
    onNavigate: (book: Book, note: BookNote) => void;
}

const GridView: React.FC<GridViewProps> = ({ items, onNavigate }) => {
    const getHighlightColor = (note: BookNote) => {
        if (!note.color) return undefined;
        return HIGHLIGHT_COLOR_HEX[note.color];
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {items.map(({ book, note }, index) => {
                const color = getHighlightColor(note);
                return (
                    <div
                        key={`${book.hash}-${note.id}-${index}`}
                        onClick={() => onNavigate(book, note)}
                        className={clsx(
                            'group relative bg-base-100 rounded-lg border border-base-300/50',
                            'p-4 cursor-pointer transition-all duration-200',
                            'hover:shadow-lg hover:scale-[1.02] hover:border-base-300',
                            'overflow-hidden'
                        )}
                        style={{
                            borderTopColor: color || undefined,
                            borderTopWidth: color ? '3px' : undefined,
                        }}
                    >
                        {/* 类型标签 */}
                        <div className='absolute top-2 right-2'>
                            <span
                                className={clsx(
                                    'badge badge-xs',
                                    note.type === 'annotation' ? 'badge-primary' : 'badge-secondary'
                                )}
                            >
                                {note.type === 'annotation' ? '注解' : '摘录'}
                            </span>
                        </div>

                        {/* 书籍标题 */}
                        <h4 className='text-base-content/80 text-xs font-medium mb-2 pr-12 line-clamp-1'>
                            {book.title}
                        </h4>

                        {/* 笔记文本 */}
                        {note.text && (
                            <p
                                className={clsx(
                                    'text-base-content/90 text-sm mb-3 line-clamp-4',
                                    'leading-relaxed'
                                )}
                            >
                                {note.text}
                            </p>
                        )}

                        {/* 笔记内容 */}
                        {note.note && (
                            <div className='bg-base-200/30 rounded p-2 mb-3'>
                                <p className='text-base-content/80 text-xs line-clamp-2'>
                                    {note.note}
                                </p>
                            </div>
                        )}

                        {/* 时间 */}
                        <div className='text-base-content/50 text-xs'>
                            {dayjs(note.updatedAt).format('MM/DD HH:mm')}
                        </div>

                        {/* Hover 效果 */}
                        <div
                            className='absolute inset-0 bg-gradient-to-t from-base-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default GridView;
