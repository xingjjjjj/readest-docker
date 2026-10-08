'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Book } from '@/types/book';
import { useLibraryStore } from '@/store/libraryStore';
import { getBookReadStatus } from '../utils/libraryUtils';
import { BOOK_UNGROUPED_NAME } from '@/services/constants';

interface MorganSidebarProps {
  libraryBooks: Book[];
  currentGroupPath?: string;
  onNavigateToPath: (path: string | undefined) => void;
  searchParams: any;
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV'];

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

const MorganSidebar: React.FC<MorganSidebarProps> = ({
  libraryBooks,
  currentGroupPath,
  onNavigateToPath,
  searchParams,
}) => {
  const router = useRouter();
  const { getGroupsByParent } = useLibraryStore();

  const currentFilter = searchParams?.get('filter') || 'all';
  const currentGroup = searchParams?.get('group') || '';

  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // 当 currentGroupPath 变化时，自动展开所有祖先节点
  useEffect(() => {
    setExpanded((prev) => {
      const next = new Set(prev);
      for (const ancestor of getAncestorPaths(currentGroupPath)) {
        next.add(ancestor);
      }
      return next;
    });
  }, [currentGroupPath]);

  // 流通状态计数
  const statusCounts = useMemo(() => {
    let reading = 0, unread = 0, finished = 0, favorite = 0;
    for (const b of libraryBooks) {
      const s = getBookReadStatus(b);
      if (s === 'reading') reading++;
      else if (s === 'finished') finished++;
      else unread++;
      if (b.isFavorite) favorite++;
    }
    return { all: libraryBooks.length, reading, unread, finished, favorite };
  }, [libraryBooks]);

  // 顶层分组
  const topGroups = useMemo(() => {
    const groups = getGroupsByParent('');
    return groups.filter((g) => g.name !== BOOK_UNGROUPED_NAME);
  }, [getGroupsByParent]);

  const ungroupedBooks = useMemo(() => {
    return libraryBooks.filter((b) => !b.groupName || b.groupName === BOOK_UNGROUPED_NAME).length;
  }, [libraryBooks]);

  const applyFilter = (key: string | null) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (!key || key === 'all') params.delete('filter');
    else params.set('filter', key);
    router.push(`?${params.toString()}`);
  };

  const navigateGroup = (groupName: string | undefined) => {
    onNavigateToPath(groupName);
  };

  const toggleExpand = (path: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  // 只展开不折叠（用于点击行时）
  const expandGroup = (path: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.add(path);
      return next;
    });
  };

  // 计算某个分组路径下的书籍数（含子目录）
  const countBooks = (groupPath: string) => {
    return libraryBooks.filter(
      (b) => b.groupName === groupPath || (b.groupName && b.groupName.startsWith(groupPath + '/'))
    ).length;
  };

  // 递归渲染分组树
  const renderGroupTree = (parentPath: string, depth: number, romanStart: number): React.ReactNode => {
    const groups = getGroupsByParent(parentPath)
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, 'zh'));

    if (groups.length === 0) return null;

    let romanIdx = romanStart;
    return (
      <>
        {groups.map((group) => {
          const path = group.name;
          const leaf = getLeafName(path);
          const children = getGroupsByParent(path);
          const hasChildren = children.length > 0;
          const isExpanded = expanded.has(path);
          const isActive = currentGroupPath === path;
          const cnt = countBooks(path);
          const roman = ROMAN[romanIdx] || `${romanIdx + 1}`;
          romanIdx++;

          return (
            <li key={group.id}>
              <a
                className={isActive ? 'active' : ''}
                style={{ paddingLeft: `${14 + depth * 16}px` }}
                onClick={() => {
                  expandGroup(path);
                  navigateGroup(path);
                }}
              >
                {hasChildren ? (
                  <span
                    className='group-chevron'
                    style={{
                      display: 'inline-block',
                      width: '12px',
                      fontSize: '10px',
                      color: 'var(--gilt-dim)',
                      marginRight: '4px',
                      transition: 'transform .2s',
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(path);
                    }}
                  >
                    ▶
                  </span>
                ) : (
                  <span style={{ display: 'inline-block', width: '16px' }} />
                )}
                <span className='roman'>{roman}</span>
                {leaf === BOOK_UNGROUPED_NAME ? '未 分 组' : leaf}
                <span className='cnt'>{cnt}</span>
              </a>
              {hasChildren && isExpanded && (
                <ul className='nav-cat' style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {renderGroupTree(path, depth + 1, 0)}
                </ul>
              )}
            </li>
          );
        })}
      </>
    );
  };

  const stDefs = [
    { key: 'all', label: '全部藏书', cnt: statusCounts.all },
    { key: 'reading', label: '在 读', cnt: statusCounts.reading },
    { key: 'unread', label: '未 读', cnt: statusCounts.unread },
    { key: 'finished', label: '已 读', cnt: statusCounts.finished },
    { key: 'favorite', label: '收 藏', cnt: statusCounts.favorite },
  ];

  return (
    <>
      <div className='morgan-sidebar-title'>索 引 · Index</div>

      {/* 流通状态 */}
      <div className='nav-group-title'>流通状态 · Status</div>
      <ul className='nav-cat'>
        {stDefs.map((d, i) => (
          <li key={d.key}>
            <a
              className={currentFilter === d.key ? 'active' : ''}
              onClick={() => applyFilter(d.key === 'all' ? null : d.key)}
            >
              <span className='roman'>{ROMAN[i]}</span>
              {d.label}
              <span className='cnt'>{d.cnt}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* 书架分区（可展开多层目录树） */}
      <div className='nav-group-title'>书架分区 · Shelves</div>
      <ul className='nav-cat'>
        <li>
          <a
            className={!currentGroup ? 'active' : ''}
            onClick={() => navigateGroup(undefined)}
          >
            <span className='roman'>{ROMAN[0]}</span>
            全部书架
            <span className='cnt'>{libraryBooks.length}</span>
          </a>
        </li>
        {renderGroupTree('', 0, 1)}
      </ul>
    </>
  );
};

export default MorganSidebar;
