'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { MdCheck, MdChevronRight, MdEdit } from 'react-icons/md';
import { HiOutlineFolder, HiOutlineFolderAdd, HiOutlineFolderRemove } from 'react-icons/hi';
import { IoMdArrowBack } from 'react-icons/io';

import { Book, BookGroupType } from '@/types/book';
import { isMd5 } from '@/utils/md5';
import { useEnv } from '@/context/EnvContext';
import { useTranslation } from '@/hooks/useTranslation';
import { useLibraryStore } from '@/store/libraryStore';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import { useKeyDownActions } from '@/hooks/useKeyDownActions';
import { BOOK_UNGROUPED_NAME } from '@/services/constants';
import { getBreadcrumbs } from '../utils/libraryUtils';

interface GroupingModalProps {
  isOpen?: boolean;
  selectedBookIds: string[];
  onClose: () => void;
}

const GroupingModal: React.FC<GroupingModalProps> = ({
  selectedBookIds,
  onClose,
}) => {
  const _ = useTranslation();
  const { appService, envConfig } = useEnv();
  const {
    library: libraryBooks,
    setLibrary,
    addGroup,
    getGroups,
    getGroupId,
    getGroupsByParent,
    getParentPath,
    refreshGroups,
  } = useLibraryStore();

  const selectedBooks = selectedBookIds || [];
  const parentGroupName = '';
  const onCancel = onClose;
  const onConfirm = onClose;

  const [currentPath, setCurrentPath] = useState<string | undefined>(undefined);
  const [showInput, setShowInput] = useState(false);
  const [editGroupName, setEditGroupName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<BookGroupType | null>(null);
  const [newGroup, setNewGroup] = useState<BookGroupType | null>(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [originalGroupName, setOriginalGroupName] = useState<string | null>(null);

  const divRef = useKeyDownActions({ onCancel, onConfirm });
  const editorRef = useRef<HTMLInputElement>(null);
  const iconSize = useResponsiveSize(16);

  const allGroups = getGroups();
  const currentGroups = getGroupsByParent(currentPath);
  const currentGroupsList =
    !currentPath || currentPath === ''
      ? currentGroups
      : currentGroups.filter((g) => g.name !== currentPath);

  const getDisplayName = (name: string) => {
    const idx = name.lastIndexOf('/');
    return idx >= 0 ? name.slice(idx + 1) : name;
  };

  const isSelectedBooksHasGroup =
    selectedBooks.some((hash) => !isMd5(hash)) ||
    selectedBooks
      .map((hash) => libraryBooks.find((book) => book.hash === hash))
      .some((book) => {
        if (!book) return false;
        const groupName = (book.groupName || '').trim();
        return groupName && groupName !== BOOK_UNGROUPED_NAME;
      });

  const canRenameGroup =
    selectedBooks.length === 1 && selectedBooks.every((id) => !isMd5(id));

  const renameGroupInfo = canRenameGroup
    ? allGroups.find((group) => group.id === selectedBooks[0])
    : null;

  const handleCreateGroup = () => {
    setShowInput(true);
    setIsRenaming(false);
    setEditGroupName('');
    setOriginalGroupName(null);
    setTimeout(() => editorRef.current?.focus(), 0);
  };

  const handleRenameGroup = () => {
    if (!renameGroupInfo) return;
    setShowInput(true);
    setIsRenaming(true);
    setEditGroupName(getDisplayName(renameGroupInfo.name));
    setOriginalGroupName(renameGroupInfo.name);
    setTimeout(() => editorRef.current?.focus(), 0);
  };

  const handleConfirmCreateGroup = () => {
    if (!editGroupName.trim()) return;
    const fullName = currentPath ? `${currentPath}/${editGroupName.trim()}` : editGroupName.trim();
    if (isRenaming && originalGroupName) {
      selectedBooks.forEach((id) => {
        for (const book of libraryBooks.filter((b) => b.groupId === id)) {
          const oldName = book.groupName || originalGroupName;
          const newName = fullName;
          book.groupName = newName;
          book.groupId = getGroupId(newName);
        }
      });
      setLibrary([...libraryBooks]);
      appService?.saveLibraryBooks(libraryBooks);
      refreshGroups();
    } else {
      const group = addGroup(fullName);
      setNewGroup(group);
      setSelectedGroup(group);
    }
    setShowInput(false);
    setEditGroupName('');
    setIsRenaming(false);
    setOriginalGroupName(null);
  };

  const handleRemoveFromGroup = () => {
    selectedBooks.forEach((id) => {
      for (const book of libraryBooks.filter((b) => b.hash === id || b.groupId === id)) {
        book.groupName = BOOK_UNGROUPED_NAME;
        book.groupId = getGroupId(BOOK_UNGROUPED_NAME);
      }
    });
    setLibrary([...libraryBooks]);
    appService?.saveLibraryBooks(libraryBooks);
    refreshGroups();
    onConfirm();
  };

  const handleToggleSelectGroup = (group: BookGroupType) => {
    setSelectedGroup(group);
  };

  const handleNavigateToGroup = (group: BookGroupType) => {
    setCurrentPath(group.name);
    setSelectedGroup(null);
  };

  const handleNavigateToPath = (path: string | undefined) => {
    setCurrentPath(path);
    setSelectedGroup(null);
  };

  const handleNavigateBack = () => {
    if (!currentPath) return;
    const parent = getParentPath(currentPath);
    setCurrentPath(parent || undefined);
    setSelectedGroup(null);
  };

  const handleConfirmGrouping = () => {
    if (!selectedGroup && !newGroup) return;
    const targetGroup = selectedGroup || newGroup!;
    selectedBooks.forEach((id) => {
      for (const book of libraryBooks.filter((b) => b.hash === id || b.groupId === id)) {
        book.groupName = targetGroup.name;
        book.groupId = getGroupId(targetGroup.name);
      }
    });
    setLibrary([...libraryBooks]);
    appService?.saveLibraryBooks(libraryBooks);
    refreshGroups();
    onConfirm();
  };

  useEffect(() => {
    const groupIds = selectedBooks
      .map((id) => libraryBooks.find((book) => book.hash === id || book.groupId === id)?.groupId)
      .filter((groupId) => groupId);
    if (Array.from(new Set(groupIds)).length === 1) {
      setTimeout(() => {
        const allGroups = getGroups();
        const group = allGroups.find((group) => group.id === groupIds[0]);
        setSelectedGroup(group || null);
        if (group && !currentPath) {
          const parent = getParentPath(group.name);
          setCurrentPath(parent);
        }
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 摩根风格样式
  const morganStyle: React.CSSProperties = {
    background: 'linear-gradient(180deg, #3D2817 0%, #2B1810 100%)',
    border: '1px solid rgba(201,169,97,.25)',
    borderRadius: '6px',
    color: '#F4ECD8',
    fontFamily: "'EB Garamond', Georgia, serif",
    boxShadow: '0 24px 60px rgba(0,0,0,.6)',
  };
  const morganTitle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    color: '#E8C977',
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: '.04em',
    textAlign: 'center',
    borderBottom: '1px solid rgba(201,169,97,.2)',
    paddingBottom: '12px',
    marginBottom: '16px',
  };
  const morganBtn: React.CSSProperties = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '10px',
    letterSpacing: '.15em',
    textTransform: 'uppercase',
    color: '#C9A961',
    background: 'transparent',
    border: '1px solid rgba(201,169,97,.2)',
    borderRadius: '3px',
    padding: '8px 14px',
    cursor: 'pointer',
    transition: 'all .25s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };
  const morganInput: React.CSSProperties = {
    background: 'rgba(0,0,0,.25)',
    border: '1px solid rgba(201,169,97,.2)',
    borderRadius: '3px',
    color: '#F4ECD8',
    fontFamily: "'EB Garamond', serif",
    fontSize: '14px',
    padding: '7px 12px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };
  const morganListItem: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '3px',
    color: '#D9CDB0',
    transition: 'all .2s',
    fontFamily: "'EB Garamond', serif",
    fontSize: '14px',
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center' style={{ background: 'rgba(15,8,4,.75)', backdropFilter: 'blur(2px)' }}>
      <div
        ref={divRef}
        style={morganStyle}
        className='overflow-y-auto p-6 max-h-[85%] w-[95%] min-w-64 max-w-[440px] sm:w-[70%]'
      >
        <h2 style={morganTitle}>{_('Group Books')}</h2>

        {/* Action buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '16px' }}>
          <button
            onClick={handleRemoveFromGroup}
            style={{ ...morganBtn, opacity: !isSelectedBooksHasGroup ? 0.4 : 1, cursor: !isSelectedBooksHasGroup ? 'not-allowed' : 'pointer' }}
            disabled={!isSelectedBooksHasGroup}
          >
            <HiOutlineFolderRemove size={14} /> {_('Remove From Group')}
          </button>
          <button onClick={handleCreateGroup} style={morganBtn}>
            <HiOutlineFolderAdd size={14} /> {_('Create New Group')}
          </button>
          <button
            onClick={handleRenameGroup}
            style={{ ...morganBtn, opacity: !canRenameGroup ? 0.4 : 1, cursor: !canRenameGroup ? 'not-allowed' : 'pointer' }}
            disabled={!canRenameGroup}
          >
            <MdEdit size={14} /> {_('Rename Group')}
          </button>
        </div>

        {/* Create/Rename input */}
        {showInput && (
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
            <input
              type='text'
              ref={editorRef}
              value={editGroupName}
              onChange={(e) => setEditGroupName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleConfirmCreateGroup();
                if (e.key === 'Escape') { setShowInput(false); setIsRenaming(false); setOriginalGroupName(null); }
                e.stopPropagation();
              }}
              placeholder={_('Enter group name')}
              style={morganInput}
            />
            <button
              style={{ ...morganBtn, opacity: editGroupName ? 1 : 0.4 }}
              onClick={handleConfirmCreateGroup}
              disabled={!editGroupName}
            >
              {_('Save')}
            </button>
          </div>
        )}

        {/* Breadcrumb */}
        {currentPath && (
          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#9C7E3E' }}>
            <button onClick={handleNavigateBack} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C9A961', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <IoMdArrowBack size={14} />
            </button>
            <button onClick={() => handleNavigateToPath(undefined)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9C7E3E' }}>
              {_('All')}
            </button>
            {getBreadcrumbs(currentPath).map((crumb, index, array) => {
              const isLast = index === array.length - 1;
              return (
                <React.Fragment key={index}>
                  <MdChevronRight size={14} style={{ color: '#9C7E3E' }} />
                  {isLast ? (
                    <span style={{ color: '#C9A961' }}>{crumb.name}</span>
                  ) : (
                    <button onClick={() => handleNavigateToPath(crumb.path)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9C7E3E' }}>
                      {crumb.name}
                    </button>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Groups list */}
        <ul style={{ marginTop: '16px', listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
          {currentGroupsList.map((group, index) => {
            const displayName = getDisplayName(group.name);
            const hasChildren = allGroups.some((g) => g.name.startsWith(group.name + '/'));
            return (
              <li key={index} style={{ display: 'flex', gap: '4px' }}>
                <button
                  style={{
                    ...morganListItem,
                    flex: 1,
                    background: selectedGroup?.id === group.id ? 'rgba(201,169,97,.12)' : 'transparent',
                    color: selectedGroup?.id === group.id ? '#E8C977' : '#D9CDB0',
                    border: selectedGroup?.id === group.id ? '1px solid rgba(201,169,97,.3)' : '1px solid transparent',
                  }}
                  onClick={() => handleToggleSelectGroup(group)}
                  onMouseEnter={(e) => { if (selectedGroup?.id !== group.id) e.currentTarget.style.background = 'rgba(201,169,97,.06)'; }}
                  onMouseLeave={(e) => { if (selectedGroup?.id !== group.id) e.currentTarget.style.background = 'transparent'; }}
                >
                  <HiOutlineFolder size={14} style={{ color: '#9C7E3E', flexShrink: 0 }} />
                  <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{displayName}</span>
                  {selectedGroup?.id === group.id && <MdCheck size={14} style={{ color: '#C9A961', flexShrink: 0 }} />}
                </button>
                {hasChildren && (
                  <button
                    onClick={() => handleNavigateToGroup(group)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9C7E3E', padding: '8px 4px', borderRadius: '3px', display: 'flex', alignItems: 'center' }}
                  >
                    <MdChevronRight size={14} />
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(201,169,97,.15)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onCancel} style={morganBtn}>
            {_('Cancel')}
          </button>
          <button
            onClick={handleConfirmGrouping}
            style={{ ...morganBtn, opacity: !selectedGroup && !newGroup ? 0.4 : 1, cursor: !selectedGroup && !newGroup ? 'not-allowed' : 'pointer', color: '#E8C977', borderColor: '#9C7E3E' }}
            disabled={!selectedGroup && !newGroup}
          >
            {_('Confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupingModal;
