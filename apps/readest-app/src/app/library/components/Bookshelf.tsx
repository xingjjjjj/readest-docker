'use client';

import clsx from 'clsx';
import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PiPlus } from 'react-icons/pi';
import { Book } from '@/types/book';
import { LibraryCoverFitType, LibraryViewModeType } from '@/types/settings';
import { useEnv } from '@/context/EnvContext';
import { useThemeStore } from '@/store/themeStore';
import { useAutoFocus } from '@/hooks/useAutoFocus';
import { useSettingsStore } from '@/store/settingsStore';
import { useLibraryStore } from '@/store/libraryStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import { navigateToLibrary, navigateToReader, showReaderWindow } from '@/utils/nav';
import { createBookFilter, createBookSorter, getBookReadStatus } from '../utils/libraryUtils';
import { eventDispatcher } from '@/utils/event';

import Alert from '@/components/Alert';
import Spinner from '@/components/Spinner';
import ModalPortal from '@/components/ModalPortal';
import BookshelfItem from './BookshelfItem';
import SelectModeActions from './SelectModeActions';
import GroupingModal from './GroupingModal';

interface BookshelfProps {
  libraryBooks: Book[];
  isSelectMode: boolean;
  isSelectAll: boolean;
  isSelectNone: boolean;
  handleImportBooks: () => void;
  handleBookDownload: (
    book: Book,
    options?: { redownload?: boolean; queued?: boolean },
  ) => Promise<boolean>;
  handleBookDelete: (book: Book, syncBooks?: boolean) => Promise<boolean>;
  handleSetSelectMode: (selectMode: boolean) => void;
  handleShowDetailsBook: (book: Book) => void;
  handlePushLibrary: () => Promise<void>;
}

