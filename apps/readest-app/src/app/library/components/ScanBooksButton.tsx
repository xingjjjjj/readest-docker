'use client';

import React, { useState } from 'react';
import { BiScan } from 'react-icons/bi';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { useTranslation } from '@/hooks/useTranslation';
import { scanBooks } from '@/libs/storage';
import { eventDispatcher } from '@/utils/event';
import { getCoverFilename, getConfigFilename } from '@/utils/book';

export const ScanBooksButton: React.FC = () => {
    const _ = useTranslation();
    const { envConfig } = useEnv();
    const { library, updateBooks } = useLibraryStore();
    const [isScanning, setIsScanning] = useState(false);

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
            const importedBooks = [];
            const newBooks = [];
            const existingBooks = new Set(library.map(b => b.hash));

            console.log('[ScanBooks] 3. Current library has', library.length, 'books');
            console.log('[ScanBooks] 4. Found', result.books.length, 'books to process');

            let failedBooks: Array<{ name: string, error: string }> = [];

            for (const scannedBook of result.books) {
                try {
                    console.log('[ScanBooks] 5. Processing book:', scannedBook.relativePath);
                    const directory = scannedBook.relativePath.split('/').slice(0, -1).join('/');
                    const groupName = directory || '';

                    // Use the absolute filePath to open the file
                    const sourcePath = scannedBook.filePath;
                    console.log('[ScanBooks] 6. Calling importBook with:', { sourcePath, relativePath: scannedBook.relativePath, groupName });

                    const book = await appService.importBook(
                        sourcePath,
                        library,
                        false, // saveBook = false (transient)
                        true,  // saveCover = true
                        false, // overwrite = false
                        true,  // transient = true
                        {
                            targetRelativePath: scannedBook.relativePath,
                            targetGroupName: groupName,
                        },
                    );

                    if (book) {
                        const isNewBook = !existingBooks.has(book.hash);
                        console.log('[ScanBooks] 7. Book hash:', book.hash, 'isNew:', isNewBook);

                        // 处理已存在书籍的移动情况
                        if (!isNewBook) {
                            const existingBook = library.find(b => b.hash === book.hash);
                            if (existingBook && existingBook.relativePath && existingBook.relativePath !== scannedBook.relativePath) {
                                // 书籍被移动了，需要移动整个元数据目录
                                const oldPath = existingBook.relativePath;
                                const newPath = scannedBook.relativePath;

                                console.log('[ScanBooks] Book moved: from', oldPath, 'to', newPath);

                                // 获取旧目录和新目录的路径
                                const oldDirPath = oldPath.split('/').slice(0, -1).join('/');
                                const newDirPath = newPath.split('/').slice(0, -1).join('/');

                                // 如果目录路径改变了，需要移动整个元数据目录
                                if (oldDirPath !== newDirPath) {
                                    const oldMetadataDir = oldDirPath ? `${oldDirPath}/.readest/${existingBook.hash}` : `.readest/${existingBook.hash}`;
                                    const newMetadataDir = newDirPath ? `${newDirPath}/.readest/${existingBook.hash}` : `.readest/${existingBook.hash}`;

                                    console.log('[ScanBooks] Metadata dir path changed: from', oldMetadataDir, 'to', newMetadataDir);

                                    try {
                                        // 检查旧元数据目录是否存在
                                        if (await appService.exists(oldMetadataDir, 'Books')) {
                                            // 读取旧目录下的所有文件
                                            const files = await appService.readDirectory(oldMetadataDir, 'Books');
                                            console.log('[ScanBooks] Found', files.length, 'files in old metadata dir');

                                            // 移动所有元数据文件到新位置
                                            for (const file of files) {
                                                const oldFilePath = `${oldMetadataDir}/${file.path}`;
                                                const newFilePath = `${newMetadataDir}/${file.path}`;

                                                if (await appService.exists(oldFilePath, 'Books')) {
                                                    console.log('[ScanBooks] Moving metadata file from:', oldFilePath, 'to:', newFilePath);
                                                    const fileContent = await appService.readFile(oldFilePath, 'Books', 'text');
                                                    await appService.writeFile(newFilePath, 'Books', fileContent);
                                                    await appService.deleteFile(oldFilePath, 'Books');
                                                }
                                            }

                                            // 删除旧的空目录
                                            try {
                                                await appService.deleteFile(oldMetadataDir, 'Books');
                                                console.log('[ScanBooks] ✓ Old metadata dir deleted');
                                            } catch (e) {
                                                console.log('[ScanBooks] Could not delete old dir (may have other files):', e);
                                            }
                                        }
                                    } catch (error) {
                                        console.warn('[ScanBooks] Error moving metadata directory:', error);
                                    }
                                }

                                // 更新 relativePath
                                existingBook.relativePath = newPath;
                                console.log('[ScanBooks] ✓ Book path updated from', oldPath, 'to', newPath);
                            }
                        } else {
                            // 新书籍
                            importedBooks.push(book);
                            newBooks.push(book);
                        }
                    }
                } catch (error: any) {
                    const errorMsg = error?.message || 'Unknown error';
                    console.error('[ScanBooks] Error importing book:', scannedBook.relativePath, error);
                    failedBooks.push({
                        name: scannedBook.fileName,
                        error: errorMsg
                    });

                    eventDispatcher.dispatch('toast', {
                        type: 'error',
                        timeout: 4000,
                        message: _('Failed to import "{{name}}": {{error}}', {
                            name: scannedBook.fileName,
                            error: errorMsg
                        }),
                    });
                }
            }

            console.log('[ScanBooks] 8. Imported', importedBooks.length, 'books,', newBooks.length, 'are new,', failedBooks.length, 'failed');

            if (importedBooks.length > 0) {
                await updateBooks(envConfig, importedBooks);

                if (newBooks.length > 0) {
                    const bookTitles = newBooks.map(b => b.title).join(', ');
                    const message = newBooks.length === 1
                        ? _('Found 1 new book: {{title}}', { title: bookTitles })
                        : _('Found {{count}} new books: {{titles}}', { count: newBooks.length, titles: bookTitles });

                    eventDispatcher.dispatch('toast', {
                        type: 'success',
                        timeout: 5000,
                        message,
                    });
                } else {
                    eventDispatcher.dispatch('toast', {
                        type: 'info',
                        timeout: 3000,
                        message: _('No new books found, library has {{count}} book(s)', { count: library.length }),
                    });
                }

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
                        message: _('No books found in directory'),
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
