'use client';

import React, { useState } from 'react';
import { BiScan } from 'react-icons/bi';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { useTranslation } from '@/hooks/useTranslation';
import { scanAndImportBooks } from '@/libs/storage';
import { eventDispatcher } from '@/utils/event';

export const ScanBooksButton: React.FC = () => {
    const _ = useTranslation();
    const { envConfig } = useEnv();
    const { setLibrary } = useLibraryStore();
    const [isScanning, setIsScanning] = useState(false);

    const handleScanBooks = async () => {
        if (isScanning) return;

        setIsScanning(true);

        await eventDispatcher.dispatch('toast', {
            type: 'info',
            timeout: 0,
            message: _('Scanning books directory...'),
        });

        try {
            const appService = await envConfig.getAppService();

            // 调用后端的扫描和导入合一端点
            // 后端已直接更新 library.json，减少数据传输
            console.log('[ScanBooks] Calling scanAndImportBooks...');
            const result = await scanAndImportBooks();

            if (!result.success) {
                throw new Error('Scan failed');
            }

            // 加载后端更新的库
            console.log('[ScanBooks] Loading updated library books...');
            const updatedLibrary = await appService.loadLibraryBooks();
            console.log('[ScanBooks] ✓ Loaded', updatedLibrary.length, 'books');
            setLibrary(updatedLibrary);

            // 扫描后补齐缺失封面（复用导入时的封面提取逻辑）
            try {
                const coverResult = await appService.regenerateMissingCovers(updatedLibrary);
                console.log('[ScanBooks] ✓ Cover recovery:', coverResult);
            } catch (coverError) {
                console.warn('[ScanBooks] Cover recovery failed:', coverError);
            }

            // 构建提示信息
            const messages: string[] = [];

            if (result.summary.newCount > 0) {
                messages.push(
                    _('Found {{count}} new book(s)', { count: result.summary.newCount })
                );
            }

            if (result.summary.movedCount > 0) {
                messages.push(
                    _('{{count}} book(s) moved', { count: result.summary.movedCount })
                );
            }

            if (result.summary.deletedCount > 0) {
                messages.push(
                    _('{{count}} book file(s) removed from cache', {
                        count: result.summary.deletedCount,
                    })
                );
            }

            // 显示结果
            const resultMessage = messages.length > 0
                ? messages.join(' · ')
                : _('No changes detected');

            eventDispatcher.dispatch('toast', {
                type: messages.length > 0 ? 'success' : 'info',
                timeout: 5000,
                message: resultMessage,
            });

            console.log('[ScanBooks] ✓ Completed:', result.summary);
        } catch (error: any) {
            console.error('[ScanBooks] Error:', error);
            eventDispatcher.dispatch('toast', {
                type: 'error',
                timeout: 5000,
                message: _('Scan failed: {{error}}', {
                    error: error?.message || 'Unknown error',
                }),
            });
        } finally {
            setIsScanning(false);
        }
    };

    return (
        <button
            onClick={handleScanBooks}
            disabled={isScanning}
            className='btn btn-sm h-8 min-h-8 rounded-full px-2.5 gap-1'
            aria-label='扫库'
            title='扫库'
        >
            <BiScan className={isScanning ? 'animate-spin' : ''} size={16} />
            <span className='text-xs'>扫库</span>
        </button>
    );
};
