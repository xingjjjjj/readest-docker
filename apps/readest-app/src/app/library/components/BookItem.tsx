'use client';

import clsx from 'clsx';
import {
  MdCheckCircle,
  MdCheckCircleOutline,
  MdOutlineCheckCircle,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineSchedule,
} from 'react-icons/md';
import { LiaInfoCircleSolid } from 'react-icons/lia';

import { Book } from '@/types/book';
import { useEnv } from '@/context/EnvContext';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import { LibraryCoverFitType, LibraryViewModeType } from '@/types/settings';
import { formatDate, formatDescription } from '@/utils/book';
import ReadingProgress from './ReadingProgress';
import BookCover from '@/components/BookCover';
import { useLibraryStore } from '@/store/libraryStore';
import { formatDurationMs } from '@/utils/misc';
import { getBookReadStatus } from '../utils/libraryUtils';

interface BookItemProps {
  book: Book;
  mode: LibraryViewModeType;
  coverFit: LibraryCoverFitType;
  isSelectMode: boolean;
  bookSelected: boolean;
  showBookDetailsModal: (book: Book) => void;
}

const BookItem: React.FC<BookItemProps> = ({
  book,
  mode,
  coverFit,
  isSelectMode,
  bookSelected,
  showBookDetailsModal,
}) => {
  const _ = useTranslation();
  const { appService, envConfig } = useEnv();
  const { updateBook } = useLibraryStore();
  const iconSize15 = useResponsiveSize(15);
  const status = getBookReadStatus(book);

  const toggleFavorite = async () => {
    const next = {
      ...book,
      isFavorite: !book.isFavorite,
      favoriteAt: !book.isFavorite ? Date.now() : undefined,
    };
    await updateBook(envConfig, next);
  };

  const toggleFinished = async () => {
    const now = Date.now();
    const isFinished = status === 'finished';
    const next = {
      ...book,
      finishedAt: isFinished ? undefined : now,
      progress: isFinished ? ([0, 0] as [number, number]) : ([1, 1] as [number, number]),
      lastReadAt: isFinished ? book.lastReadAt : now,
      updatedAt: now,
    };
    await updateBook(envConfig, next);
  };

  const showQuickActions = !!appService?.isMobile;
  const showFinishedButton = showQuickActions || status === 'finished';
  const showFavoriteButton = showQuickActions || book.isFavorite;

  return (
    <div
      role='none'
      className={clsx(
        'book-item group flex',
        mode === 'grid' && 'h-full flex-col justify-end',
        mode === 'list' && 'h-28 flex-row gap-4 overflow-hidden',
        mode === 'list' ? 'library-list-item' : 'library-grid-item',
        appService?.hasContextMenu ? 'cursor-pointer' : '',
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={clsx(
          'bookitem-main relative flex aspect-[28/41] justify-center rounded',
          coverFit === 'crop' && 'overflow-hidden shadow-md',
          mode === 'grid' && 'items-end',
          mode === 'list' && 'min-w-20 items-center',
        )}
      >
        <BookCover
          mode={mode}
          book={book}
          coverFit={coverFit}
          showSpine={false}
          imageClassName='rounded shadow-md'
        />

        {/* Quick status indicators */}
        <div
          className={clsx(
            'absolute left-1 top-1 flex flex-col gap-1 transition-opacity',
            showFinishedButton
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto',
          )}
        >
          {!isSelectMode && (
            <button
              type='button'
              className='bg-base-100/85 text-base-content/80 hover:text-base-content rounded-full p-1 shadow'
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                toggleFinished();
              }}
              aria-label={status === 'finished' ? _('Mark as Unfinished') : _('Mark as Finished')}
              title={status === 'finished' ? _('Mark as Unfinished') : _('Mark as Finished')}
            >
              <MdOutlineCheckCircle className={clsx('h-4 w-4', status === 'finished' && 'text-green-600')} />
            </button>
          )}
        </div>

        {!isSelectMode && (
          <div
            className={clsx(
              'absolute right-1 top-1 flex flex-col gap-1 transition-opacity',
              showFavoriteButton
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto',
            )}
          >
            <button
              type='button'
              className='bg-base-100/85 text-base-content/80 hover:text-base-content rounded-full p-1 shadow'
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite();
              }}
              aria-label={book.isFavorite ? _('Unfavorite') : _('Favorite')}
              title={book.isFavorite ? _('Unfavorite') : _('Favorite')}
            >
              {book.isFavorite ? (
                <MdOutlineFavorite className='h-4 w-4 text-red-500' />
              ) : (
                <MdOutlineFavoriteBorder className='h-4 w-4' />
              )}
            </button>
          </div>
        )}

        {bookSelected && (
          <div className='absolute inset-0 bg-black opacity-30 transition-opacity duration-300'></div>
        )}
        {isSelectMode && (
          <div className='absolute bottom-1 right-1'>
            {bookSelected ? (
              <MdCheckCircle className='fill-blue-500' />
            ) : (
              <MdCheckCircleOutline className='fill-gray-300 drop-shadow-sm' />
            )}
          </div>
        )}
      </div>
      <div
        className={clsx(
          'flex w-full flex-col p-0',
          mode === 'grid' && 'pt-2 gap-1',
          mode === 'list' && 'gap-2 py-0',
        )}
      >
        <div className={clsx('min-w-0 flex-1', mode === 'list' && 'flex flex-col gap-2')}>
          <div className='flex items-center justify-between gap-2'>
            <h4
              className={clsx(
                'overflow-hidden text-ellipsis font-semibold',
                mode === 'grid' && 'block whitespace-nowrap text-[0.6em] text-xs',
                mode === 'list' && 'line-clamp-2 text-base',
              )}
            >
              {book.title}
            </h4>
            {!appService?.isMobile && (
              <button
                aria-label={_('Show Book Details')}
                className='show-detail-button -m-2 p-2 sm:opacity-0 sm:group-hover:opacity-100 flex-shrink-0'
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => {
                  showBookDetailsModal(book);
                }}
              >
                <div className='pt-[2px] sm:pt-[1px]'>
                  <LiaInfoCircleSolid size={iconSize15} />
                </div>
              </button>
            )}
          </div>
        </div>
        {mode === 'list' && (
          <h4 className='text-neutral-content line-clamp-1 text-sm'>
            {formatDescription(book.metadata?.description)}
          </h4>
        )}
        <div
          className='flex w-full items-center'
          style={{
            height: `${iconSize15}px`,
            minHeight: `${iconSize15}px`,
          }}
        >
          {book.progress && <ReadingProgress book={book} />}
        </div>
        <div className='flex items-center justify-between gap-x-2'>
          {mode === 'grid' && (
            <p className='text-neutral-content/70 line-clamp-1 text-[11px]'>
              {_('Last read')}: {book.lastReadAt ? formatDate(book.lastReadAt) : _('Never')}
            </p>
          )}
          {mode === 'list' && (
            <p className='text-neutral-content line-clamp-1 text-sm'>
              {_('Last read')}: {book.lastReadAt ? formatDate(book.lastReadAt) : _('Never')}
            </p>
          )}
        </div>
        {mode === 'list' && (
          <div className='text-neutral-content/80 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs'>
            <span className='inline-flex items-center gap-1'>
              <MdOutlineSchedule className='h-4 w-4' />
              {_('Read Time')}: {formatDurationMs(book.totalReadTimeMs || 0)}
            </span>
            <span>
              {_('Status')}: {status === 'finished' ? _('Finished') : status === 'reading' ? _('Reading') : _('Unread')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookItem;
