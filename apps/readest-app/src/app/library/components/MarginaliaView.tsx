'use client';

import React, { useMemo, useState } from 'react';
import { Book, BookNote } from '@/types/book';
import { useLibraryStore } from '@/store/libraryStore';
import { useRouter } from 'next/navigation';
import { navigateToReader } from '@/utils/nav';
import { useEnv } from '@/context/EnvContext';
import { useSettingsStore } from '@/store/settingsStore';

interface MarginaliaViewProps {
  libraryBooks: Book[];
}

const formatDate = (ts: number) => {
  const d = new Date(ts);
  return `${d.getFullYear().toString().slice(2)}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const extractPageFromCfi = (cfi: string): string => {
  // 从 epubcfi 中提取大概位置信息
  const match = cfi.match(/\/(\d+)!\//);
  if (match) return `ch.${match[1]}`;
  const match2 = cfi.match(/:(\d+),/);
  if (match2) return `pos.${match2[1]}`;
  return '';
};

const renderCover = (book: Book, size: 'lg' | 'sm') => {
  const cls = size === 'lg' ? 'marg-cover' : 'marg-cover';
  const fallbackSize = size === 'lg' ? '7px' : '6px';
  return (
    <div className={cls}>
      {book.coverImageUrl ? (
        <img src={book.coverImageUrl} alt={book.title} />
      ) : (
        <div className='marg-cover-fallback' style={{ fontSize: fallbackSize }}>
          {book.title.slice(0, 4)}
        </div>
      )}
    </div>
  );
};

const MarginaliaView: React.FC<MarginaliaViewProps> = ({ libraryBooks }) => {
  const { notesData } = useLibraryStore();
  const { envConfig } = useEnv();
  const { settings } = useSettingsStore();
  const router = useRouter();
  const [dim, setDim] = useState<'time' | 'book'>('time');

  const handleJumpToBook = async (book: Book, note?: BookNote) => {
    const { updateBook } = useLibraryStore.getState();
    const now = Date.now();
    await updateBook(envConfig, { ...book, lastReadAt: now, updatedAt: now });
    navigateToReader(router, [book.hash]);
  };

  const { items, booksWithAnno } = useMemo(() => {
    const booksByHash = new Map(libraryBooks.map((b) => [b.hash, b]));
    const items: Array<{ book: Book; note: BookNote }> = [];
    if (notesData?.books) {
      for (const [bookHash, entry] of Object.entries(notesData.books)) {
        const book = booksByHash.get(bookHash);
        if (!book) continue;
        const notes = (entry?.notes || []) as BookNote[];
        for (const note of notes) {
          if (note.deletedAt) continue;
          if (!note.note && !note.text) continue;
          items.push({ book, note });
        }
      }
    }
    items.sort((a, b) => (b.note.updatedAt || 0) - (a.note.updatedAt || 0));
    const bookSet = new Set(items.map((it) => it.book.hash));
    return { items, booksWithAnno: bookSet.size };
  }, [libraryBooks, notesData]);

  // 按时间分组
  const timeGroups = useMemo(() => {
    const groups: Record<string, typeof items> = {};
    const order: string[] = [];
    for (const it of items) {
      const ts = it.note.updatedAt || it.note.createdAt || 0;
      const d = new Date(ts);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      if (!groups[key]) { groups[key] = []; order.push(key); }
      groups[key].push(it);
    }
    return { groups, order };
  }, [items]);

  // 按图书分组
  const bookGroups = useMemo(() => {
    const byBook: Record<string, { book: Book; notes: BookNote[] }> = {};
    for (const it of items) {
      if (!byBook[it.book.hash]) byBook[it.book.hash] = { book: it.book, notes: [] };
      byBook[it.book.hash].notes.push(it.note);
    }
    const groups = Object.values(byBook);
    groups.sort((a, b) => b.notes.length - a.notes.length || a.book.title.localeCompare(b.book.title, 'zh'));
    for (const g of groups) {
      g.notes.sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0));
    }
    return groups;
  }, [items]);

  const mn = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];

  const renderExcerptAndNote = (note: BookNote) => (
    <>
      {note.text && <div className='excerpt'>❝ {note.text} ❞</div>}
      {note.note && (
        <div className='user-note'>
          <div className='note-label'>批注</div>
          {note.note}
        </div>
      )}
    </>
  );

  return (
    <div className='marg-view'>
      <div className='marg-subhead'>
        <h2>{dim === 'time' ? '按时间' : '按图书'}</h2>
        <span className='en'>{dim === 'time' ? 'By Date' : 'By Book'}</span>
        <span className='note'>批注与随想，摘自书页边缘——未经誊清，一如当日所见。</span>
        <span className='count'>{items.length} 则批注 · {booksWithAnno} 册</span>
      </div>

      {/* 维度切换 */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          className={`morgan-sort-btn${dim === 'time' ? ' active' : ''}`}
          onClick={() => setDim('time')}
        >
          按 时 间
        </button>
        <button
          className={`morgan-sort-btn${dim === 'book' ? ' active' : ''}`}
          onClick={() => setDim('book')}
        >
          按 图 书
        </button>
      </div>

      {items.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--parchment-dim)', fontStyle: 'italic' }}>
          尚无批注——展卷阅读时的高亮与笔记将在此汇聚。
        </div>
      )}

      {/* 按时间 */}
      {dim === 'time' && items.length > 0 && (
        <div className='marg-timeline'>
          {timeGroups.order.map((key) => {
            const [y, m] = key.split('-');
            const group = timeGroups.groups[key];
            return (
              <div key={key}>
                <div className='marg-tl-month'>
                  {y} 年 {mn[parseInt(m) - 1] || m} 月{' '}
                  <span className='mn-en'>{key}</span>
                  <span className='mn-cnt'>{group.length} 则</span>
                </div>
                {group.map((it, i) => (
                  <div key={i} className='marg-tl-row'>
                    <div className='marg-tl-date'>
                      {formatDate(it.note.updatedAt || it.note.createdAt || 0).slice(3)}
                    </div>
                    <div
                      className='marg-tl-card clickable'
                      onClick={() => handleJumpToBook(it.book, it.note)}
                      title='点击跳转到原文'
                    >
                      {renderCover(it.book, 'lg')}
                      {renderExcerptAndNote(it.note)}
                      <div className='marg-tl-src'>
                        <span className='mb'>《{it.book.title}》 · {it.book.author}</span>
                        <span>
                          {extractPageFromCfi(it.note.cfi || '')}
                          {it.note.style ? ` · ${it.note.style}` : ''}
                          {it.note.color ? ` · ${it.note.color}` : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* 按图书 */}
      {dim === 'book' && items.length > 0 && (
        <div className='marg-bybook'>
          {bookGroups.map((g) => (
            <div key={g.book.hash} className='marg-book-group'>
              <div className='marg-book-head'>
                <span className='bt'>{g.book.title}</span>
                <span className='ba'>{g.book.author}</span>
                <span className='bn'>¶ {g.notes.length}</span>
              </div>
              <div className='marg-book-quotes'>
                {g.notes.map((note, i) => (
                  <div
                    key={i}
                    className='marg-q-item clickable'
                    onClick={() => handleJumpToBook(g.book, note)}
                    title='点击跳转到原文'
                  >
                    {renderCover(g.book, 'sm')}
                    {renderExcerptAndNote(note)}
                    <div className='marg-q-meta'>
                      {extractPageFromCfi(note.cfi || '')}
                      {note.style ? ` · ${note.style}` : ''}
                      {note.color ? ` · ${note.color}` : ''}
                      {' · '}{formatDate(note.updatedAt || note.createdAt || 0)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarginaliaView;
