import React from 'react';
import { MdDelete, MdOpenInNew, MdOutlineCancel, MdInfoOutline } from 'react-icons/md';
import { LuFolderPlus } from 'react-icons/lu';
import { useKeyDownActions } from '@/hooks/useKeyDownActions';
import { useTranslation } from '@/hooks/useTranslation';
import { isMd5 } from '@/utils/md5';

interface SelectModeActionsProps {
  selectedBooks: string[];
  safeAreaBottom: number;
  onOpen: () => void;
  onGroup: () => void;
  onDetails: () => void;
  onDelete: () => void;
  onCancel: () => void;
}

const SelectModeActions: React.FC<SelectModeActionsProps> = ({
  selectedBooks,
  safeAreaBottom,
  onOpen,
  onGroup,
  onDetails,
  onDelete,
  onCancel,
}) => {
  const _ = useTranslation();

  const hasSelection = selectedBooks.length > 0;
  const hasValidBooks = selectedBooks.every((id) => isMd5(id));
  const hasSingleSelection = selectedBooks.length === 1;
  const divRef = useKeyDownActions({ onCancel });

  const btnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '9px',
    letterSpacing: '.15em',
    textTransform: 'uppercase',
    color: '#C9A961',
    transition: 'color .2s, opacity .2s',
    padding: '0',
  };

  const btnIcon: React.CSSProperties = {
    width: '18px',
    height: '18px',
  };

  const renderBtn = (
    icon: React.ReactNode,
    label: string,
    onClick: () => void,
    disabled: boolean,
    danger?: boolean,
  ) => (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...btnStyle,
        opacity: disabled ? 0.35 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: danger ? '#d4726a' : '#C9A961',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = danger ? '#ff8a80' : '#E8C977';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = danger ? '#d4726a' : '#C9A961';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {icon}
      <div>{label}</div>
    </button>
  );

  return (
    <div
      ref={divRef}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: `${safeAreaBottom + 16}px`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          padding: '14px 28px',
          background: 'linear-gradient(180deg, #3D2817 0%, #2B1810 100%)',
          border: '1px solid rgba(201,169,97,.25)',
          borderRadius: '8px',
          boxShadow: '0 -8px 30px rgba(0,0,0,.5), 0 0 0 1px rgba(201,169,97,.08)',
          fontFamily: "'EB Garamond', Georgia, serif",
        }}
      >
        {renderBtn(<MdOpenInNew style={btnIcon} />, _('Open'), onOpen, !hasSelection || !hasValidBooks)}
        {renderBtn(<LuFolderPlus style={btnIcon} />, _('Group'), onGroup, !hasSelection)}
        {renderBtn(<MdInfoOutline style={btnIcon} />, _('Details'), onDetails, !hasSingleSelection || !hasValidBooks)}
        {renderBtn(<MdDelete style={btnIcon} />, _('Delete'), onDelete, !hasSelection, true)}
        {renderBtn(<MdOutlineCancel style={btnIcon} />, _('Cancel'), onCancel, false)}
      </div>
    </div>
  );
};

export default SelectModeActions;