const Bookshelf: React.FC<BookshelfProps> = ({
  libraryBooks,
  isSelectMode,
  isSelectAll,
  isSelectNone,
  handleImportBooks,
  handleBookDownload,
  handleBookDelete,
  handleSetSelectMode,
  handleShowDetailsBook,
  handlePushLibrary,
}) => {
  const _ = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { appService } = useEnv();
  const { settings } = useSettingsStore();
  const { safeAreaInsets } = useThemeStore();

  const groupId = searchParams?.get('group') || '';
  const queryTerm = searchParams?.get('q') || null;
  const rawFilter = searchParams?.get('filter') || 'all';
  // Legacy: want-to-read filter was removed; treat it as finished.
  const filter = rawFilter === 'want' ? 'finished' : rawFilter;
  const viewMode = searchParams?.get('view') || settings.libraryViewMode;
  const sortBy = searchParams?.get('sort') || settings.librarySortBy;
  const sortOrder = searchParams?.get('order') || (settings.librarySortAscending ? 'asc' : 'desc');
  const coverFit = searchParams?.get('cover') || settings.libraryCoverFit;

  const [loading, setLoading] = useState(false);
  const [showSelectModeActions, setShowSelectModeActions] = useState(false);
  const [bookIdsToDelete, setBookIdsToDelete] = useState<string[]>([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showGroupingModal, setShowGroupingModal] = useState(false);
  const [importBookUrl] = useState(searchParams?.get('url') || '');

  const abortDeletionRef = useRef(false);
  const isImportingBook = useRef(false);
  const iconSize15 = useResponsiveSize(15);
  const autofocusRef = useAutoFocus<HTMLDivElement>();

  const { setCurrentBookshelf, setLibrary } = useLibraryStore();
  const { setSelectedBooks, getSelectedBooks, toggleSelectedBook } = useLibraryStore();
  const { getGroupName } = useLibraryStore();

  const uiLanguage = localStorage?.getItem('i18nextLng') || '';

  const updateUrlParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams?.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '') {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      if (params.get('sort') === 'updated') params.delete('sort');
      if (params.get('order') === 'desc') params.delete('order');
      if (params.get('cover') === 'crop') params.delete('cover');
      if (params.get('view') === 'grid') params.delete('view');

      const newParamString = params.toString();
      const currentParamString = searchParams?.toString() || '';

      if (newParamString !== currentParamString) {
        navigateToLibrary(router, newParamString);
      }
    },
    [router, searchParams],
  );

  const filteredBooks = useMemo(() => {
    const bookFilter = createBookFilter(queryTerm);
    const byQuery = queryTerm ? libraryBooks.filter((book) => bookFilter(book)) : libraryBooks;

    switch (filter) {
      case 'unread':
        return byQuery.filter((b) => !b.deletedAt && getBookReadStatus(b) === 'unread');
      case 'reading':
        return byQuery.filter((b) => !b.deletedAt && getBookReadStatus(b) === 'reading');
      case 'finished':
        return byQuery.filter((b) => !b.deletedAt && getBookReadStatus(b) === 'finished');
      case 'favorite':
        return byQuery.filter((b) => !b.deletedAt && !!b.isFavorite);
      case 'all':
      default:
        // Slightly bias "All" towards recently used ordering elsewhere; keep as-is here
        return byQuery;
    }
  }, [libraryBooks, queryTerm, filter]);

  const groupPath = useMemo(() => {
    if (!groupId) return '';
    return getGroupName(groupId) || '';
  }, [groupId, getGroupName]);

  const currentBookshelfItems = useMemo(() => {
    if (groupId && !groupPath) {
      return [];
    }

    // Root (no group selected) shows all books.
    if (!groupPath) {
      return filteredBooks;
    }

    // Only show books that belong to the current folder (non-recursive).
    return filteredBooks.filter((book) => (book.groupName || '') === groupPath);
  }, [filteredBooks, groupId, groupPath]);

  useEffect(() => {
    if (groupId && currentBookshelfItems.length === 0) {
      updateUrlParams({ group: null });
    } else {
      updateUrlParams({});
    }
  }, [searchParams, groupId, currentBookshelfItems.length, updateUrlParams]);

  const sortedBookshelfItems = useMemo(() => {
    const bookSorter = createBookSorter(sortBy, uiLanguage);
    const sortOrderMultiplier = sortOrder === 'asc' ? 1 : -1;
    return currentBookshelfItems.slice().sort((a, b) => {
      if (sortBy === 'updated') {
        return (
          (new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()) * sortOrderMultiplier
        );
      }
      return bookSorter(a, b) * sortOrderMultiplier;
    });
  }, [sortOrder, sortBy, uiLanguage, currentBookshelfItems]);

  useEffect(() => {
    if (isImportingBook.current) return;
    isImportingBook.current = true;

    if (importBookUrl && appService) {
      const importBook = async () => {
        console.log('Importing book from URL:', importBookUrl);
        const book = await appService.importBook(importBookUrl, libraryBooks);
        if (book) {
          setLibrary(libraryBooks);
          appService.saveLibraryBooks(libraryBooks);
          navigateToReader(router, [book.hash]);
        }
      };
      importBook();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importBookUrl, appService]);

  useEffect(() => {
    setCurrentBookshelf(currentBookshelfItems);
  }, [currentBookshelfItems, setCurrentBookshelf]);

  const toggleSelection = useCallback(
    (id: string) => {
      toggleSelectedBook(id);
    },
    [toggleSelectedBook],
  );

  const openSelectedBooks = () => {
    handleSetSelectMode(false);
    if (appService?.hasWindow && settings.openBookInNewWindow) {
      showReaderWindow(appService, getSelectedBooks());
    } else {
      setTimeout(() => setLoading(true), 200);
      navigateToReader(router, getSelectedBooks());
    }
  };

  const openBookDetails = () => {
    handleSetSelectMode(false);
    const selectedBooks = getSelectedBooks();
    const book = libraryBooks.find((book) => book.hash === selectedBooks[0]);
    if (book) {
      handleShowDetailsBook(book);
    }
  };

  const getBooksToDelete = () => {
    const booksToDelete: Book[] = [];
    bookIdsToDelete.forEach((id) => {
      for (const book of filteredBooks.filter((book) => book.hash === id || book.groupId === id)) {
        if (book && !book.deletedAt) {
          booksToDelete.push(book);
        }
      }
    });
    return booksToDelete;
  };

  const confirmDelete = async () => {
    const books = getBooksToDelete();
    const concurrency = 20;

    for (let i = 0; i < books.length; i += concurrency) {
      if (abortDeletionRef.current) {
        abortDeletionRef.current = false;
        break;
      }
      const batch = books.slice(i, i + concurrency);
      await Promise.all(batch.map((book) => handleBookDelete(book, false)));
    }
    handlePushLibrary();
    setSelectedBooks([]);
    setShowDeleteAlert(false);
    setShowSelectModeActions(true);
  };

  const deleteSelectedBooks = () => {
    setBookIdsToDelete(getSelectedBooks());
    setShowSelectModeActions(false);
    setShowDeleteAlert(true);
  };

  const groupSelectedBooks = () => {
    setShowSelectModeActions(false);
    setShowGroupingModal(true);
  };

  const handleDeleteBooksIntent = (event: CustomEvent) => {
    const { ids } = event.detail;
    setBookIdsToDelete(ids);
    setShowSelectModeActions(false);
    setShowDeleteAlert(true);
  };

  useEffect(() => {
    if (isSelectMode) {
      setShowSelectModeActions(true);
      if (isSelectAll) {
        setSelectedBooks(currentBookshelfItems.map((book) => book.hash));
      } else if (isSelectNone) {
        setSelectedBooks([]);
      }
    } else {
      setSelectedBooks([]);
      setShowSelectModeActions(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelectMode, isSelectAll, isSelectNone, currentBookshelfItems]);

  useEffect(() => {
    eventDispatcher.on('delete-books', handleDeleteBooksIntent);
    return () => {
      eventDispatcher.off('delete-books', handleDeleteBooksIntent);
    };
  }, []);

  const selectedBooks = getSelectedBooks();

  return (
    <div className='bookshelf'>
      <div
        ref={autofocusRef}
        tabIndex={-1}
        className={clsx(
          'bookshelf-items transform-wrapper focus:outline-none',
          viewMode === 'grid' && 'grid flex-1 grid-cols-3 gap-x-4 px-4 sm:gap-x-0 sm:px-2',
          viewMode === 'grid' && 'sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12',
          viewMode === 'list' && 'flex flex-col',
        )}
        style={{
          gridTemplateColumns:
            viewMode === 'grid' && !settings.libraryAutoColumns
              ? `repeat(${settings.libraryColumns}, minmax(0, 1fr))`
              : undefined,
        }}
        role='main'
        aria-label={_('Bookshelf')}
      >
        {sortedBookshelfItems.map((item) => (
          <BookshelfItem
            key={`library-item-${item.hash}`}
            item={item}
            mode={viewMode as LibraryViewModeType}
            coverFit={coverFit as LibraryCoverFitType}
            isSelectMode={isSelectMode}
            itemSelected={selectedBooks.includes(item.hash)}
            setLoading={setLoading}
            toggleSelection={toggleSelection}
            handleGroupBooks={groupSelectedBooks}
            handleBookDownload={handleBookDownload}
            handleBookDelete={handleBookDelete}
            handleSetSelectMode={handleSetSelectMode}
            handleShowDetailsBook={handleShowDetailsBook}
          />
        ))}
        {viewMode === 'grid' && currentBookshelfItems.length > 0 && (
          <div
            className={clsx('mx-0 my-2 sm:mx-4 sm:my-4')}
            style={
              coverFit === 'fit' && viewMode === 'grid'
                ? {
                  display: 'flex',
                  paddingBottom: `${iconSize15 + 24}px`,
                }
                : undefined
            }
          >
            <button
              aria-label={_('Import Books')}
              className={clsx(
                'bookitem-main bg-base-100 hover:bg-base-300/50',
                'flex items-center justify-center',
                'aspect-[28/41] w-full',
              )}
              onClick={handleImportBooks}
            >
              <div className='flex items-center justify-center'>
                <PiPlus className='size-10' color='gray' />
              </div>
            </button>
          </div>
        )}
      </div>
      {loading && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <Spinner loading />
        </div>
      )}
      {!showGroupingModal && isSelectMode && showSelectModeActions && (
        <SelectModeActions
          selectedBooks={selectedBooks}
          safeAreaBottom={safeAreaInsets?.bottom || 0}
          onOpen={openSelectedBooks}
          onGroup={groupSelectedBooks}
          onDetails={openBookDetails}
          onDelete={deleteSelectedBooks}
          onCancel={() => handleSetSelectMode(false)}
        />
      )}
      {showGroupingModal && selectedBooks.length > 0 && (
        <ModalPortal>
          <GroupingModal
            libraryBooks={libraryBooks}
            selectedBooks={selectedBooks}
            parentGroupName={getGroupName(groupId) || ''}
            onCancel={() => {
              setShowGroupingModal(false);
              setShowSelectModeActions(true);
            }}
            onConfirm={() => {
              setShowGroupingModal(false);
              handleSetSelectMode(false);
            }}
          />
        </ModalPortal>
      )}
      {showDeleteAlert && (
        <div
          className={clsx('delete-alert fixed bottom-0 left-0 right-0 z-50 flex justify-center')}
          style={{
            paddingBottom: `${(safeAreaInsets?.bottom || 0) + 16}px`,
          }}
        >
          <Alert
            title={_('Confirm Deletion')}
            message={_('Are you sure to delete {{count}} selected book(s)?', {
              count: getBooksToDelete().length,
            })}
            onCancel={() => {
              abortDeletionRef.current = true;
              setShowDeleteAlert(false);
              setShowSelectModeActions(true);
            }}
            onConfirm={confirmDelete}
          />
        </div>
      )}
    </div>
  );
};

export default Bookshelf;
