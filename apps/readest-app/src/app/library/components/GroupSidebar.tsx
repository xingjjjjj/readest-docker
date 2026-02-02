'use client';

import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import { HiChevronDown, HiChevronRight, HiOutlineFolder } from 'react-icons/hi';
import { PiTrash } from 'react-icons/pi';
import { PiPlus, PiPencilSimple } from 'react-icons/pi';

import { useTranslation } from '@/hooks/useTranslation';
import { useLibraryStore } from '@/store/libraryStore';
import { BOOK_UNGROUPED_NAME } from '@/services/constants';
import { useEnv } from '@/context/EnvContext';
import { useSettingsStore } from '@/store/settingsStore';
import Dialog from '@/components/Dialog';

export interface GroupSidebarProps {
    currentPath?: string;
    onNavigateToPath: (path: string | undefined) => void;
    collapsibleOnMobile?: boolean;
}

const getLeafName = (path: string) => {
    const idx = path.lastIndexOf('/');
    return idx >= 0 ? path.slice(idx + 1) : path;
};

const getAncestorPaths = (path?: string) => {
    if (!path) return [];
    const segments = path.split('/');
    const acc: string[] = [];
    for (let i = 0; i < segments.length; i++) {
        acc.push(segments.slice(0, i + 1).join('/'));
    }
    return acc;
};

