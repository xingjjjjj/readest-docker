import withSerwistInit from '@serwist/next';

let withBundleAnalyzer = (config) => config; // Default: no-op
try {
  withBundleAnalyzer = (await import('@next/bundle-analyzer')).default;
} catch (e) {
  // @next/bundle-analyzer not available in production
}

const isDev = process.env['NODE_ENV'] === 'development';
const appPlatform = process.env['NEXT_PUBLIC_APP_PLATFORM'];

if (isDev) {
  const { initOpenNextCloudflareForDev } = await import('@opennextjs/cloudflare');
  initOpenNextCloudflareForDev();
}

const exportOutput = appPlatform !== 'web' && !isDev;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Next.js uses SSG instead of SSR
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: exportOutput ? 'export' : undefined,
  pageExtensions: exportOutput ? ['jsx', 'tsx'] : ['js', 'jsx', 'ts', 'tsx'],
  // Note: This feature is required to use the Next.js Image component in SSG mode.
  // See https://nextjs.org/docs/messages/export-image-api for different workarounds.
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  // Configure assetPrefix or else the server won't properly resolve your assets.
  assetPrefix: '',
  reactStrictMode: true,
  serverExternalPackages: ['isows'],
  turbopack: {},
  transpilePackages: !isDev
    ? [
        'i18next-browser-languagedetector',
        'react-i18next',
        'i18next',
        '@tauri-apps',
        'highlight.js',
        'foliate-js',
        'marked',
      ]
    : [],
  webpack: (config, { isServer }) => {
    // Suppress React Hook usage warnings in utils/libraries
    if (!isDev) {
      config.ignoreWarnings = config.ignoreWarnings || [];
      config.ignoreWarnings.push({
        module: /utils\/nav\.ts/,
        message: /useRouter/,
      });
      config.ignoreWarnings.push({
        module: /hooks\/useTheme\.ts/,
        message: /use.*Hook/,
      });
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

const pwaDisabled = isDev || appPlatform !== 'web';

const withPWA = pwaDisabled
  ? (config) => config
  : withSerwistInit({
      swSrc: 'src/sw.ts',
      swDest: 'public/sw.js',
      cacheOnNavigation: true,
      reloadOnOnline: true,
      disable: false,
      register: true,
      scope: '/',
    });

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Safely apply withAnalyzer if it's a real function
export default withPWA(
  typeof withAnalyzer === 'function' ? withAnalyzer(nextConfig) : nextConfig,
);
