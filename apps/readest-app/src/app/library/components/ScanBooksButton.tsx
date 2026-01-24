'use client';

import React, { useState } from 'react';
import { BiScan } from 'react-icons/bi';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { useTranslation } from '@/hooks/useTranslation';
import { scanBooks, ScannedBook } from '@/libs/storage';
import { eventDispatcher } from '@/utils/event';
import { getCoverFilename, getConfigFilename } from '@/utils/book';
import { Book } from '@/types/book';
import { getBaseFilename } from '@/utils/path';

export const ScanBooksButton: React.FC = () => {
    const _ = useTranslation();
    const { envConfig } = useEnv();
    const { library, setLibrary } = useLibraryStore();
    const [isScanning, setIsScanning] = useState(false);

    const extToFormat = (ext?: string): Book['format'] => {
        switch ((ext || '').toLowerCase()) {
            case 'epub':
                return 'EPUB';
            case 'pdf':
                return 'PDF';
            case 'mobi':
                return 'MOBI';
            case 'azw':
                return 'AZW';
            case 'azw3':
                return 'AZW3';
            case 'cbz':
                return 'CBZ';
            case 'fb2':
                return 'FB2';
            case 'fbz':
                return 'FBZ';
            case 'txt':
                return 'TXT';
            case 'md':
                return 'MD';
            default:
                return 'EPUB';
        }
    };

    const handleScanBooks = async () => {
        if (isScanning) return;

        setIsScanning(true);

        await eventDispatcher.dispatch('toast', {
            type: 'info',
            timeout: 0, // Don't auto-dismiss
            message: _('Scanning books directory...'),
        });

        try {
            console.log('[ScanBooks] 1. Starting scan books process');
            const appService = await envConfig.getAppService();
            const result = await scanBooks();

            console.log('[ScanBooks] 2. Scan completed, found', result.count, 'books:', result.books?.map(b => b.relativePath));

            if (result.count === 0) {
                eventDispatcher.dispatch('toast', {
                    type: 'success',
                    timeout: 3000,
                    message: _('No new books found'),
                });
                return;
            }

            // Import scanned books
            const importedBooks: Book[] = [];
            const newBooks: Book[] = [];
            const existingBooks = new Map(library.map(b => [b.hash, b]));

            console.log('[ScanBooks] 3. Current library has', library.length, 'books');
            console.log('[ScanBooks] 4. Found', result.books.length, 'books to process');

            let failedBooks: Array<{ name: string, error: string }> = [];

            // Identify missing files: present in library but not on disk
            const scannedHashes = new Set(result.books.map(b => b.hash || b.relativePath));
            const missingBooks = library.filter(b => !scannedHashes.has(b.hash));

            // First pass: Identify books using backend-calculated hash
            // Skip downloading files for books that already exist in library
            const booksToImport: ScannedBook[] = [];
            const alreadyExists: Array<{ scannedBook: ScannedBook; existingBook: Book }> = [];

            for (const scannedBook of result.books) {
                if (scannedBook.hash && existingBooks.has(scannedBook.hash)) {
                    // Book already exists - check if moved
                    const existingBook = existingBooks.get(scannedBook.hash)!;
                    if (existingBook.relativePath !== scannedBook.relativePath) {
                        alreadyExists.push({
                            scannedBook,
                            existingBook,
                        });
                    }
                    console.log('[ScanBooks] 5a. Book exists (hash match):', scannedBook.relativePath);
                } else {
                    // New book or hash unavailable - need to import
                    booksToImport.push(scannedBook);
                    console.log('[ScanBooks] 5b. New book to import:', scannedBook.relativePath);
                }
            }

            console.log('[ScanBooks] 5. Books to import:', booksToImport.length, ', already existing:', alreadyExists.length, ', missing:', missingBooks.length);

            // Handle already-existing books that may have moved
            for (const { scannedBook, existingBook } of alreadyExists) {
                try {
                    console.log('[ScanBooks] Book moved: from', existingBook.relativePath, 'to', scannedBook.relativePath);
                    // 移动封面文件
                    const oldCoverPath = getCoverFilename(existingBook);
                    const newCoverPath = getCoverFilename({ ...existingBook, relativePath: scannedBook.relativePath });

                    if (oldCoverPath !== newCoverPath && await appService.exists(oldCoverPath, 'Books')) {
                        console.log('[ScanBooks] Moving cover from:', oldCoverPath, 'to:', newCoverPath);
                        const coverFile = await appService.openFile(oldCoverPath, 'Books');
                        await appService.writeFile(newCoverPath, 'Books', coverFile);
                        await appService.deleteFile(oldCoverPath, 'Books');
                        console.log('[ScanBooks] ✓ Cover moved successfully');
                    }

                    // 移动配置文件
                    const oldConfigPath = getConfigFilename(existingBook);
                    const newConfigPath = getConfigFilename({ ...existingBook, relativePath: scannedBook.relativePath });

                    if (oldConfigPath !== newConfigPath && await appService.exists(oldConfigPath, 'Books')) {
                        console.log('[ScanBooks] Moving config from:', oldConfigPath, 'to:', newConfigPath);
                        const configContent = await appService.readFile(oldConfigPath, 'Books', 'text');
                        await appService.writeFile(newConfigPath, 'Books', configContent);
                        await appService.deleteFile(oldConfigPath, 'Books');
                        console.log('[ScanBooks] ✓ Config moved successfully');
                    }

                    // 更新 relativePath
                    existingBook.relativePath = scannedBook.relativePath;
                } catch (moveError) {
                    console.warn('[ScanBooks] Failed to move metadata files:', moveError);
                }
            }

            // Second pass: create metadata-only records for new books (no file download here)
            const now = Date.now();
            for (const scannedBook of booksToImport) {
                try {
                    console.log('[ScanBooks] 6. Adding metadata-only book:', scannedBook.relativePath);
                    const directory = scannedBook.relativePath.split('/').slice(0, -1).join('/');
                    const groupName = directory || '';
                    const title = getBaseFilename(scannedBook.fileName);
                    const book: Book = {
                        hash: scannedBook.hash || scannedBook.relativePath,
                        format: extToFormat(scannedBook.ext),
                        title,
                        sourceTitle: title,
                        author: _('Unknown Author'),
                        groupName,
                        relativePath: scannedBook.relativePath,
                        filePath: scannedBook.filePath,
                        createdAt: now,
                        updatedAt: now,
                        deletedAt: null,
                    } as Book;

                    const coverPath = getCoverFilename(book);
                    book.coverImageUrl = `/api/storage/file?filePath=${encodeURIComponent(coverPath)}`;

                    importedBooks.push(book);
                    newBooks.push(book);
                    console.log('[ScanBooks] 7. Metadata entry created, hash:', book.hash);
                } catch (error: any) {
                    const errorMsg = error?.message || 'Unknown error';
                    console.error('[ScanBooks] Error creating metadata for book:', scannedBook.relativePath, error);
                    failedBooks.push({
                        name: scannedBook.fileName,
                        error: errorMsg
                    });

                    eventDispatcher.dispatch('toast', {
                        type: 'error',
                        timeout: 4000,
                        message: _('Failed to add "{{name}}": {{error}}', {
                            name: scannedBook.fileName,
                            error: errorMsg
                        }),
                    });
                }
            }

            // Build final library: remove missing, apply moves, add new
            const movedMap = new Map(alreadyExists.map(({ scannedBook }) => [scannedBook.hash || scannedBook.relativePath, scannedBook.relativePath]));
            const missingHashes = new Set(missingBooks.map(b => b.hash));

            const updatedExisting = library
                .filter(b => !missingHashes.has(b.hash))
                .map(b => {
                    const newPath = movedMap.get(b.hash);
                    return newPath ? { ...b, relativePath: newPath } : b;
                });

            const finalLibrary = Array.from(new Map([...updatedExisting, ...importedBooks].map(b => [b.hash, b])).values());

            setLibrary(finalLibrary);
            await appService.saveLibraryBooks(finalLibrary);

            console.log('[ScanBooks] 9. Imported', importedBooks.length, 'books,', newBooks.length, 'are new,', missingBooks.length, 'missing removed,', failedBooks.length, 'failed');

            if (importedBooks.length > 0 || alreadyExists.length > 0 || missingBooks.length > 0) {
                let message = '';
                if (newBooks.length > 0) {
                    const bookTitles = newBooks.map(b => b.title).join(', ');
                    message = newBooks.length === 1
                        ? _('Found 1 new book: {{title}}', { title: bookTitles })
                        : _('Found {{count}} new books: {{titles}}', { count: newBooks.length, titles: bookTitles });
                }

                if (alreadyExists.length > 0) {
                    const msg2 = _('{{count}} book(s) detected as moved', { count: alreadyExists.length });
                    message = message ? message + '\n' + msg2 : msg2;
                }

                if (missingBooks.length > 0) {
                    const msg3 = _('{{count}} book file(s) missing and removed from cache', { count: missingBooks.length });
                    message = message ? message + '\n' + msg3 : msg3;
                }

                eventDispatcher.dispatch('toast', {
                    type: 'success',
                    timeout: 5000,
                    message: message || _('Scan completed'),
                });

                // 显示失败的书籍摘要
                if (failedBooks.length > 0 && failedBooks.length <= 3) {
                    const failedNames = failedBooks.map(f => f.name).join(', ');
                    eventDispatcher.dispatch('toast', {
                        type: 'warning',
                        timeout: 6000,
                        message: _('Failed to import {{count}} book(s): {{names}}', {
                            count: failedBooks.length,
                            names: failedNames
                        }),
                    });
                } else if (failedBooks.length > 3) {
                    eventDispatcher.dispatch('toast', {
                        type: 'warning',
                        timeout: 6000,
                        message: _('Failed to import {{count}} books. Check console for details.', {
                            count: failedBooks.length
                        }),
                    });
                }
            } else {
                if (failedBooks.length > 0) {
                    eventDispatcher.dispatch('toast', {
                        type: 'error',
                        timeout: 5000,
                        message: _('All {{count}} book(s) failed to import. Check console for details.', {
                            count: failedBooks.length
                        }),
                    });
                } else {
                    eventDispatcher.dispatch('toast', {
                        type: 'info',
                        timeout: 3000,
                        message: _('No new books found, library has {{count}} book(s)', { count: library.length }),
                    });
                }
            }
        } catch (error: any) {
            console.error('[Scan] Error:', error);
            eventDispatcher.dispatch('toast', {
                type: 'error',
                timeout: 5000,
                message: _('Failed to scan books: {{error}}', { error: error?.message || 'Unknown error' }),
            });
        } finally {
            setIsScanning(false);
        }
    };

    return (
        <button
            onClick={handleScanBooks}
            disabled={isScanning}
            className='btn btn-ghost btn-sm gap-2'
            aria-label={_('Scan books directory')}
            title={_('Scan books directory for new files')}
        >
            <BiScan className={isScanning ? 'animate-spin' : ''} size={18} />
            {_('Scan Books')}
        </button>
    );
};