const GroupSidebar: React.FC<GroupSidebarProps> = ({
    currentPath,
    onNavigateToPath,
    collapsibleOnMobile = true,
}) => {
    const _ = useTranslation();
    const { envConfig, appService } = useEnv();
    const { settings, setSettings, saveSettings } = useSettingsStore();
    const {
        library,
        getGroupsByParent,
        addGroup,
        refreshGroups,
        setLibrary,
        getGroupId,
        getParentPath,
    } = useLibraryStore();
    const groupsState = useLibraryStore((state) => state.groups);

    const [expanded, setExpanded] = useState<Set<string>>(new Set());
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogMode, setDialogMode] = useState<'create' | 'rename'>('create');
    const [inputValue, setInputValue] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const next = new Set<string>(expanded);
        for (const ancestor of getAncestorPaths(currentPath)) {
            next.add(ancestor);
        }
        setExpanded(next);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath]);

    const renderTree = (parentPath: string, depth: number): React.ReactNode => {
        const groups = getGroupsByParent(parentPath)
            .slice()
            .sort((a, b) => {
                if (a.name === BOOK_UNGROUPED_NAME) return -1;
                if (b.name === BOOK_UNGROUPED_NAME) return 1;
                return a.name.localeCompare(b.name);
            });
        if (groups.length === 0) return null;

        return (
            <div className={clsx('flex flex-col', depth > 0 && 'mt-1')}>
                {groups.map((group) => {
                    const path = group.name;
                    const leaf = getLeafName(path);
                    const displayLeaf = leaf === BOOK_UNGROUPED_NAME ? _('Ungrouped') : leaf;
                    const children = getGroupsByParent(path);
                    const hasChildren = children.length > 0;
                    const isExpanded = expanded.has(path);
                    const isActive = currentPath === path;
                    const hasBooks = library.some(
                        (book) => book.groupName === path || book.groupName?.startsWith(`${path}/`),
                    );
                    const canDelete = !hasBooks && path !== BOOK_UNGROUPED_NAME;

                    return (
                        <div key={group.id} className='flex flex-col'>
                            <div
                                className={clsx(
                                    'group relative flex items-center gap-2 rounded-lg px-2 py-1.5 pr-8',
                                    'hover:bg-base-300/40',
                                    isActive && 'bg-base-300/70',
                                )}
                                style={{ paddingLeft: `${8 + depth * 14}px` }}
                            >
                                <button
                                    type='button'
                                    className={clsx(
                                        'btn btn-ghost btn-xs h-6 min-h-6 w-6 p-0',
                                        !hasChildren && 'invisible',
                                    )}
                                    aria-label={isExpanded ? _('Collapse') : _('Expand')}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!hasChildren) return;
                                        setExpanded((prev) => {
                                            const next = new Set(prev);
                                            if (next.has(path)) next.delete(path);
                                            else next.add(path);
                                            return next;
                                        });
                                    }}
                                >
                                    {hasChildren ? (
                                        isExpanded ? (
                                            <HiChevronDown className='h-4 w-4' />
                                        ) : (
                                            <HiChevronRight className='h-4 w-4' />
                                        )
                                    ) : null}
                                </button>

                                <button
                                    type='button'
                                    className={clsx(
                                        'flex min-w-0 flex-1 items-center gap-2 rounded-md px-1 py-0.5 text-left',
                                        'text-base-content/90',
                                    )}
                                    onClick={() => onNavigateToPath(path)}
                                    title={path}
                                >
                                    <HiOutlineFolder className='h-4 w-4 flex-shrink-0 text-base-content/70' />
                                    <span className='truncate text-[13px] font-medium'>{displayLeaf}</span>
                                </button>

                                <div
                                    className={clsx(
                                        'absolute right-2 top-1/2 -translate-y-1/2',
                                        'flex items-center gap-1 opacity-0 transition-opacity',
                                        'group-hover:opacity-100',
                                    )}
                                >
                                    <button
                                        type='button'
                                        className={clsx(
                                            'btn btn-ghost btn-xs h-6 min-h-6 w-6 p-0',
                                            'text-base-content/70',
                                        )}
                                        aria-label={_('Create New Group')}
                                        title={_('Create New Group')}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setDialogMode('create');
                                            setInputValue('');
                                            setIsDialogOpen(true);
                                        }}
                                    >
                                        <PiPlus className='h-4 w-4' />
                                    </button>

                                    <button
                                        type='button'
                                        className={clsx(
                                            'btn btn-ghost btn-xs h-6 min-h-6 w-6 p-0',
                                            'text-base-content/70',
                                            (path === BOOK_UNGROUPED_NAME) && 'opacity-30',
                                        )}
                                        aria-label={_('Rename')}
                                        title={_('Rename')}
                                        disabled={path === BOOK_UNGROUPED_NAME}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (path === BOOK_UNGROUPED_NAME) return;
                                            setDialogMode('rename');
                                            setInputValue(getLeafName(path));
                                            setIsDialogOpen(true);
                                        }}
                                    >
                                        <PiPencilSimple className='h-4 w-4' />
                                    </button>

                                    <button
                                        type='button'
                                        className={clsx(
                                            'btn btn-ghost btn-xs h-6 min-h-6 px-1.5',
                                            'text-error',
                                            !canDelete && 'opacity-30',
                                        )}
                                        aria-label={_('Delete')}
                                        title={_('Delete')}
                                        disabled={!canDelete}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!canDelete) return;
                                            const currentDirs = settings.groupDirectories || {};
                                            const nextDirs = Object.fromEntries(
                                                Object.entries(currentDirs).filter(
                                                    ([key]) => !(key === path || key.startsWith(`${path}/`)),
                                                ),
                                            );
                                            const nextSettings = {
                                                ...settings,
                                                groupDirectories: nextDirs,
                                            };
                                            setSettings(nextSettings);
                                            if (envConfig) {
                                                saveSettings(envConfig, nextSettings);
                                            }
                                            refreshGroups();
                                            if (currentPath === path) {
                                                onNavigateToPath(getParentPath(path));
                                            }
                                        }}
                                    >
                                        <PiTrash className='h-4 w-4' />
                                    </button>
                                </div>
                            </div>

                            {hasChildren && isExpanded && renderTree(path, depth + 1)}
                        </div>
                    );
                })}
            </div>
        );
    };

    const content = useMemo(() => {
        return (
            <div className='flex max-h-[70vh] flex-col gap-2 overflow-y-auto pr-1'>
                <button
                    type='button'
                    className={clsx(
                        'flex items-center gap-2 rounded-lg px-3 py-2 text-left',
                        'hover:bg-base-300/40',
                        !currentPath && 'bg-base-300/70',
                    )}
                    onClick={() => onNavigateToPath(undefined)}
                >
                    <span className='text-[13px] font-medium'>{_('All')}</span>
                </button>

                <div className='border-base-300/60 border-t pt-2'>{renderTree('', 0)}</div>
            </div>
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath, getGroupsByParent, expanded, groupsState]);

    if (!collapsibleOnMobile) {
        return (
            <aside
                className={clsx(
                    'relative w-full rounded-xl border border-base-300/40',
                    'bg-base-100/70 backdrop-blur-md shadow-lg',
                    'p-2',
                )}
            >
                <div className='pointer-events-none absolute inset-0 rounded-xl' />
                {content}
            </aside>
        );
    }

    return (
        <aside className='w-full'>
            <div
                className={clsx(
                    'relative md:rounded-2xl md:border md:border-base-300/40 md:p-2',
                    'md:bg-base-100/70 md:backdrop-blur-md md:shadow-lg',
                    'group',
                )}
                onMouseMove={(e) => {
                    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    (e.currentTarget as HTMLDivElement).style.setProperty('--mx', `${x}px`);
                    (e.currentTarget as HTMLDivElement).style.setProperty('--my', `${y}px`);
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.removeProperty('--mx');
                    (e.currentTarget as HTMLDivElement).style.removeProperty('--my');
                }}
            >
                <div
                    className={clsx(
                        'pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300',
                        'md:group-hover:opacity-100',
                    )}
                    style={{
                        background:
                            'radial-gradient(180px circle at var(--mx, 50%) var(--my, 20%), rgba(99,102,241,0.18), transparent 70%)',
                    }}
                />

                <div className='hidden md:block'>{content}</div>

                <details className='md:hidden'>
                    <summary className='bg-base-100/70 border-base-300/40 flex cursor-pointer items-center justify-between rounded-xl border px-3 py-2 text-[13px] font-semibold backdrop-blur-md'>
                        <span className='truncate'>{currentPath ? getLeafName(currentPath) : _('All')}</span>
                    </summary>
                    <div className='bg-base-100/70 border-base-300/40 mt-2 rounded-xl border p-2 backdrop-blur-md'>
                        {content}
                    </div>
                </details>
            </div>
            <Dialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title={dialogMode === 'create' ? _('Create New Group') : _('Rename')}
                className='max-w-md'
            >
                <div className='flex flex-col gap-3'>
                    <input
                        className='input input-bordered w-full'
                        placeholder={dialogMode === 'create' ? _('Untitled Group') : _('Rename')}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className='flex justify-end gap-2'>
                        <button
                            className='btn btn-ghost'
                            onClick={() => setIsDialogOpen(false)}
                        >
                            {_('Cancel')}
                        </button>
                        <button
                            className='btn btn-primary'
                            disabled={!inputValue.trim() || isSaving}
                            onClick={async () => {
                                const name = inputValue.trim();
                                if (!name) return;
                                setIsSaving(true);
                                try {
                                    if (dialogMode === 'create') {
                                        const parentPath = currentPath || '';
                                        const fullName = parentPath ? `${parentPath}/${name}` : name;

                                        const nextSettings = {
                                            ...settings,
                                            groupDirectories: {
                                                ...(settings.groupDirectories || {}),
                                                [fullName]: fullName,
                                            },
                                        };
                                        setSettings(nextSettings);
                                        if (envConfig) {
                                            await saveSettings(envConfig, nextSettings);
                                        }

                                        addGroup(fullName);
                                        refreshGroups();
                                        onNavigateToPath(fullName);
                                    } else if (dialogMode === 'rename' && currentPath) {
                                        const parentPath = getParentPath(currentPath);
                                        const newFullName = name.includes('/') ? name : (parentPath ? `${parentPath}/${name}` : name);

                                        const reclassifyPromises: Promise<void>[] = [];
                                        library.forEach((book) => {
                                            if (book.groupName === currentPath) {
                                                const oldGroupName = book.groupName;
                                                const newGroupName = newFullName;
                                                if (book.relativePath && appService?.reclassifyBook) {
                                                    reclassifyPromises.push(
                                                        appService.reclassifyBook(book, newGroupName, oldGroupName).catch(() => undefined),
                                                    );
                                                }
                                                book.groupName = newGroupName;
                                                book.groupId = getGroupId(newGroupName);
                                                book.updatedAt = Date.now();
                                            } else if (book.groupName?.startsWith(`${currentPath}/`)) {
                                                const oldGroupName = book.groupName;
                                                const newGroupName = book.groupName.replace(currentPath, newFullName);
                                                if (book.relativePath && appService?.reclassifyBook) {
                                                    reclassifyPromises.push(
                                                        appService.reclassifyBook(book, newGroupName, oldGroupName).catch(() => undefined),
                                                    );
                                                }
                                                book.groupName = newGroupName;
                                                book.groupId = getGroupId(newGroupName);
                                                book.updatedAt = Date.now();
                                            }
                                        });

                                        await Promise.all(reclassifyPromises);
                                        setLibrary([...library]);
                                        appService?.saveLibraryBooks(library);

                                        const currentDirs = settings.groupDirectories || {};
                                        const nextDirs: Record<string, string> = {};
                                        Object.entries(currentDirs).forEach(([key, value]) => {
                                            if (key === currentPath) {
                                                nextDirs[newFullName] = newFullName;
                                            } else if (key.startsWith(`${currentPath}/`)) {
                                                const replaced = key.replace(currentPath, newFullName);
                                                nextDirs[replaced] = replaced;
                                            } else {
                                                nextDirs[key] = value;
                                            }
                                        });
                                        const nextSettings = {
                                            ...settings,
                                            groupDirectories: nextDirs,
                                        };
                                        setSettings(nextSettings);
                                        if (envConfig) {
                                            await saveSettings(envConfig, nextSettings);
                                        }

                                        refreshGroups();
                                        onNavigateToPath(newFullName);
                                    }
                                    setIsDialogOpen(false);
                                } finally {
                                    setIsSaving(false);
                                }
                            }}
                        >
                            {_('Confirm')}
                        </button>
                    </div>
                </div>
            </Dialog>
        </aside>
    );
};

export default GroupSidebar;
