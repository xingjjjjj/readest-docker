/**
 * 浏览器缓存管理工具
 * 查看、清除和优化 IndexedDB 缓存
 */

'use client';

import React, { useEffect, useState } from 'react';
import { getFileCacheStats, clearFileCache, clearExpiredFileCache } from '@/utils/cachedFetch';
import { useTranslation } from '@/hooks/useTranslation';

export interface CacheStats {
    totalEntries: number;
    totalSize: number;
    oldestEntry?: { key: string; timestamp: number };
    newestEntry?: { key: string; timestamp: number };
}

export const CacheManager: React.FC = () => {
    const _ = useTranslation();
    const [stats, setStats] = useState<CacheStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [clearing, setClearing] = useState(false);

    const loadStats = async () => {
        try {
            setLoading(true);
            const cacheStats = await getFileCacheStats();
            setStats(cacheStats);
            console.log('[CacheManager] Loaded stats:', cacheStats);
        } catch (error) {
            console.error('[CacheManager] Failed to load cache stats:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadStats();
        // 每 30 秒刷新一次统计信息
        const interval = setInterval(loadStats, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleClearAll = async () => {
        if (!confirm(_('Clear all browser cache? This cannot be undone.'))) return;

        try {
            setClearing(true);
            await clearFileCache();
            await loadStats();
            alert(_('Cache cleared successfully'));
        } catch (error) {
            console.error('[CacheManager] Failed to clear cache:', error);
            alert(_('Failed to clear cache'));
        } finally {
            setClearing(false);
        }
    };

    const handleClearExpired = async () => {
        try {
            setClearing(true);
            const count = await clearExpiredFileCache();
            await loadStats();
            alert(_('Cleared {{count}} expired cache entries', { count }));
        } catch (error) {
            console.error('[CacheManager] Failed to clear expired cache:', error);
            alert(_('Failed to clear expired cache'));
        } finally {
            setClearing(false);
        }
    };

    const formatBytes = (bytes: number): string => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    };

    const formatDate = (timestamp: number): string => {
        return new Date(timestamp).toLocaleString();
    };

    return (
        <div className='space-y-4 rounded-lg bg-base-100 p-4'>
            <h3 className='text-lg font-semibold'>{_('Browser Cache Management')}</h3>

            {loading ? (
                <div className='text-center py-8'>
                    <span className='loading loading-spinner loading-md'></span>
                </div>
            ) : stats ? (
                <>
                    {/* 缓存统计信息 */}
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                        <div className='stat bg-base-200 rounded-lg p-3'>
                            <div className='stat-title text-xs'>{_('Cached Entries')}</div>
                            <div className='stat-value text-2xl'>{stats.totalEntries}</div>
                        </div>
                        <div className='stat bg-base-200 rounded-lg p-3'>
                            <div className='stat-title text-xs'>{_('Cache Size')}</div>
                            <div className='stat-value text-2xl'>{formatBytes(stats.totalSize)}</div>
                        </div>
                        {stats.oldestEntry && (
                            <div className='stat bg-base-200 rounded-lg p-3'>
                                <div className='stat-title text-xs'>{_('Oldest Entry')}</div>
                                <div className='stat-desc text-xs'>{formatDate(stats.oldestEntry.timestamp)}</div>
                            </div>
                        )}
                        {stats.newestEntry && (
                            <div className='stat bg-base-200 rounded-lg p-3'>
                                <div className='stat-title text-xs'>{_('Newest Entry')}</div>
                                <div className='stat-desc text-xs'>{formatDate(stats.newestEntry.timestamp)}</div>
                            </div>
                        )}
                    </div>

                    {/* 缓存管理按钮 */}
                    <div className='flex gap-2'>
                        <button
                            onClick={handleClearExpired}
                            disabled={clearing}
                            className='btn btn-sm btn-warning'
                        >
                            {clearing ? <span className='loading loading-spinner'></span> : null}
                            {_('Clear Expired Cache')}
                        </button>
                        <button
                            onClick={handleClearAll}
                            disabled={clearing}
                            className='btn btn-sm btn-error'
                        >
                            {clearing ? <span className='loading loading-spinner'></span> : null}
                            {_('Clear All Cache')}
                        </button>
                        <button
                            onClick={loadStats}
                            disabled={loading}
                            className='btn btn-sm btn-outline'
                        >
                            {loading ? <span className='loading loading-spinner'></span> : null}
                            {_('Refresh')}
                        </button>
                    </div>

                    {/* 缓存提示 */}
                    <div className='alert alert-info'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='h-6 w-6 shrink-0 stroke-current'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            ></path>
                        </svg>
                        <span>
                            {_('Browser cache allows faster loading of books and covers on return visits. Cache is automatically managed and never expires for 30 days.')}
                        </span>
                    </div>
                </>
            ) : (
                <div className='alert alert-warning'>
                    {_('IndexedDB is not available in your browser')}
                </div>
            )}
        </div>
    );
};
