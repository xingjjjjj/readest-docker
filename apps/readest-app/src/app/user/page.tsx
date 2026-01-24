'use client';

import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/hooks/useTheme';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useEnv } from '@/context/EnvContext';
import { navigateToLibrary } from '@/utils/nav';
import { Toast } from '@/components/Toast';
import LegalLinks from '@/components/LegalLinks';
import ProfileHeader from './components/Header';

const ProfilePage = () => {
  const _ = useTranslation();
  const router = useRouter();
  const { appService } = useEnv();
  const { token, user, logout } = useAuth();
  const { safeAreaInsets, isRoundedWindow } = useThemeStore();

  const [loading, setLoading] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useTheme({ systemUIVisible: false });


  const handleGoBack = () => {
    navigateToLibrary(router);
  };


  if (!mounted) {
    return null;
  }

  if (!user || !token || !appService) {
    return (
      <div className='mx-auto max-w-4xl px-4 py-8'>
        <div className='overflow-hidden rounded-lg shadow-md'>
          <div className='flex min-h-[300px] items-center justify-center p-6'>
            <div className='text-base-content animate-pulse'>{_('Loading profile...')}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'bg-base-100 full-height inset-0 select-none overflow-hidden',
        appService?.hasRoundedWindow && isRoundedWindow && 'window-border rounded-window',
      )}
    >
      <div
        className={clsx('flex h-full w-full flex-col items-center overflow-y-auto')}
        style={{
          paddingTop: `${safeAreaInsets?.top || 0}px`,
        }}
      >
        <ProfileHeader onGoBack={handleGoBack} />
        <div className='w-full min-w-60 max-w-4xl py-10'>
          <div className='sm:bg-base-200 overflow-hidden rounded-lg sm:p-6 sm:shadow-md'>
            <div className='flex flex-col gap-y-8'>
              <div className='flex flex-col gap-y-8 px-6'>
                <div className='space-y-4'>
                  <h2 className='text-xl font-semibold'>{_('User Profile')}</h2>
                  <div className='space-y-2'>
                    <p><strong>{_('Username')}:</strong> {user.username}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-y-8 px-6'>
                <button
                  onClick={() => {
                    logout();
                    navigateToLibrary(router);
                  }}
                  className='btn btn-primary w-full'
                >
                  {_('Sign out')}
                </button>
              </div>
              <LegalLinks />
            </div>
          </div>
        </div>
        <Toast />
      </div>
    </div>
  );
};

export default ProfilePage;
