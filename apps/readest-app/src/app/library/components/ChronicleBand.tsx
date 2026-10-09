'use client';

import React, { useMemo } from 'react';
import { Book } from '@/types/book';
import { useLibraryStore } from '@/store/libraryStore';
import { getBookReadStatus } from '../utils/libraryUtils';
import { formatDurationMs } from '@/utils/misc';

interface ChronicleBandProps {
  libraryBooks: Book[];
}

const ChronicleBand: React.FC<ChronicleBandProps> = ({ libraryBooks }) => {
  const { notesData } = useLibraryStore();

  // P8：单遍循环累计全部指标——原先三遍全量遍历，其中 rereads 一遍是算完即弃的死代码
  const stats = useMemo(() => {
    const now = Date.now();
    const dt = new Date(now);
    const monthStart = new Date(dt.getFullYear(), dt.getMonth(), 1).getTime();
    const nextMonthStart = new Date(dt.getFullYear(), dt.getMonth() + 1, 1).getTime();
    const yearStart = new Date(dt.getFullYear(), 0, 1).getTime();

    let monthDone = 0;
    let yearDone = 0;
    let finishedPages = 0;
    let totalReadTimeMs = 0;
    let lastReadAt = 0;

    const uniqueDates = new Set<string>();
    let fallbackMaxDays = 0;

    for (const book of libraryBooks) {
      if (book.deletedAt) continue;
      const status = getBookReadStatus(book);
      if (status === 'finished') {
        if (book.finishedAt && book.finishedAt >= yearStart) yearDone++;
        if (book.finishedAt && book.finishedAt >= monthStart && book.finishedAt < nextMonthStart) monthDone++;
        finishedPages += book.progress?.[1] || 0;
      }
      totalReadTimeMs += book.totalReadTimeMs || 0;
      if (book.lastReadAt && book.lastReadAt > lastReadAt) lastReadAt = book.lastReadAt;

      if (book.readDates && book.readDates.length > 0) {
        for (const ts of book.readDates) {
          const d = new Date(ts);
          uniqueDates.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
        }
      } else if (book.readingDays && book.readingDays > fallbackMaxDays) {
        fallbackMaxDays = book.readingDays;
      }
    }

    let totalReadDays = uniqueDates.size > 0 ? Math.max(uniqueDates.size, fallbackMaxDays) : fallbackMaxDays;
    const totalHours = totalReadTimeMs / (1000 * 60 * 60);
    if (totalReadDays === 0) totalReadDays = Math.floor(totalHours / 24);

    const totalAnnotations = notesData?.books
      ? Object.values(notesData.books).reduce((acc, b) => acc + (b?.notes?.length || 0), 0)
      : 0;

    const pace = totalReadDays > 0 ? Math.round(finishedPages / totalReadDays) : 0;

    return { monthDone, yearDone, totalAnnotations, totalHours, totalReadDays, lastReadAt, pace };
  }, [libraryBooks, notesData]);

  const relDay = (ts: number) => {
    if (!ts) return '—';
    const diff = Math.floor((Date.now() - ts) / 86400000);
    if (diff <= 0) return '今日';
    if (diff === 1) return '昨日';
    return `${diff} 日前`;
  };

  // D3: 字带收敛到 4 项——术语只留 册/页/日 三单位
  const items = [
    { n: String(stats.monthDone), l: '本月读完' },
    { n: `¶${stats.totalAnnotations}`, l: '累计批注' },
    { n: `${stats.totalHours.toFixed(0)}<small> 时</small>`, l: '阅读时长' },
    { n: relDay(stats.lastReadAt), l: '上次翻卷' },
  ];

  return (
    <div className='chronicle-band'>
      <span className='cb-title'>阅读纪事 · Chronicle</span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className='cb-sep' />}
          <span className='cb-item'>
            <span className='cb-num' dangerouslySetInnerHTML={{ __html: it.n }} />
            <span className='cb-lbl'>{it.l}</span>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ChronicleBand;
