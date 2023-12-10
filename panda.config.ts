// import customTheme from '@shared/theme';
import { defineConfig } from '@pandacss/dev';
import customPreset from './src/styles';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: 'styled-system',
  jsxFramework: 'react',
  hash: process.env.NODE_ENV === 'production',

  presets: ['@pandacss/dev/presets', customPreset],
  // presets: [customTheme],
});
