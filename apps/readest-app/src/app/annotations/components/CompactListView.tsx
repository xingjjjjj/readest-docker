'use client';

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { MdBookmark } from 'react-icons/md';
import { Book, BookNote } from '@/types/book';
import { HIGHLIGHT_COLOR_HEX } from '@/services/constants';

// 添加时间轴动画样式
const timelineStyles = `
@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);
    }
}

@keyframes timeline-flow {
    0% {
        background: linear-gradient(to bottom, rgba(219, 234, 254, 0), rgba(147, 197, 253, 0.3), rgba(219, 234, 254, 0));
    }
    50% {
        background: linear-gradient(to bottom, rgba(219, 234, 254, 0), rgba(96, 165, 250, 0.5), rgba(219, 234, 254, 0));
    }
    100% {
        background: linear-gradient(to bottom, rgba(219, 234, 254, 0), rgba(147, 197, 253, 0.3), rgba(219, 234, 254, 0));
    }
}

.timeline-node {
    animation: pulse-glow 2s infinite;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.timeline-node:hover {
    transform: scale(1.4);
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.2);
}

.timeline-line {
    animation: timeline-flow 4s ease-in-out infinite;
}

.timeline-date-label {
    animation: fadeInUp 0.6s ease-out backwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.annotation-item {
    animation: slideIn 0.4s ease-out backwards;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-12px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
`;

// 将样式注入到 DOM
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = timelineStyles;
    if (!document.head.querySelector('style[data-timeline]')) {
        styleSheet.setAttribute('data-timeline', 'true');
        document.head.appendChild(styleSheet);
    }
}

interface CompactListViewProps {
    items: Array<{ book: Book; note: BookNote }>;
    onNavigate: (book: Book, note: BookNote) => void;
    sortBy: 'date' | 'book';
}

