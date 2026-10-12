import { BaseDir, AppPlatform, ResolvedPath } from '@/types/system';
import { getOSPlatform } from '@/utils/misc';
import { isPWA } from './environment';
import { BaseAppService } from './appService';
import { apiFileSystem } from './apiFileSystem';

export class WebAppService extends BaseAppService {
  constructor() {
    super();
    // 2026-10-12 清理 remote 模式遗留：仅使用服务端存储后端 apiFileSystem
    this.fs = apiFileSystem;
  }
  // Option C fix: activate mobile UI branches when browsing from a phone browser.
  // Previously only isMobile was set; isAndroidApp/isIOSApp/isMobileApp stayed false,
  // so mobile-specific UI adaptations (pagination, footer bar, annotator, TOC,
  // text selection, etc.) were never activated on mobile web.
  override isMobile = ['android', 'ios'].includes(getOSPlatform());
  override isAndroidApp = getOSPlatform() === 'android';
  override isIOSApp = getOSPlatform() === 'ios';
  override isMobileApp = ['android', 'ios'].includes(getOSPlatform());
  override appPlatform = 'web' as AppPlatform;
  override hasSafeAreaInset = isPWA();

  override async init() {
    await this.loadSettings();
    await this.prepareBooksDir();
    await this.runMigrations();
  }

  override async runMigrations() {
    try {
      const settings = await this.loadSettings();
      const lastMigrationVersion = settings.migrationVersion || 0;

      await super.runMigrations(lastMigrationVersion);

      if (lastMigrationVersion < this.CURRENT_MIGRATION_VERSION) {
        await this.saveSettings({
          ...settings,
          migrationVersion: this.CURRENT_MIGRATION_VERSION,
        });
      }
    } catch (error) {
      console.error('Failed to run migrations:', error);
    }
  }

  override resolvePath(fp: string, base: BaseDir): ResolvedPath {
    return this.fs.resolvePath(fp, base);
  }

  override async setCustomRootDir() {
    // No-op in web environment
  }

  override async selectDirectory(): Promise<string> {
    throw new Error('selectDirectory is not supported in browser');
  }

  override async selectFiles(): Promise<string[]> {
    throw new Error('selectFiles is not supported in browser');
  }

  override async saveFile(filename: string, content: string | ArrayBuffer, mimeType?: string): Promise<boolean> {
    try {
      const blob = new Blob([content], { type: mimeType || 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      return true;
    } catch (error) {
      console.error('Failed to save file:', error);
      return false;
    }
  }
}
