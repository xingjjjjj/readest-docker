import React, { useState } from 'react';
import { MdOutlineDelete, MdOutlineEdit, MdSaveAlt, MdFolder, MdCheckCircle, MdOutlineCheckCircle } from 'react-icons/md';
import { Book } from '@/types/book';
import { BookMetadata } from '@/libs/document';
import { useTranslation } from '@/hooks/useTranslation';
import { useEnv } from '@/context/EnvContext';
import { useLibraryStore } from '@/store/libraryStore';
import { formatAuthors, formatDate, formatBytes, formatLanguage, formatPublisher, formatTitle } from '@/utils/book';
import { getBookReadStatus } from '@/app/library/utils/libraryUtils';

interface BookDetailViewProps {
  book: Book;
  metadata: BookMetadata | null;
  fileSize: number | null;
  onEdit?: () => void;
  onDelete?: () => void;
  onExport?: () => void;
  onGroup?: () => void;
}

const BookDetailView: React.FC<BookDetailViewProps> = ({ book, metadata, fileSize, onEdit, onDelete, onExport, onGroup }) => {
  const _ = useTranslation();
  const { envConfig } = useEnv();
  const { updateBook } = useLibraryStore();
  const hasCover = !!(book.coverImageUrl || metadata?.coverImageUrl);
  const isFinished = getBookReadStatus(book) === 'finished';

  // D7: 从书脊按钮移入详情弹窗
  const handleToggleFinished = async () => {
    const now = Date.now();
    await updateBook(envConfig, {
      ...book,
      finishedAt: isFinished ? undefined : now,
      progress: isFinished ? ([0, 0] as [number, number]) : ([1, 1] as [number, number]),
      lastReadAt: isFinished ? book.lastReadAt : now,
      updatedAt: now,
    });
  };

  const metaItems = [
    { label: _('Publisher'), value: formatPublisher(metadata?.publisher || '') || _('Unknown') },
    { label: _('Published'), value: formatDate(metadata?.published, true) || _('Unknown') },
    { label: _('Updated'), value: formatDate(book.updatedAt) || '' },
    { label: _('Added'), value: formatDate(book.createdAt) || '' },
    { label: _('Language'), value: formatLanguage(metadata?.language) || _('Unknown') },
    { label: _('Format'), value: book.format || _('Unknown') },
    { label: _('File Size'), value: formatBytes(fileSize) || _('Unknown') },
    { label: _('Subjects'), value: formatAuthors(metadata?.subject || '') || _('Unknown') },
  ];

  return (
    <div className='morgan-detail-view' style={{ width: '100%' }}>
      {/* 封面 + 标题 + 操作 */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div className='detail-cover'>
          {hasCover ? (
            <img src={book.coverImageUrl || metadata?.coverImageUrl} alt={book.title} />
          ) : (
            <div className='detail-cover-fallback'>{formatTitle(book.title).slice(0, 6)}</div>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div className='detail-title'>{formatTitle(book.title) || _('Untitled')}</div>
          <div className='detail-author'>{formatAuthors(book.author, book.primaryLanguage) || _('Unknown')}</div>
          {book.groupName && (
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', color: 'var(--gilt-dim)', letterSpacing: '.1em', marginTop: '4px' }}>
              {book.groupName}
            </div>
          )}
          <div className='detail-actions'>
            {/* D7: 标记已读/取消——从书脊按钮移入 */}
            <button className='detail-action-btn' onClick={handleToggleFinished}>
              {isFinished ? <MdOutlineCheckCircle /> : <MdCheckCircle />}
              {isFinished ? _('Unfinished') : _('Finished')}
            </button>
            {onGroup && (
              <button className='detail-action-btn' onClick={onGroup}>
                <MdFolder /> {_('Group')}
              </button>
            )}
            {onEdit && (
              <button className='detail-action-btn' onClick={onEdit} disabled={!metadata} style={!metadata ? { opacity: .5, cursor: 'not-allowed' } : {}}>
                <MdOutlineEdit /> {_('Edit')}
              </button>
            )}
            {onDelete && (
              <button className='detail-action-btn danger' onClick={onDelete}>
                <MdOutlineDelete /> {_('Delete')}
              </button>
            )}
            {onExport && (
              <button className='detail-action-btn' onClick={onExport}>
                <MdSaveAlt /> {_('Export')}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 元数据网格 */}
      <div className='detail-meta-grid'>
        {metaItems.map((item, i) => (
          <div key={i} className='detail-meta-item'>
            <span className='detail-meta-label'>{item.label}</span>
            <span className='detail-meta-value'>{item.value}</span>
          </div>
        ))}
      </div>

      {/* 简介 */}
      <div className='detail-description'>
        <div className='detail-desc-label'>{_('Description')}</div>
        <div
          className='detail-desc-body'
          dangerouslySetInnerHTML={{ __html: metadata?.description || _('No description available') }}
        />
      </div>
    </div>
  );
};

export default BookDetailView;
