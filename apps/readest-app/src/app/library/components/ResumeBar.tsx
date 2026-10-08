'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Book } from '@/types/book';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { navigateToReader } from '@/utils/nav';
import { getBookProgressPercentage, getBookReadStatus } from '../utils/libraryUtils';
import { formatDurationMs } from '@/utils/misc';

interface ResumeBarProps {
  libraryBooks: Book[];
}

const ResumeBar: React.FC<ResumeBarProps> = ({ libraryBooks }) => {
  const router = useRouter();
  const { envConfig } = useEnv();
  const { updateBook } = useLibraryStore();

  const resumeBook = libraryBooks
    .filter((b) => !b.deletedAt && getBookReadStatus(b) === 'reading')
    .sort((a, b) => (b.lastReadAt || 0) - (a.lastReadAt || 0))[0];

  if (!resumeBook) return null;

  const pct = getBookProgressPercentage(resumeBook);
  const progress = resumeBook.progress || [0, 0];
  const author = (resumeBook.author || '').split(/[·,]/).pop()?.trim() || '';

  const handleResume = async () => {
    const now = Date.now();
    await updateBook(envConfig, { ...resumeBook, lastReadAt: now, updatedAt: now });
    navigateToReader(router, [resumeBook.hash]);
  };

  return (
    <div className='morgan-niche' style={{ position: 'relative', zIndex: 2 }}>
      <div className='morgan-niche-cover'>
        {resumeBook.coverImageUrl ? (
          <img src={resumeBook.coverImageUrl} alt={resumeBook.title} />
        ) : (
          resumeBook.title.slice(0, 5)
        )}
      </div>
      <div className='morgan-niche-body'>
        <span className='morgan-niche-label'>续读</span>
        <span className='morgan-niche-title'>{resumeBook.title}</span>
        <span className='morgan-niche-author'>{author}</span>
        <span className='morgan-niche-progress'>
          <span className='morgan-progress-track'>
            <span className='morgan-progress-fill' style={{ width: `${pct}%` }} />
          </span>
          <span className='morgan-progress-pct'>{pct}%</span>
          <span className='morgan-progress-loc'>
            p.{progress[0]}/{progress[1] || '?'}
          </span>
        </span>
        <span className='morgan-niche-meta'>
          <span className='m'>
            上次 <b>{resumeBook.lastReadAt ? new Date(resumeBook.lastReadAt).toLocaleDateString('zh-CN') : '—'}</b>
          </span>
          <span className='m'>
            阅时 <b>{formatDurationMs(resumeBook.totalReadTimeMs || 0)}</b>
          </span>
        </span>
      </div>
      <button className='morgan-niche-resume' onClick={handleResume}>
        展卷 →
      </button>
    </div>
  );
};

export default ResumeBar;
