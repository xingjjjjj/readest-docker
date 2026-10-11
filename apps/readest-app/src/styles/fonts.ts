import { isCJKEnv } from '@/utils/misc';
import { getFilename } from '@/utils/path';
import { md5Fingerprint } from '@/utils/md5';

export type FontFormat = 'ttf' | 'otf' | 'woff' | 'woff2';

/**
 * CJK 字体自托管策略（零外链）：
 * - 所有 @font-face 只用 local() 引用用户 OS 已安装的系统字体
 * - 不再注入任何境外 CDN 样式表（Google Fonts/jsdelivr/cdnjs/imagekit/onlinewebfonts）
 * - 系统字体在 Windows/macOS/Linux 均已内置（楷体/仿宋/黑体/宋体等）
 * - 需要特殊字体的用户可通过"自定义字体"功能上传（已有功能）
 */
const getSystemCJKFontFaces = () => `
  @font-face {
    font-family: "FangSong";
    font-display: swap;
    src: local("Fang Song"), local("FangSong"), local("STFangsong"),
         local("Noto Serif CJK"), local("Source Han Serif SC");
  }
  @font-face {
    font-family: "Kaiti";
    font-display: swap;
    src: local("Kai"), local("KaiTi"), local("STKaiti"),
         local("AR PL UKai"), local("LXGW WenKai GB Screen");
  }
  @font-face {
    font-family: "Heiti";
    font-display: swap;
    src: local("Hei"), local("SimHei"), local("Heiti SC"),
         local("WenQuanYi Zen Hei"), local("Source Han Sans SC");
  }
  @font-face {
    font-family: "XiHeiti";
    font-display: swap;
    src: local("PingFang SC"), local("Microsoft YaHei"),
         local("WenQuanYi Micro Hei"), local("FZHei-B01");
  }
  @font-face {
    font-family: "Songti";
    font-display: swap;
    src: local("SimSun"), local("Songti SC"), local("Noto Serif CJK SC"),
         local("Source Han Serif SC");
  }
  @font-face {
    font-family: "XiSongti";
    font-display: swap;
    src: local("STSong"), local("Songti SC"), local("Noto Serif CJK SC");
  }
`;

export const mountAdditionalFonts = async (document: Document, isCJK = false) => {
  const mountCJKFonts = isCJK || isCJKEnv();

  if (mountCJKFonts) {
    const style = document.createElement('style');
    style.id = 'cjk-system-fonts';
    style.textContent = getSystemCJKFontFaces();
    document.head.appendChild(style);
  }
  // 不注入任何外部 CDN 字体链接——每翻一章节省 8-10 个境外请求
  // 阅读器字体回退链: 系统衬线 → 系统无衬线 → monospace
};

export type FontStyle = 'normal' | 'italic' | 'oblique';

export interface CustomFont {
  id: string;
  name: string;
  path: string;
  family?: string;
  style?: string;
  weight?: number;
  variable?: boolean;

  downloadedAt?: number;
  deletedAt?: number;

  blobUrl?: string;
  loaded?: boolean;
  error?: string;
}

export type CustomFontInfo = Partial<CustomFont> &
  Required<Pick<CustomFont, 'path' | 'name' | 'family' | 'style' | 'weight' | 'variable'>>;

export function getFontName(path: string): string {
  const fileName = getFilename(path);
  return fileName.replace(/\.(ttf|otf|woff|woff2)$/i, '');
}

export function getFontId(name: string): string {
  return md5Fingerprint(name);
}

export function getFontFormat(path: string): FontFormat {
  const extension = path.toLowerCase().split('.').pop();
  switch (extension) {
    case 'ttf':
      return 'ttf';
    case 'otf':
      return 'otf';
    case 'woff':
      return 'woff';
    case 'woff2':
      return 'woff2';
    default:
      return 'ttf';
  }
}

export function getMimeType(format: FontFormat): string {
  const types = { ttf: 'font/ttf', otf: 'font/otf', woff: 'font/woff', woff2: 'font/woff2' };
  return types[format] || 'font/ttf';
}

export function getCSSFormatString(format: FontFormat): string {
  const formats = { ttf: 'truetype', otf: 'opentype', woff: 'woff', woff2: 'woff2' };
  return formats[format] || 'truetype';
}

export function createFontFamily(name: string): string {
  return name.replace(/\s+/g, ' ').trim();
}

export function createFontCSS(font: CustomFont): string {
  const format = getFontFormat(font.path);
  const cssFormat = getCSSFormatString(format);
  const fontFamily = createFontFamily(font.family || font.name);
  const fontStyle = font.style || 'normal';
  const fontWeight = font.weight || 400;
  const variable = font.variable || false;
  if (!font.blobUrl) {
    throw new Error(`Blob URL not available for font: ${font.name}`);
  }

  const css = `
    @font-face {
      font-family: "${fontFamily}";
      ${variable ? '' : `font-style: ${fontStyle};`}
      ${variable ? '' : `font-weight: ${fontWeight};`}
      src: url("${font.blobUrl}") format("${cssFormat}");
      font-display: swap;
    }
  `;

  return css;
}

export function createCustomFont(
  path: string,
  options?: Partial<Omit<CustomFont, 'id' | 'path'>>,
): CustomFont {
  const name = options?.name || getFontName(path);
  return {
    id: getFontId(name),
    name,
    family: options?.family,
    style: options?.style,
    weight: options?.weight,
    variable: options?.variable,
    path,
  };
}

export const mountCustomFont = (document: Document, font: CustomFont) => {
  const fontStyleId = `custom-font-${font.id}`;
  const styleElement = document.getElementById(fontStyleId) || document.createElement('style');
  styleElement.id = fontStyleId;
  styleElement.textContent = createFontCSS(font);

  if (!styleElement.parentNode) {
    document.head.appendChild(styleElement);
  }
};
