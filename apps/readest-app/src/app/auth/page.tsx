'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/hooks/useTheme';
import { useThemeStore } from '@/store/themeStore';
import { useSettingsStore } from '@/store/settingsStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useEnv } from '@/context/EnvContext';

export default function AuthPage() {
  const _ = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isLoggedIn } = useAuth();
  const { envConfig } = useEnv();
  const { isDarkMode } = useThemeStore();
  const { settings, setSettings, saveSettings } = useSettingsStore();

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  const redirectTarget = searchParams?.get('redirect') || '/library';

  useTheme({ systemUIVisible: false });

  const handleGoBack = () => {
    settings.keepLogin = false;
    setSettings(settings);
    saveSettings(envConfig, settings);
    router.back();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 确保 cookie 被自动携带和设置
        body: JSON.stringify({
          username: 'xingjjjjj',
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(_('Invalid password') as string);
      }

      const { token, user } = await response.json();
      login(token, user);

      // 延迟跳转，确保状态更新完成
      setTimeout(() => {
        router.replace(redirectTarget);
      }, 100);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage || _('Login failed'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && isLoggedIn) {
      router.replace(redirectTarget);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, isLoggedIn]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        'min-h-screen flex flex-col items-center justify-center',
        isDarkMode ? 'bg-base-100' : 'bg-base-100'
      )}
    >
      <button
        onClick={handleGoBack}
        className='btn btn-ghost fixed left-6 top-6 h-8 min-h-8 w-8 p-0'
        aria-label={_('Go Back')}
      >
        <IoArrowBack className='text-base-content' />
      </button>

      <div
        className={clsx(
          'card shadow-lg w-full max-w-sm',
          'bg-base-100 border border-base-300'
        )}
      >
        <div className='card-body'>
          <h1 className='card-title justify-center text-2xl mb-6'>
            {_('Sign in')}
          </h1>

          <form onSubmit={handleLogin} className='space-y-4'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>{_('Password')}</span>
              </label>
              <input
                type='password'
                placeholder={_('Your password')}
                className={clsx(
                  'input input-bordered w-full',
                  error && 'input-error'
                )}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            {error && (
              <div className='alert alert-error'>
                <span>{error}</span>
              </div>
            )}

            <button
              type='submit'
              className='btn btn-primary w-full'
              disabled={loading}
            >
              {loading ? _('Signing in...') : _('Sign in')}
            </button>
          </form>

          <p className='text-center text-sm text-base-content/60 mt-4'>
            {_('Single user mode')}
          </p>
        </div>
      </div>
    </div>
  );
}
