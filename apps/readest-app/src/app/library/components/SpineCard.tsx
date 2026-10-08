'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Book, BookNote } from '@/types/book';
import { getBookProgressPercentage, getBookReadStatus } from '../utils/libraryUtils';
import { formatDurationMs } from '@/utils/misc';
import { useLibraryStore } from '@/store/libraryStore';

interface SpineCardProps {
  book: Book | null;
  spineEl: HTMLElement | null;
}

const stName = (s: string): [string, string] => {
  switch (s) {
    case 'reading': return ['在 读', 'sr'];
    case 'finished': return ['已 读', 'sd'];
    case 'unread': return ['未 读', 'su'];
    default: return ['—', 'ss'];
  }
};

const formatDate = (ts?: number) => {
  if (!ts) return '—';
  const d = new Date(ts);
  return `${d.getFullYear().toString().slice(2)}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// 统一定位计算函数
const placeCard = (cardEl: HTMLElement, spineEl: HTMLElement) => {
  const r = spineEl.getBoundingClientRect();
  const cw = cardEl.offsetWidth;
  let left = Math.min(Math.max(r.left + r.width / 2 - cw / 2, 10), window.innerWidth - cw - 10);

  const availAbove = r.top - 16;
  const availBelow = window.innerHeight - r.bottom - 16;
  const cardHeight = cardEl.offsetHeight;

  let top: number;
  let maxHeight: number | undefined;

  if (cardHeight <= availAbove) {
    // 上方放得下
    top = r.top - cardHeight - 12;
  } else if (cardHeight <= availBelow) {
    // 下方放得下
    top = r.bottom + 12;
  } else {
    // 都放不下——选空间较大的一侧，限制高度并滚动
    if (availAbove >= availBelow) {
      top = 16;
      maxHeight = availAbove - 8;
    } else {
      top = r.bottom + 12;
      maxHeight = availBelow - 8;
    }
  }

  cardEl.style.left = `${left}px`;
  cardEl.style.top = `${top}px`;
  if (maxHeight !== undefined) {
    cardEl.style.maxHeight = `${maxHeight}px`;
    cardEl.style.overflowY = 'auto';
  } else {
    cardEl.style.maxHeight = '';
    cardEl.style.overflowY = '';
  }
};

const SpineCard: React.FC<SpineCardProps> = ({ book, spineEl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { notesData } = useLibraryStore();
  const [randomNote, setRandomNote] = useState<BookNote | null>(null);
  const [annotationCount, setAnnotationCount] = useState(0);
  // 用 ref 跟踪当前 book，避免快速 hover 切换时的竞态
  const bookRef = useRef<Book | null>(null);
  bookRef.current = book;

  // 计算 book 的批注信息（同步，不用 useEffect）
  useEffect(() => {
    if (!book) {
      setRandomNote(null);
      setAnnotationCount(0);
      return;
    }
    const bookNotes = notesData?.books?.[book.hash]?.notes;
    if (!bookNotes || bookNotes.length === 0) {
      setRandomNote(null);
      setAnnotationCount(0);
      return;
    }
    const validNotes = bookNotes.filter((n: any) => !n.deletedAt && (n.note || n.text));
    setAnnotationCount(bookNotes.filter((n: any) => !n.deletedAt).length);
    if (validNotes.length === 0) {
      setRandomNote(null);
      return;
    }
    setRandomNote(validNotes[Math.floor(Math.random() * validNotes.length)] as BookNote);
  }, [book, notesData]);

  // 定位：book 或 randomNote 变化时都重新定位
  // 用双重 rAF 确保批注 DOM 已渲染
  useEffect(() => {
    if (book && spineEl) {
      setVisible(true);
      // 第一帧：React 提交 DOM
      requestAnimationFrame(() => {
        // 第二帧：浏览器布局完成
        requestAnimationFrame(() => {
          if (cardRef.current && spineEl && bookRef.current === book) {
            placeCard(cardRef.current, spineEl);
          }
        });
      });
    } else {
      setVisible(false);
    }
  }, [book, spineEl, randomNote]);

  useEffect(() => {
    if (!visible || !spineEl) return;
    const onScroll = () => {
      if (cardRef.current && spineEl) {
        placeCard(cardRef.current, spineEl);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible, spineEl]);

  if (!book) return <div ref={cardRef} className='cat-card' />;

  const status = getBookReadStatus(book);
  const [stLabel, stClass] = stName(status);
  const pct = getBookProgressPercentage(book);
  const progress = book.progress || [0, 0];

  const rows: string[] = [];
  if (status === 'reading') {
    rows.push(`<span class="k">卷 页</span><span class="v">p.${progress[0]} / ${progress[1] || '?'} <em>· ${pct}%</em></span>`);
    rows.push(`<span class="k">上 次</span><span class="v">${book.lastReadAt ? new Date(book.lastReadAt).toLocaleString('zh-CN') : '—'}</span>`);
    rows.push(`<span class="k">阅 时</span><span class="v">${formatDurationMs(book.totalReadTimeMs || 0)}</span>`);
    rows.push(`<span class="k">阅 读 日</span><span class="v">${book.readingDays || 0} 日</span>`);
  } else if (status === 'finished') {
    rows.push(`<span class="k">卷 页</span><span class="v">全 ${progress[1] || book.metadata?.published || '?'} 页</span>`);
    rows.push(`<span class="k">读 程</span><span class="v">${formatDate(book.lastReadAt)} → ${formatDate(book.finishedAt)}</span>`);
    rows.push(`<span class="k">阅 时</span><span class="v">${formatDurationMs(book.totalReadTimeMs || 0)}</span>`);
    rows.push(`<span class="k">阅 读 日</span><span class="v">${book.readingDays || 0} 日</span>`);
  } else {
    rows.push(`<span class="k">卷 页</span><span class="v">${progress[1] || '?'} 页 · 未启卷</span>`);
    rows.push(`<span class="k">入 藏</span><span class="v">${formatDate(book.createdAt)}</span>`);
  }
  if (book.groupName) rows.push(`<span class="k">架 位</span><span class="v">${book.groupName}</span>`);
  if (book.format) rows.push(`<span class="k">格 式</span><span class="v">${book.format}</span>`);
  if (annotationCount > 0) rows.push(`<span class="k">批 注</span><span class="v">¶ ${annotationCount} 则</span>`);
  if (book.isFavorite) rows.push(`<span class="k">钤 印</span><span class="v">★ 收藏</span>`);

  const quoteHtml = randomNote ? `
    <div class="cc-quote">
      <div class="qt">❝ ${(randomNote.text || randomNote.note || '').slice(0, 80)}${(randomNote.text || randomNote.note || '').length > 80 ? '…' : ''} ❞</div>
      ${randomNote.note ? `<div class="cc-note-text">批注：${randomNote.note.slice(0, 60)}${randomNote.note.length > 60 ? '…' : ''}</div>` : ''}
      <span class="qs">— p.${randomNote.cfi?.match(/\/(\d+)!/)?.[1] || '?'} · ${formatDate(randomNote.updatedAt || randomNote.createdAt)}</span>
    </div>
  ` : '';

  return (
    <div
      ref={cardRef}
      className={`cat-card${visible ? ' show' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className='cc-top'>
        <span className={`cc-status ${stClass}`}>{stLabel}</span>
        <span className='cc-rating'>{pct > 0 ? `${pct}%` : '未 评'}</span>
      </div>
      <div className='cc-title'>{book.title}</div>
      <div className='cc-author'>{book.author}</div>
      <div className='cc-rule' />
      <div className='cc-grid' dangerouslySetInnerHTML={{ __html: rows.join('') }} />
      {randomNote && <div dangerouslySetInnerHTML={{ __html: quoteHtml }} />}
      <div className='cc-code'>{book.hash.slice(0, 8).toUpperCase()}</div>
    </div>
  );
};

export default SpineCard;
