'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { marked } from 'marked';
import { MdDelete, MdBook } from 'react-icons/md';
import { Book, BookNote } from '@/types/book';
import { useTranslation } from '@/hooks/useTranslation';
import { HIGHLIGHT_COLOR_HEX } from '@/services/constants';
import { useSettingsStore } from '@/store/settingsStore';
import BookCover from '@/components/BookCover';

interface AnnotationCardProps {
    book: Book;
    note: BookNote;
    onNavigate: () => void;
    onDelete: () => void;
    compact?: boolean;
}

const AnnotationCard: React.FC<AnnotationCardProps> = ({ book, note, onNavigate, onDelete, compact = false }) => {
    const _ = useTranslation();
    const { settings } = useSettingsStore();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const getHighlightColor = () => {
        if (!note.color) return undefined;
        return HIGHLIGHT_COLOR_HEX[note.color];
    };

    const getStyleClass = () => {
        if (!note.style) return '';
        switch (note.style) {
            case 'underline':
                return 'underline decoration-2';
            case 'squiggly':
                return 'underline decoration-wavy decoration-2';
            default:
                return '';
        }
    };

    const handleDelete = () => {
        if (showDeleteConfirm) {
            onDelete();
            setShowDeleteConfirm(false);
        } else {
            setShowDeleteConfirm(true);
            setTimeout(() => setShowDeleteConfirm(false), 3000);
        }
    };

    const renderNoteContent = () => {
        if (note.note) {
            try {
                const html = marked.parse(note.note, { async: false }) as string;
                return <div className='prose prose-sm' dangerouslySetInnerHTML={{ __html: html }} />;
            } catch {
                return <p className='text-base-content/90 text-sm'>{note.note}</p>;
            }
        }
        return null;
    };

    return (
        <div
            className={clsx(
                'bg-base-100 group relative rounded-xl border transition-all duration-200',
                'border-base-300/50 cursor-pointer',
                'hover:shadow-xl hover:scale-[1.01] hover:border-base-300',
                compact ? 'p-3' : 'p-4',
            )}
            onClick={onNavigate}
            style={{
                borderLeftColor: getHighlightColor(),
                borderLeftWidth: getHighlightColor() ? '4px' : undefined,
            }}
        >
            {/* 书籍信息 */}
            {!compact && (
                <div className='mb-3 flex items-start gap-3'>
                    <div className='flex-shrink-0'>
                        <BookCover
                            book={book}
                            mode='grid'
                            className='h-16 w-12 rounded shadow-md transition-transform group-hover:scale-105'
                        />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <div className='flex items-center gap-2'>
                            <MdBook className='text-base-content/60 flex-shrink-0' size={16} />
                            <h3 className='text-base-content truncate font-semibold'>{book.title}</h3>
                        </div>
                        {book.author && (
                            <p className='text-base-content/60 mt-1 truncate text-sm'>{book.author}</p>
                        )}
                        <div className='mt-2 flex items-center gap-2 text-xs'>
                            <span
                                className={clsx(
                                    'badge badge-sm',
                                    note.type === 'annotation' ? 'badge-primary' : 'badge-secondary',
                                )}
                            >
                                {note.type === 'annotation' ? _('Annotation') : _('Excerpt')}
                            </span>
                            <span className='text-base-content/50'>
                                {dayjs(note.updatedAt).format('YYYY-MM-DD HH:mm')}
                            </span>
                        </div>
                    </div>

                    {/* 删除按钮 */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete();
                        }}
                        className={clsx(
                            'btn btn-ghost btn-sm opacity-0 group-hover:opacity-100 transition-all duration-200',
                            showDeleteConfirm && 'btn-error opacity-100 scale-110',
                        )}
                        title={showDeleteConfirm ? _('Click again to confirm') : _('Delete')}
                    >
                        <MdDelete size={18} />
                    </button>
                </div>
            )}

            {/* 紧凑模式下的简化信息 */}
            {compact && (
                <div className='mb-2 flex items-center justify-between'>
                    <div className='flex items-center gap-2 min-w-0'>
                        <span
                            className={clsx(
                                'badge badge-xs',
                                note.type === 'annotation' ? 'badge-primary' : 'badge-secondary',
                            )}
                        />
                        <span className='text-base-content/50 text-xs truncate'>
                            {dayjs(note.updatedAt).format('MM/DD HH:mm')}
                        </span>
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete();
                        }}
                        className={clsx(
                            'btn btn-ghost btn-xs opacity-0 group-hover:opacity-100 transition-opacity',
                            showDeleteConfirm && 'btn-error opacity-100',
                        )}
                    >
                        <MdDelete size={16} />
                    </button>
                </div>
            )}

            {/* 高亮文本 */}
            {note.text && (
                <div className={compact ? 'mb-2' : 'mb-3'}>
                    <blockquote
                        className={clsx(
                            'border-l-4 pl-3 py-2 rounded-r-md transition-colors',
                            note.style === 'highlight' ? 'bg-opacity-20' : '',
                            getStyleClass(),
                        )}
                        style={{
                            borderColor: getHighlightColor(),
                            backgroundColor:
                                note.style === 'highlight' && getHighlightColor()
                                    ? `${getHighlightColor()}15`
                                    : undefined,
                            textDecorationColor: getHighlightColor(),
                        }}
                    >
                        <p className={clsx(
                            'text-base-content/90 leading-relaxed',
                            compact ? 'text-sm' : 'text-base'
                        )}>
                            {note.text}
                        </p>
                    </blockquote>
                </div>
            )}

            {/* 笔记内容 */}
            {note.note && (
                <div className={clsx(
                    'bg-gradient-to-r from-base-200/30 to-base-200/10 rounded-lg p-3',
                    'border-l-2 border-primary/30'
                )}>
                    {renderNoteContent()}
                </div>
            )}

            {/* 装饰性渐变效果 */}
            <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-base-200/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl' />
        </div>
    );
};

export default AnnotationCard;
