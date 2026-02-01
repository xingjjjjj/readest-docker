import * as React from 'react';
import { EnvProvider } from '@/context/EnvContext';
import Providers from '@/components/Providers';

import '../styles/globals.css';

// 支持通过环境变量配置应用 URL（用于本地部署或自托管）
const getAppUrl = () => {
  if (typeof process !== 'undefined' && process.env['NEXT_PUBLIC_WEB_BASE_URL']) {
    return process.env['NEXT_PUBLIC_WEB_BASE_URL'] + '/';
  }
  return 'https://web.readest.com/';
};

const url = getAppUrl();
const title = 'Readest — Where You Read, Digest and Get Insight';
const description =
  'Discover Readest, the ultimate online ebook reader for immersive and organized reading. ' +
  'Enjoy seamless access to your digital library, powerful tools for highlighting, bookmarking, ' +
  'and note-taking, and support for multiple book views. ' +
  'Perfect for deep reading, analysis, and understanding. Explore now!';
const previewImage = 'https://cdn.readest.com/images/open_graph_preview_read_now.png';

export const metadata = {
  title,
  description,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['epub', 'pdf', 'ebook', 'reader', 'readest', 'pwa'],
  authors: [
    {
      name: 'readest',
      url: 'https://github.com/readest/readest',
    },
  ],
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/icon.png' },
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      data-page='default'
      className={process.env['NEXT_PUBLIC_APP_PLATFORM'] === 'tauri' ? 'edge-to-edge' : ''}
    >
      <head>
        <title>{title}</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Readest' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={previewImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='web.readest.com' />
        <meta property='twitter:url' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={previewImage} />
        {/* 主题初始化脚本 - 必须在其他脚本之前执行，以防止主题闪烁 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var root = document.documentElement;
                  var path = window.location && window.location.pathname ? window.location.pathname : '/';
                  var page = 'default';
                  if (path.startsWith('/library')) page = 'library';
                  if (path.startsWith('/reader')) page = 'reader';
                  root.setAttribute('data-page', page);

                  if (typeof localStorage !== 'undefined') {
                    var themeMode = localStorage.getItem('themeMode') || 'auto';
                    var themeColor = localStorage.getItem('themeColor') || 'default';
                    var systemIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var isDarkMode = themeMode === 'dark' || (themeMode === 'auto' && systemIsDarkMode);
                    var theme = themeColor + '-' + (isDarkMode ? 'dark' : 'light');
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  console.warn('Failed to apply initial theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <EnvProvider>
          <Providers>{children}</Providers>
        </EnvProvider>
      </body>
    </html>
  );
}
