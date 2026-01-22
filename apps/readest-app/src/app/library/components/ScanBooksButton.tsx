import React, { useState } from 'react';
import { BiScan } from 'react-icons/bi';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { useTranslation } from '@/hooks/useTranslation';
import { scanBooks, type ScannedBook } from '@/libs/storage';
import { eventDispatcher } from '@/utils/event';

export const ScanBooksButton: React.FC = () => {
    const _ = useTranslation();
    const { envConfig } = useEnv();
    const { library, updateBooks } = useLibraryStore();
    const [isScanning, setIsScanning] = useState(false);

    const handleScanBooks = async () => {
        if (isScanning) return;

        setIsScanning(true);

        eventDispatcher.dispatch('toast', {
            type: 'info',
            timeout: 0, // Don't auto-dismiss
            message: _('Scanning books directory...'),
        });

        try {
            const appService = await envConfig.getAppService();
            const result = await scanBooks();

            console.log('[Scan] Found', result.count, 'books');

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
            for (const scannedBook of result.books) {
                try {
                    const directory = scannedBook.relativePath.split('/').slice(0, -1).join('/');
                    const groupName = directory || '';

                    // Use the absolute filePath to open the file
                    const sourcePath = scannedBook.filePath;

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
                        } as any,
                    );

                    if (book) {
                        importedBooks.push(book);
                    }
                } catch (error) {
                    console.error('[Scan] Failed to import book:', scannedBook.fileName, error);
                }
            }

            if (importedBooks.length > 0) {
                await updateBooks(envConfig, importedBooks);
                eventDispatcher.dispatch('toast', {
                    type: 'success',
                    timeout: 3000,
                    message: _('Imported {{count}} book(s)', { count: importedBooks.length }),
                });
            } else {
                eventDispatcher.dispatch('toast', {
                    type: 'info',
                    timeout: 3000,
                    message: _('No new books to import'),
                });
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
