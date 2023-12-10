'use client';

import { Button } from '@ui/primitives/button';
import { IconButton } from '@ui/primitives/icon-button';
import { useTheme as useColorMode } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ColorModeToggle() {
  const { theme, setTheme } = useColorMode();

  function switchColorMode() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    // <IconButton
    <Button
      variant='tertiary'
      px='2'
      aria-label='switch color mode'
      onClick={switchColorMode}
    >
      {theme === 'light' ? <FiSun /> : <FiMoon />}
    </Button>
    // </IconButton>
  );
}
