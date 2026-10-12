'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import { MdEdit, MdDelete, MdLock, MdLockOpen, MdOutlineSearch, MdCheck, MdRefresh } from 'react-icons/md';

import { Book } from '@/types/book';
import { BookMetadata } from '@/libs/document';
import { useEnv } from '@/context/EnvContext';
import { useTranslation } from '@/hooks/useTranslation';
import { flattenContributors, formatAuthors, formatPublisher, formatTitle } from '@/utils/book';
import { useFileSelector } from '@/hooks/useFileSelector';

interface BookDetailEditProps {
  book: Book;
  metadata: BookMetadata;
  fieldSources: Record<string, string>;
  lockedFields: Record<string, boolean>;
  fieldErrors: Record<string, string>;
  searchLoading: boolean;
  onFieldChange: (field: string, value: string | undefined) => void;
  onToggleFieldLock: (field: string) => void;
  onAutoRetrieve: () => void;
  onLockAll: () => void;
  onUnlockAll: () => void;
  onCancel: () => void;
  onReset: () => void;
  onSave: () => void;
}

const emptyCoverImageUrl = '_blank';

const BookDetailEdit: React.FC<BookDetailEditProps> = ({
  book, metadata, fieldSources, lockedFields, fieldErrors, searchLoading,
  onFieldChange, onToggleFieldLock, onAutoRetrieve, onLockAll, onUnlockAll, onCancel, onReset, onSave,
}) => {
  const _ = useTranslation();
  const { appService } = useEnv();
  const { selectFiles } = useFileSelector(appService, _);

  const hasLockedFields = Object.values(lockedFields).some((l) => l);
  const allFieldsLocked = Object.values(lockedFields).every((l) => l);
  const isCoverLocked = lockedFields['coverImageUrl'] || false;
  const coverImageUrl = metadata.coverImageUrl || null;
  const [newCoverImageUrl, setNewCoverImageUrl] = useState<string | null>(coverImageUrl);

  const allFields = [
    { field: 'title', label: _('Title'), required: true, value: formatTitle(metadata.title), placeholder: _('Enter book title') },
    { field: 'subtitle', label: _('Subtitle'), value: formatTitle(metadata.subtitle || ''), placeholder: _('Enter book subtitle') },
    { field: 'author', label: _('Author'), required: true, value: formatAuthors(metadata.author), placeholder: _('Enter author name') },
    { field: 'series', label: _('Series'), value: metadata.series || '', placeholder: _('Enter series name') },
    { field: 'publisher', label: _('Publisher'), value: formatPublisher(metadata.publisher || ''), placeholder: _('Enter publisher') },
    { field: 'published', label: _('Publication Date'), value: metadata.published || '', placeholder: 'YYYY or YYYY-MM-DD' },
    { field: 'language', label: _('Language'), value: Array.isArray(metadata.language) ? metadata.language.join(', ') : (metadata.language || ''), placeholder: 'en, zh, fr' },
    { field: 'identifier', label: _('Identifier'), value: metadata.identifier || '', placeholder: '978-0123456789' },
    { field: 'subject', label: _('Subjects'), value: flattenContributors(metadata.subject || []), placeholder: _('Fiction, Science, History') },
    { field: 'description', label: _('Description'), type: 'textarea' as const, rows: 4, value: metadata.description || '', placeholder: _('Enter book description') },
  ];

  const handleSelectLocalImage = async () => {
    selectFiles({ type: 'covers', multiple: false }).then(async (result) => {
      if (result.error || result.files.length === 0) return;
      const selectedFile = result.files[0]!;
      if (selectedFile.path && appService) {
        const filePath = selectedFile.path;
        const imageUrl = await appService.getCachedImageUrl(filePath);
        onFieldChange('coverImageFile', filePath);
        onFieldChange('coverImageUrl', imageUrl);
        setNewCoverImageUrl(imageUrl);
      } else if (selectedFile.file) {
        const coverImageBlobUrl = URL.createObjectURL(selectedFile.file);
        onFieldChange('coverImageBlobUrl', coverImageBlobUrl);
        setNewCoverImageUrl(coverImageBlobUrl);
      }
    });
  };

  const renderField = (f?: (typeof allFields)[number]) => {
    if (!f) return null;
    const isLocked = lockedFields[f.field] || false;
    const error = fieldErrors[f.field];
    const source = fieldSources[f.field];
    return (
      <div key={f.field} className='morgan-field'>
        <div className='morgan-field-label'>
          <span>{f.label} {f.required && <span style={{ color: '#d4726a' }}>*</span>}</span>
          {isLocked && <span className='lock-indicator'><MdLock size={10} /> {_('Locked')}</span>}
        </div>
        <div style={{ position: 'relative' }}>
          {f.type === 'textarea' ? (
            <textarea
              className={clsx('morgan-field-input', isLocked && 'locked')}
              value={f.value}
              onChange={(e) => onFieldChange(f.field, e.target.value)}
              placeholder={isLocked ? '' : f.placeholder}
              rows={f.rows || 4}
              disabled={isLocked}
              style={{ paddingRight: lockable(f.field) ? '36px' : '10px' }}
            />
          ) : (
            <input
              type='text'
              className={clsx('morgan-field-input', isLocked && 'locked')}
              value={f.value}
              onChange={(e) => onFieldChange(f.field, e.target.value)}
              placeholder={isLocked ? '' : f.placeholder}
              disabled={isLocked}
              style={{ paddingRight: lockable(f.field) ? '36px' : '10px' }}
            />
          )}
          {lockable(f.field) && (
            <button
              type='button'
              className={clsx('morgan-field-lock-btn', isLocked && 'locked')}
              onClick={() => onToggleFieldLock(f.field)}
              title={isLocked ? _('Unlock field') : _('Lock field')}
            >
              {isLocked ? <MdLock size={14} /> : <MdLockOpen size={14} />}
            </button>
          )}
        </div>
        {error && <div className='morgan-field-error'>{error}</div>}
        {!error && source && <div className='morgan-field-source'>{source}</div>}
      </div>
    );
  };

  const lockable = (field: string) => field !== 'description' && field !== 'subject';

  return (
    <div className='morgan-detail-edit' style={{ width: '100%' }}>
      {/* 封面 + 标题作者 */}
      <div className='edit-cover-section'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className='edit-cover-preview' onClick={!isCoverLocked ? handleSelectLocalImage : undefined}>
            {(newCoverImageUrl && newCoverImageUrl !== emptyCoverImageUrl) ? (
              <img src={newCoverImageUrl} alt={book.title} />
            ) : (
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--leather), var(--wood-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gilt-dim)', fontSize: '9px', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
                {formatTitle(book.title).slice(0, 5)}
              </div>
            )}
          </div>
          <div className='edit-cover-actions'>
            <button className='edit-cover-btn' onClick={handleSelectLocalImage} disabled={isCoverLocked} title={_('Replace cover')}>
              <MdEdit />
            </button>
            <button
              className='edit-cover-btn danger'
              onClick={() => { setNewCoverImageUrl(emptyCoverImageUrl); onFieldChange('coverImageUrl', emptyCoverImageUrl); onFieldChange('coverImageFile', undefined); onFieldChange('coverImageBlobUrl', undefined); }}
              disabled={isCoverLocked}
              title={_('Remove cover')}
            >
              <MdDelete />
            </button>
            <button
              className={clsx('edit-cover-btn', isCoverLocked && 'locked')}
              onClick={() => onToggleFieldLock('coverImageUrl')}
              title={isCoverLocked ? _('Unlock cover') : _('Lock cover')}
            >
              {isCoverLocked ? <MdLock /> : <MdLockOpen />}
            </button>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {renderField(allFields[0])}
          {renderField(allFields[2])}
        </div>
      </div>

      {/* 元数据字段网格 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
        {allFields.slice(3, 8).map(renderField)}
      </div>
      {renderField(allFields[1])}
      {renderField(allFields[8])}
      {renderField(allFields[9])}

      {/* 操作按钮 */}
      <div className='edit-actions'>
        <div className='edit-actions-left'>
          <button className='edit-btn' onClick={onAutoRetrieve} disabled={searchLoading} title={_('Auto-Retrieve Metadata')}>
            {searchLoading ? <MdRefresh className='animate-spin' /> : <MdOutlineSearch />}
            {_('Auto-Retrieve')}
          </button>
          <button className='edit-btn' onClick={onUnlockAll} disabled={!hasLockedFields} title={_('Unlock All')}>
            <MdLockOpen /> {_('Unlock All')}
          </button>
          <button className='edit-btn' onClick={onLockAll} disabled={allFieldsLocked} title={_('Lock All')}>
            <MdLock /> {_('Lock All')}
          </button>
        </div>
        <div className='edit-actions-right'>
          <button className='edit-btn' onClick={onCancel}>{_('Cancel')}</button>
          <button className='edit-btn' onClick={onReset}>{_('Reset')}</button>
          <button className='edit-btn primary' onClick={onSave} disabled={fieldErrors && Object.keys(fieldErrors).length > 0}>
            <MdCheck /> {_('Save')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailEdit;
