import { AppService } from '@/types/system';
import { READEST_NODE_BASE_URL, READEST_WEB_BASE_URL } from './constants';

declare global {
  interface Window {
    __READEST_CLI_ACCESS?: boolean;
  }
}

const appPlatform = process.env['NEXT_PUBLIC_APP_PLATFORM'] || 'web';
export const isTauriAppPlatform = () => appPlatform === 'tauri';
export const isWebAppPlatform = () => appPlatform === 'web';
export const hasCli = () => window.__READEST_CLI_ACCESS === true;
export const isPWA = () => window.matchMedia('(display-mode: standalone)').matches;

// 动态检测访问源，完全运行时决定 API 地址
// 一劳永逸：无需任何配置，自动适配内外网
const getSmartBaseUrl = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  const { protocol, host } = window.location;

  // 直接使用当前访问的地址作为 API 地址
  // 无论是 localhost、内网IP 还是外网域名，都自动适配
  return `${protocol}//${host}`;
};

export const getBaseUrl = () => getSmartBaseUrl() || READEST_WEB_BASE_URL;
export const getNodeBaseUrl = () => getSmartBaseUrl() || READEST_NODE_BASE_URL;

const isWebDevMode = () => process.env['NODE_ENV'] === 'development' && isWebAppPlatform();

// Dev API only in development mode and web platform
// with command `pnpm dev-web`
// for production build or tauri app use the production Web API
export const getAPIBaseUrl = () => (isWebDevMode() ? '/api' : `${getBaseUrl()}/api`);

// For Node.js API that currently not supported in some edge runtimes
export const getNodeAPIBaseUrl = () => (isWebDevMode() ? '/api' : `${getNodeBaseUrl()}/api`);

export interface EnvConfigType {
  getAppService: () => Promise<AppService>;
}

let nativeAppService: AppService | null = null;
const getNativeAppService = async () => {
  if (!nativeAppService) {
    const { NativeAppService } = await import('@/services/nativeAppService');
    nativeAppService = new NativeAppService();
    await nativeAppService.init();
  }
  return nativeAppService;
};

let webAppService: AppService | null = null;
const getWebAppService = async () => {
  if (!webAppService) {
    const { WebAppService } = await import('@/services/webAppService');
    webAppService = new WebAppService();
    await webAppService.init();
  }
  return webAppService;
};

const environmentConfig: EnvConfigType = {
  getAppService: async () => {
    // Check if actually running in Tauri environment (runtime check)
    const isTauriRuntime = typeof window !== 'undefined' && (window as any).__TAURI__;

    if (isTauriAppPlatform() && isTauriRuntime) {
      return getNativeAppService();
    } else {
      return getWebAppService();
    }
  },
};

export default environmentConfig;
