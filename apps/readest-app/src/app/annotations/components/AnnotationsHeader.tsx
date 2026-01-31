'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdArrowBack, MdFilterList, MdSort } from 'react-icons/md';
import { useTranslation } from '@/hooks/useTranslation';
import { useThemeStore } from '@/store/themeStore';
import { useTrafficLight } from '@/hooks/useTrafficLight';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import Dropdown from '@/components/Dropdown';
import WindowButtons from '@/components/WindowButtons';
import { navigateToLibrary } from '@/utils/nav';
import { useEnv } from '@/context/EnvContext';

interface AnnotationsHeaderProps {
    searchQuery: string;
    filterType: 'all' | 'annotation' | 'excerpt';
    sortBy: 'date' | 'book';
    totalCount: number;
    annotationCount: number;
    excerptCount: number;
    onSearchChange: (query: string) => void;
    onFilterChange: (type: 'all' | 'annotation' | 'excerpt') => void;
    onSortChange: (sort: 'date' | 'book') => void;
}

const AnnotationsHeader: React.FC<AnnotationsHeaderProps> = ({
    searchQuery,
    filterType,
    sortBy,
    totalCount,
    annotationCount,
    excerptCount,
    onSearchChange,
    onFilterChange,
    onSortChange,
}) => {
    const _ = useTranslation();
    const router = useRouter();
    const { appService } = useEnv();
    const { safeAreaInsets, statusBarHeight, systemUIVisible } = useThemeStore();
    const { isTrafficLightVisible } = useTrafficLight();
    const headerRef = useRef<HTMLDivElement>(null);
    const iconSize18 = useResponsiveSize(18);

    const handleGoBack = () => {
        navigateToLibrary(router);
    };

    const windowButtonVisible = appService?.hasWindowBar && !isTrafficLightVisible;

    return (
        <div
            ref={headerRef}
            className={clsx(
                'drag-region bg-base-100 flex w-full flex-col border-b',
                'border-base-300/50 relative z-10',
            )}
            style={{
                paddingTop: systemUIVisible ? `${Math.max(statusBarHeight, safeAreaInsets?.top || 0)}px` : '0px',
                paddingLeft: `${safeAreaInsets?.left || 0}px`,
                paddingRight: `${safeAreaInsets?.right || 0}px`,
            }}
        >
            <div className='flex h-14 items-center justify-between px-4'>
                <div className='flex items-center gap-x-3'>
                    <button
                        onClick={handleGoBack}
                        className='exclude-title-bar-mousedown btn btn-ghost h-8 min-h-8 w-8 p-0'
                        aria-label={_('Back to Library')}
                    >
                        <MdArrowBack size={iconSize18} />
                    </button>
                    <h1 className='text-base-content text-lg font-semibold sm:text-xl'>
                        {_('All Annotations')}
                    </h1>
                    <span className='text-base-content/60 text-sm'>({totalCount})</span>
                </div>

                <div className='flex items-center gap-x-2 sm:gap-x-4'>
                    {/* 过滤按钮 */}
                    <Dropdown
                        label={_('Filter')}
                        className='exclude-title-bar-mousedown dropdown-bottom dropdown-end'
                        buttonClassName='btn btn-ghost h-8 min-h-8 px-3'
                        toggleButton={
                            <div className='flex items-center gap-1'>
                                <MdFilterList size={iconSize18} />
                                <span className='text-xs'>
                                    {filterType === 'all'
                                        ? _('All')
                                        : filterType === 'annotation'
                                            ? _('Annotations')
                                            : _('Excerpts')}
                                </span>
                            </div>
                        }
                    >
                        <ul className='menu bg-base-100 rounded-box w-40 p-2 shadow'>
                            <li>
                                <button
                                    onClick={() => onFilterChange('all')}
                                    className={filterType === 'all' ? 'active' : ''}
                                >
                                    {_('All')} ({totalCount})
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onFilterChange('annotation')}
                                    className={filterType === 'annotation' ? 'active' : ''}
                                >
                                    {_('Annotations')} ({annotationCount})
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onFilterChange('excerpt')}
                                    className={filterType === 'excerpt' ? 'active' : ''}
                                >
                                    {_('Excerpts')} ({excerptCount})
                                </button>
                            </li>
                        </ul>
                    </Dropdown>

                    {/* 排序按钮 */}
                    <Dropdown
                        label={_('Sort')}
                        className='exclude-title-bar-mousedown dropdown-bottom dropdown-end'
                        buttonClassName='btn btn-ghost h-8 min-h-8 px-3'
                        toggleButton={
                            <div className='flex items-center gap-1'>
                                <MdSort size={iconSize18} />
                                <span className='text-xs'>{sortBy === 'date' ? _('Date') : _('Book')}</span>
                            </div>
                        }
                    >
                        <ul className='menu bg-base-100 rounded-box w-36 p-2 shadow'>
                            <li>
                                <button
                                    onClick={() => onSortChange('date')}
                                    className={sortBy === 'date' ? 'active' : ''}
                                >
                                    {_('By Date')}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onSortChange('book')}
                                    className={sortBy === 'book' ? 'active' : ''}
                                >
                                    {_('By Book')}
                                </button>
                            </li>
                        </ul>
                    </Dropdown>

                    {windowButtonVisible && (
                        <WindowButtons
                            headerRef={headerRef}
                            showMinimize={windowButtonVisible}
                            showMaximize={windowButtonVisible}
                            showClose={windowButtonVisible}
                        />
                    )}
                </div>
            </div>

            {/* 搜索栏 */}
            <div className='px-4 pb-3'>
                <div className='relative flex h-9 w-full items-center'>
                    <span className='text-base-content/50 absolute ps-3'>
                        <FaSearch className='h-4 w-4' />
                    </span>
                    <input
                        type='text'
                        value={searchQuery}
                        placeholder={_('Search annotations...')}
                        onChange={(e) => onSearchChange(e.target.value)}
                        spellCheck='false'
                        className={clsx(
                            'search-input input h-9 w-full rounded-full pr-10 ps-10',
                            'bg-base-300/45 border-0',
                            'font-sans text-sm font-light',
                            'placeholder:text-base-content/50',
                            'focus:outline-none focus:ring-0',
                        )}
                    />
                    {searchQuery && (
                        <button
                            type='button'
                            onClick={() => onSearchChange('')}
                            className='text-base-content/40 hover:text-base-content/60 absolute right-3'
                            aria-label={_('Clear Search')}
                        >
                            <IoMdCloseCircle className='h-4 w-4' />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnnotationsHeader;
