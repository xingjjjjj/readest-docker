'use client';

import type React from 'react';
import { memo, useMemo } from 'react';
import type { Book } from '@/types/book';
import { getBookProgressPercentage } from '../utils/libraryUtils';

interface ReadingProgressProps {
  book: Book;
}

const ReadingProgress: React.FC<ReadingProgressProps> = memo(
  ({ book }) => {
    const progressPercentage = useMemo(() => getBookProgressPercentage(book), [book]);
    if (!book.progress || Number.isNaN(progressPercentage)) return null;

    return (
      <div
        className='flex w-full items-center gap-2'
        role='status'
        aria-label={`${progressPercentage}%`}
      >
        <progress
          className='progress progress-success h-1.5 flex-1'
          value={progressPercentage}
          max={100}
        />
        <span className='text-neutral-content/70 text-[11px] tabular-nums'>{progressPercentage}%</span>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.book.hash === nextProps.book.hash &&
      prevProps.book.updatedAt === nextProps.book.updatedAt
    );
  },
);

ReadingProgress.displayName = 'ReadingProgress';

export default ReadingProgress;
