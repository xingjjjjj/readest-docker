'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Book } from '@/types/book';
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

const SpineCard: React.FC<SpineCardProps> = ({ book, spineEl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { notesData } = useLibraryStore();

  // 从 notesData 中取该书的批注，随机选一条
  const randomNote = useMemo(() => {
    if (!book || !notesData?.books?.[book.hash]) return null;
    const notes = notesData.books[book.hash].notes;
    if (!notes || notes.length === 0) return null;
    const validNotes = notes.filter((n: any) => !n.deletedAt && (n.note || n.text));
    if (validNotes.length === 0) return null;
    // 随机选一条
    return validNotes[Math.floor(Math.random() * validNotes.length)];
  }, [book, notesData]);

  // 批注总数
  const annotationCount = useMemo(() => {
    if (!book || !notesData?.books?.[book.hash]) return 0;
    const notes = notesData.books[book.hash].notes;
    if (!notes) return 0;
    return notes.filter((n: any) => !n.deletedAt).length;
  }, [book, notesData]);

  useEffect(() => {
    if (book && spineEl) {
      setVisible(true);
      const r = spineEl.getBoundingClientRect();
      if (cardRef.current) {
        const ch = cardRef.current.offsetHeight;
        const cw = cardRef.current.offsetWidth;
        let left = Math.min(Math.max(r.left + r.width / 2 - cw / 2, 10), window.innerWidth - cw - 10);
        let top = r.top - ch - 12;
        if (top < 64) top = r.bottom + 12;
        if (top + ch > window.innerHeight - 10) top = Math.max(64, r.top - ch - 12);
        cardRef.current.style.left = `${left}px`;
        cardRef.current.style.top = `${top}px`;
      }
    } else {
      setVisible(false);
    }
  }, [book, spineEl]);

  // Reposition on scroll
  useEffect(() => {
    if (!visible || !spineEl) return;
    const onScroll = () => {
      if (cardRef.current && spineEl) {
        const r = spineEl.getBoundingClientRect();
        const ch = cardRef.current.offsetHeight;
        const cw = cardRef.current.offsetWidth;
        let left = Math.min(Math.max(r.left + r.width / 2 - cw / 2, 10), window.innerWidth - cw - 10);
        let top = r.top - ch - 12;
        if (top < 64) top = r.bottom + 12;
        if (top + ch > window.innerHeight - 10) top = Math.max(64, r.top - ch - 12);
        cardRef.current.style.left = `${left}px`;
        cardRef.current.style.top = `${top}px`;
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

  // 批注引用块
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
