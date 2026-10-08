'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/hooks/useTheme';
import { useSettingsStore } from '@/store/settingsStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useEnv } from '@/context/EnvContext';

export default function AuthPage() {
  const _ = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isLoggedIn } = useAuth();
  const { envConfig } = useEnv();
  const { settings, setSettings, saveSettings } = useSettingsStore();

  const [username, setUsername] = useState('');
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
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(_('Invalid username or password') as string);
      }

      const { token, user } = await response.json();
      login(token, user);

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
  }, [isMounted, isLoggedIn]);

  if (!isMounted) return null;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'repeating-linear-gradient(90deg, transparent 0, transparent 3px, rgba(0,0,0,.04) 3px, rgba(0,0,0,.04) 4px, transparent 4px, transparent 11px, rgba(0,0,0,.025) 11px, rgba(0,0,0,.025) 12px), radial-gradient(ellipse 120% 80% at 50% -10%, rgba(201,169,97,.06) 0%, transparent 55%), linear-gradient(180deg, #1F130A 0%, #2B1810 40%, #3D2817 100%)',
      }}
    >
      {/* 返回 */}
      <button
        onClick={handleGoBack}
        style={{
          position: 'fixed', left: '24px', top: '24px',
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#C9A961', fontSize: '20px', opacity: .6, transition: 'opacity .2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '.6')}
        aria-label={_('Go Back')}
      >
        ←
      </button>

      {/* 登录卡片 */}
      <div
        style={{
          width: '100%', maxWidth: '380px',
          margin: '0 24px',
          padding: '40px 36px 32px',
          background: 'linear-gradient(180deg, #3D2817 0%, #2B1810 100%)',
          border: '1px solid rgba(201,169,97,.25)',
          borderRadius: '8px',
          boxShadow: '0 24px 60px rgba(0,0,0,.6), 0 0 0 1px rgba(201,169,97,.1)',
        }}
      >
        {/* 徽记 */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '48px', height: '48px',
              border: '1.5px solid #C9A961', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Cormorant Garamond', serif", fontSize: '24px',
              color: '#C9A961', fontStyle: 'italic', fontWeight: 600,
              boxShadow: 'inset 0 0 12px rgba(201,169,97,.15)',
            }}
          >
            M
          </div>
        </div>

        {/* 标题 */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '26px', fontWeight: 600, color: '#E8C977',
            textAlign: 'center', letterSpacing: '.06em', margin: 0,
          }}
        >
          {_('Sign in')}
        </h1>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
            letterSpacing: '.32em', textTransform: 'uppercase',
            color: '#9C7E3E', textAlign: 'center', marginTop: '8px', marginBottom: '28px',
          }}
        >
          Bibliotheca Privata
        </div>

        {/* 表单 */}
        <form onSubmit={handleLogin}>
          {/* 用户名 */}
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
                letterSpacing: '.2em', textTransform: 'uppercase',
                color: '#9C7E3E', marginBottom: '8px',
              }}
            >
              {_('Username')}
            </label>
            <input
              type='text'
              placeholder={_('Your username')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
              style={{
                width: '100%', padding: '10px 14px',
                background: 'rgba(0,0,0,.25)',
                border: `1px solid ${error ? 'rgba(212,114,106,.4)' : 'rgba(201,169,97,.2)'}`,
                borderRadius: '4px',
                color: '#F4ECD8', fontSize: '15px',
                fontFamily: "'EB Garamond', Georgia, serif",
                outline: 'none', transition: 'border-color .2s',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#9C7E3E')}
              onBlur={(e) => (e.currentTarget.style.borderColor = error ? 'rgba(212,114,106,.4)' : 'rgba(201,169,97,.2)')}
            />
          </div>

          {/* 密码 */}
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px',
                letterSpacing: '.2em', textTransform: 'uppercase',
                color: '#9C7E3E', marginBottom: '8px',
              }}
            >
              {_('Password')}
            </label>
            <input
              type='password'
              placeholder={_('Your password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              style={{
                width: '100%', padding: '10px 14px',
                background: 'rgba(0,0,0,.25)',
                border: `1px solid ${error ? 'rgba(212,114,106,.4)' : 'rgba(201,169,97,.2)'}`,
                borderRadius: '4px',
                color: '#F4ECD8', fontSize: '15px',
                fontFamily: "'EB Garamond', Georgia, serif",
                outline: 'none', transition: 'border-color .2s',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#9C7E3E')}
              onBlur={(e) => (e.currentTarget.style.borderColor = error ? 'rgba(212,114,106,.4)' : 'rgba(201,169,97,.2)')}
            />
          </div>

          {error && (
            <div
              style={{
                padding: '8px 12px', marginBottom: '16px',
                background: 'rgba(212,114,106,.1)',
                border: '1px solid rgba(212,114,106,.25)',
                borderRadius: '4px',
                fontFamily: "'EB Garamond', serif", fontSize: '13px',
                color: '#d4726a',
              }}
            >
              {error}
            </div>
          )}

          <button
            type='submit'
            disabled={loading}
            style={{
              width: '100%', padding: '11px',
              background: loading ? 'rgba(201,169,97,.3)' : 'rgba(201,169,97,.15)',
              border: '1px solid #9C7E3E', borderRadius: '4px',
              color: '#E8C977',
              fontFamily: "'Cormorant Garamond', serif", fontSize: '16px',
              fontWeight: 500, letterSpacing: '.05em',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all .25s', boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.background = '#C9A961';
                e.currentTarget.style.color = '#1F130A';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.background = 'rgba(201,169,97,.15)';
                e.currentTarget.style.color = '#E8C977';
              }
            }}
          >
            {loading ? _('Signing in...') : _('Sign in')}
          </button>
        </form>

        {/* 底部装饰线 */}
        <div
          style={{
            height: '1px', marginTop: '28px',
            background: 'linear-gradient(90deg, transparent, rgba(201,169,97,.3), transparent)',
          }}
        />
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: '8px',
            letterSpacing: '.24em', textTransform: 'uppercase',
            color: '#9C7E3E', textAlign: 'center', marginTop: '12px', opacity: .7,
          }}
        >
          {_('Single user mode')}
        </div>
      </div>
    </div>
  );
}
