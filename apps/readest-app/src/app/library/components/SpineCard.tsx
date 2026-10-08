'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

// 统一定位
const placeCard = (cardEl: HTMLElement, spineEl: HTMLElement) => {
  const r = spineEl.getBoundingClientRect();
  const cw = cardEl.offsetWidth;
  let left = Math.min(Math.max(r.left + r.width / 2 - cw / 2, 10), window.innerWidth - cw - 10);

  const availAbove = r.top - 12;
  const availBelow = window.innerHeight - r.bottom - 12;
  const cardHeight = cardEl.offsetHeight;

  let top: number;
  let maxHeight: number | undefined;

  if (cardHeight <= availAbove) {
    top = r.top - cardHeight - 8;
  } else if (cardHeight <= availBelow) {
    top = r.bottom + 8;
  } else {
    if (availAbove >= availBelow) {
      top = 12;
      maxHeight = availAbove - 8;
    } else {
      top = r.bottom + 8;
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

// 从 notesData 同步计算批注信息（不用 useEffect，避免异步竞态）
const getNoteInfo = (book: Book, notesData: any): { note: BookNote | null; count: number } => {
  const notes = notesData?.books?.[book.hash]?.notes;
  if (!notes || notes.length === 0) return { note: null, count: 0 };
  const valid = notes.filter((n: any) => !n.deletedAt && (n.note || n.text));
  const count = notes.filter((n: any) => !n.deletedAt).length;
  if (valid.length === 0) return { note: null, count };
  // 用 hash-based 伪随机（同一次 hover 内稳定，不同书不同结果）
  const seed = book.hash.charCodeAt(0) + book.hash.charCodeAt(1) * 31 + Date.now() % 97;
  return { note: valid[seed % valid.length] as BookNote, count };
};

const SpineCard: React.FC<SpineCardProps> = ({ book, spineEl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { notesData } = useLibraryStore();
  const rafRef = useRef<number>(0);

  // 批注信息：同步计算，随 book/notesData 变化直接更新（无 useEffect 竞态）
  const noteInfo = book ? getNoteInfo(book, notesData) : { note: null, count: 0 };
  const randomNote = noteInfo.note;
  const annotationCount = noteInfo.count;

  // 用 useLayoutEffect：DOM 提交前同步定位，无闪烁、无帧等待
  useLayoutEffect(() => {
    if (book && spineEl) {
      setVisible(true);
      // 单次 rAF：等本帧布局完成后精确测量高度
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (cardRef.current && spineEl) {
          placeCard(cardRef.current, spineEl);
        }
      });
    } else {
      setVisible(false);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [book, spineEl, randomNote]);

  // scroll 重新定位
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
    rows.push(`<span class="k">卷 页</span><span class="v">p.${progress[0]}/${progress[1] || '?'} <em>· ${pct}%</em></span>`);
    rows.push(`<span class="k">上 次</span><span class="v">${book.lastReadAt ? new Date(book.lastReadAt).toLocaleDateString('zh-CN') : '—'}</span>`);
    rows.push(`<span class="k">阅 时</span><span class="v">${formatDurationMs(book.totalReadTimeMs || 0)}</span>`);
  } else if (status === 'finished') {
    rows.push(`<span class="k">卷 页</span><span class="v">全 ${progress[1] || '?'} 页</span>`);
    rows.push(`<span class="k">读 程</span><span class="v">${formatDate(book.lastReadAt)} → ${formatDate(book.finishedAt)}</span>`);
    rows.push(`<span class="k">阅 时</span><span class="v">${formatDurationMs(book.totalReadTimeMs || 0)}</span>`);
  } else {
    rows.push(`<span class="k">卷 页</span><span class="v">${progress[1] || '?'} 页</span>`);
    rows.push(`<span class="k">入 藏</span><span class="v">${formatDate(book.createdAt)}</span>`);
  }
  if (book.groupName) rows.push(`<span class="k">架 位</span><span class="v">${book.groupName}</span>`);
  if (book.format) rows.push(`<span class="k">格 式</span><span class="v">${book.format}</span>`);
  if (annotationCount > 0) rows.push(`<span class="k">批 注</span><span class="v">¶ ${annotationCount} 则</span>`);
  if (book.isFavorite) rows.push(`<span class="k">钤 印</span><span class="v">★</span>`);

  const quoteHtml = randomNote ? `
    <div class="cc-quote">
      <div class="qt">❝ ${(randomNote.text || randomNote.note || '').slice(0, 50)}${(randomNote.text || randomNote.note || '').length > 50 ? '…' : ''} ❞</div>
      ${randomNote.note ? `<div class="cc-note-text">${randomNote.note.slice(0, 40)}${randomNote.note.length > 40 ? '…' : ''}</div>` : ''}
      <span class="qs">— ch.${randomNote.cfi?.match(/\/(\d+)!/)?.[1] || '?'} · ${formatDate(randomNote.updatedAt || randomNote.createdAt)}</span>
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
        <span className='cc-rating'>{pct > 0 ? `${pct}%` : '—'}</span>
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