const CompactListView: React.FC<CompactListViewProps> = ({ items, onNavigate, sortBy }) => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
    const [containerHeight, setContainerHeight] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const palette = Object.values(HIGHLIGHT_COLOR_HEX);

    useEffect(() => {
        if (containerRef.current) {
            const observer = new ResizeObserver(() => {
                setContainerHeight(containerRef.current?.scrollHeight || 0);
            });
            observer.observe(containerRef.current);
            setContainerHeight(containerRef.current.scrollHeight);
            return () => {
                observer.disconnect();
            };
        }
        return undefined;
    }, [items]);

    const getHighlightColor = (note: BookNote) => {
        if (!note.color) return undefined;
        return HIGHLIGHT_COLOR_HEX[note.color];
    };

    const toggleExpanded = (key: string) => {
        setExpandedKeys((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    const getBookColor = (hash: string) => {
        if (!hash || palette.length === 0) return '#d1d5db';
        let sum = 0;
        for (let i = 0; i < hash.length; i += 1) {
            sum += hash.charCodeAt(i);
        }
        return palette[sum % palette.length] || '#d1d5db';
    };

    return (
        <div className='relative'>
            <div className='space-y-3' ref={containerRef}>
                {/* 动态时间轴线 */}
                <div
                    className='pointer-events-none absolute left-0 top-0 w-1 timeline-line'
                    style={{
                        height: containerHeight ? `${containerHeight}px` : '0px',
                        background: sortBy === 'date'
                            ? 'linear-gradient(to bottom, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.4), rgba(59, 130, 246, 0.2))'
                            : 'linear-gradient(to bottom, rgba(156, 163, 175, 0.2), rgba(209, 213, 219, 0.4), rgba(156, 163, 175, 0.2))',
                    }}
                />
                {items.map(({ book, note }, index) => {
                    const key = `${book.hash}-${note.id}-${index}`;
                    const color = getHighlightColor(note);
                    const bookColor = getBookColor(book.hash);
                    const originalText = note.text || '';
                    const annotationText = note.note || '';
                    const isLong = originalText.length > 160 || annotationText.length > 120;
                    const isExpanded = expandedKeys.has(key);
                    const isBookSort = sortBy === 'book';
                    const isDateSort = sortBy === 'date';
                    const prev = index > 0 ? items[index - 1] : undefined;
                    const isGroupStart = isBookSort && (!prev || prev.book.hash !== book.hash);
                    const dateKey = dayjs(note.updatedAt).format('YYYY-MM-DD');
                    const prevDateKey = prev ? dayjs(prev.note.updatedAt).format('YYYY-MM-DD') : undefined;
                    const isDateGroupStart = isDateSort && (!prevDateKey || prevDateKey !== dateKey);
                    return (
                        <div
                            key={key}
                            onClick={() => onNavigate(book, note)}
                            className={clsx(
                                'group rounded-lg border border-base-300/50 bg-base-100/80 backdrop-blur-sm',
                                'p-3 cursor-pointer transition-all duration-300 annotation-item',
                                'hover:shadow-lg hover:border-base-300 hover:bg-base-100',
                                'hover:translate-x-1'
                            )}
                        >
                            <div className='flex items-start gap-3'>
                                {/* 左侧时间轴节点（独立式） */}
                                <div className='relative flex-shrink-0 w-8'>
                                    {isDateSort && isDateGroupStart && (
                                        <div className={clsx(
                                            'mb-2 text-[10px] font-bold text-primary timeline-date-label',
                                            'tracking-wide uppercase'
                                        )}>
                                            {dayjs(note.updatedAt).format('MM-DD')}
                                        </div>
                                    )}
                                    <div
                                        className={clsx(
                                            'timeline-node mx-auto mt-1 border-2 rounded-full transition-all duration-300',
                                            isBookSort ? 'border-transparent' : 'border-base-300'
                                        )}
                                        style={{
                                            width: isDateSort && isDateGroupStart ? '12px' : '8px',
                                            height: isDateSort && isDateGroupStart ? '12px' : '8px',
                                            backgroundColor: isBookSort ? bookColor : '#3b82f6',
                                            boxShadow: isDateSort && isDateGroupStart
                                                ? '0 0 12px rgba(59, 130, 246, 0.4)'
                                                : 'none',
                                        }}
                                    />
                                </div>

                                {/* 颜色标记 */}
                                <div
                                    className='flex-shrink-0 w-1.5 h-full rounded-full transition-all duration-300 group-hover:w-2'
                                    style={{
                                        backgroundColor: color || '#d1d5db',
                                        minHeight: '60px',
                                        boxShadow: `0 0 12px ${color ? color + '40' : '#d1d5db40'}`,
                                    }}
                                />

                                {/* 主要内容 */}
                                <div className='flex-1 min-w-0'>
                                    <div className='flex items-center gap-2 mb-1'>
                                        <MdBookmark
                                            size={14}
                                            className='text-base-content/40 flex-shrink-0'
                                        />
                                        <span className='text-base-content/70 text-xs font-medium truncate'>
                                            {book.title}
                                        </span>
                                    </div>

                                    {(originalText || isLong) && (
                                        <div className='relative'>
                                            <p
                                                className={clsx(
                                                    'text-base-content/90 text-sm leading-relaxed',
                                                    !isExpanded && 'line-clamp-2',
                                                    !isExpanded && isLong && 'pr-10'
                                                )}
                                            >
                                                {originalText}
                                                {isExpanded && isLong && (
                                                    <button
                                                        type='button'
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            toggleExpanded(key);
                                                        }}
                                                        className='ml-2 inline-flex text-primary text-xs hover:underline align-baseline'
                                                    >
                                                        收起
                                                    </button>
                                                )}
                                            </p>
                                            {!isExpanded && isLong && (
                                                <button
                                                    type='button'
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        toggleExpanded(key);
                                                    }}
                                                    className='absolute bottom-0 right-0 text-primary text-xs hover:underline'
                                                >
                                                    展开
                                                </button>
                                            )}
                                        </div>
                                    )}

                                    {annotationText && (
                                        <div className='mt-2 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/2 px-3 py-2.5 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-sm'>
                                            <p
                                                className={clsx(
                                                    'text-base-content/80 text-xs font-semibold leading-relaxed',
                                                    !isExpanded && 'line-clamp-2'
                                                )}
                                            >
                                                💭 {annotationText}
                                            </p>
                                        </div>
                                    )}

                                    <div className='mt-2.5 flex items-center justify-between gap-2 text-xs'>
                                        <span />
                                        <span className='text-base-content/40 transition-all duration-300 group-hover:text-base-content/60 font-medium'>
                                            {dayjs(note.updatedAt).format('YYYY-MM-DD HH:mm')}
                                        </span>
                                    </div>
                                </div>

                                {/* 类型指示器 */}
                                <div className='flex-shrink-0'>
                                    <div
                                        className={clsx(
                                            'w-2 h-2 rounded-full',
                                            note.type === 'annotation' ? 'bg-primary' : 'bg-secondary'
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CompactListView;
