'use client';

import clsx from 'clsx';
import React, { useRef } from 'react';

import { useEnv } from '@/context/EnvContext';
import { useThemeStore } from '@/store/themeStore';
import { useTrafficLight } from '@/hooks/useTrafficLight';
import WindowButtons from '@/components/WindowButtons';

const LibraryHeader: React.FC = () => {
  const { appService } = useEnv();
  const { systemUIVisible, statusBarHeight } = useThemeStore();
  const { isTrafficLightVisible } = useTrafficLight();

  const headerRef = useRef<HTMLDivElement>(null);
  const { safeAreaInsets: insets } = useThemeStore();

  const windowButtonVisible = appService?.hasWindowBar && !isTrafficLightVisible;

  if (!insets) return null;

  return (
    <div
      ref={headerRef}
      className={clsx(
        'titlebar z-10 flex h-[36px] w-full items-center pb-0 pr-4 sm:h-[32px]',
        windowButtonVisible ? 'sm:pr-4' : 'sm:pr-6',
        isTrafficLightVisible ? 'pl-16' : 'pl-4',
      )}
      style={{
        marginTop: appService?.hasSafeAreaInset
          ? `max(${insets.top}px, ${systemUIVisible ? statusBarHeight : 0}px)`
          : '0px',
      }}
    >
      <div className='flex w-full items-center justify-end'>
        {appService?.hasWindowBar && (
          <WindowButtons
            headerRef={headerRef}
            showMinimize={windowButtonVisible}
            showMaximize={windowButtonVisible}
            showClose={windowButtonVisible}
          />
        )}
      </div>
    </div>
  );
};

export default LibraryHeader;
