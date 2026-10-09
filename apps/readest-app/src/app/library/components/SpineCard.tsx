'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Book, BookNote } from '@/types/book';
import { getBookProgressPercentage, getBookReadStatus } from '../utils/libraryUtils';
import { formatDurationMs } from '@/utils/misc';
import { useLibraryStore } from '@/store/libraryStore';

interface SpineCardProps {
  book: Book | null;
  spineEl: HTMLElement | null;
  onCardEnter?: () => void;
  onCardLeave?: () => void;
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

const SpineCard: React.FC<SpineCardProps> = ({ book, spineEl, onCardEnter, onCardLeave }) => {
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

  // 信息对数组——每 2 对并排一行
  const pairs: [string, string][] = [];
  if (status === 'reading') {
    pairs.push(['卷 页', `p.${progress[0]}/${progress[1] || '?'} <em>· ${pct}%</em>`]);
    pairs.push(['阅 时', formatDurationMs(book.totalReadTimeMs || 0)]);
    pairs.push(['上 次', book.lastReadAt ? new Date(book.lastReadAt).toLocaleDateString('zh-CN') : '—']);
    if (book.groupName) pairs.push(['架 位', book.groupName]);
  } else if (status === 'finished') {
    pairs.push(['卷 页', `全 ${progress[1] || '?'} 页`]);
    pairs.push(['阅 时', formatDurationMs(book.totalReadTimeMs || 0)]);
    pairs.push(['读 程', `${formatDate(book.lastReadAt)} → ${formatDate(book.finishedAt)}`]);
    if (book.groupName) pairs.push(['架 位', book.groupName]);
  } else {
    pairs.push(['卷 页', `${progress[1] || '?'} 页`]);
    pairs.push(['入 藏', formatDate(book.createdAt)]);
    if (book.groupName) pairs.push(['架 位', book.groupName]);
  }
  if (book.format) pairs.push(['格 式', book.format]);
  if (annotationCount > 0) pairs.push(['批 注', `¶ ${annotationCount} 则`]);
  if (book.isFavorite) pairs.push(['钤 印', '★ 收藏']);

  // 组装成 HTML——每行 2 组键值对并排
  const rows: string[] = [];
  for (let i = 0; i < pairs.length; i += 2) {
    const rowPairs = pairs.slice(i, i + 2);
    let rowHtml = '';
    for (const [k, v] of rowPairs) {
      rowHtml += `<span class="k">${k}</span><span class="v">${v}</span>`;
    }
    // 奇数个时补一个空占位保持对齐
    if (rowPairs.length === 1) rowHtml += `<span class="k"></span><span class="v"></span>`;
    rows.push(rowHtml);
  }

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
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
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
