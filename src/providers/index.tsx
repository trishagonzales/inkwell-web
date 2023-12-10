'use client';

import { ThemeProvider as ColorModeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

export default function Providers(props: PropsWithChildren) {
  return (
    <ColorModeProvider
      storageKey='color-mode'
      attribute='data-color-mode'
      defaultTheme='light'
      enableSystem={true}
      themes={['light', 'dark']}
    >
      {props.children}
    </ColorModeProvider>
  );
}
