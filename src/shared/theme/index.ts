// import { definePreset } from '@pandacss/dev';
// import pandaPreset from '@pandacss/preset-panda';
// import basePreset from '@pandacss/preset-base';

// const pandaTheme = pandaPreset.theme;

// export default definePreset({
//   globalCss: {
//     ':root': {
//       color: '{grayscale}',
//     },
//     body: {
//       minH: '100vh',
//       bgColor: {
//         base: '{colors.grayscale.50}',
//         _dark: '{colors.grayscale.900}',
//       },
//     },
//   },

//   conditions: {
//     light: '[data-color-mode="light"] &',
//     dark: '[data-color-mode="dark"] &',
//   },

//   theme: {
//     tokens: {
//       lineHeights: pandaTheme.tokens.lineHeights,
//       letterSpacings: pandaTheme.tokens.letterSpacings,
//       shadows: pandaTheme.tokens.shadows,
//       sizes: pandaTheme.tokens.sizes,
//       easings: pandaTheme.tokens.easings,
//       durations: pandaTheme.tokens.durations,
//       radii: pandaTheme.tokens.radii,

//       colors: {
//         primary: {
//           DEFAULT: pandaTheme.tokens.colors.orange['500'],
//           ...pandaTheme.tokens.colors.orange,
//         },
//         grayscale: {
//           DEFAULT: pandaTheme.tokens.colors.neutral['500'],
//           ...pandaTheme.tokens.colors.neutral,
//         },
//       },

//       fonts: {
//         heading: { value: 'var(--font-inter)' },
//         body: { value: 'var(--font-inter)' },
//       },

//       fontSizes: {
//         '3xl': { value: '3.052rem' }, // 48.83px
//         '2xl': { value: '2.441rem' }, // 39.06px
//         xl: { value: '1.953rem' }, // 31.25px
//         lg: { value: '1.563rem' }, // 25.00px
//         md: { value: '1.25rem' }, // 20.00px
//         sm: { value: '1rem' }, // 16.00px
//         xs: { value: '0.875rem' }, // 14.00px
//       },

//       fontWeights: {
//         regular: { value: '400' },
//         semibold: { value: '600' },
//         extrabold: { value: '800' },
//       },

//       // radii: {
//       //   full: { value: pandaTheme.tokens.radii.full },
//       // },

//       spacing: {
//         2: { value: '2px' },
//         4: { value: '4px' },
//         8: { value: '8px' },
//         12: { value: '12px' },
//         16: { value: '16px' },
//         20: { value: '20px' },
//         24: { value: '24px' },
//         28: { value: '28px' },
//         32: { value: '32px' },
//         48: { value: '48px' },
//         64: { value: '64px' },

//         xs: { value: '4px' },
//         sm: { value: '8px' },
//         md: { value: '16px' },
//         lg: { value: '32px' },

//         inset: {
//           sm: { value: '8px 8px 8px 8px' },
//           md: { value: '16px 16px 16px 16px' },
//           lg: { value: '32px 32px 32px 32px' },
//         },
//         squishInset: {
//           sm: { value: '4px 8px 4px 8px' },
//           md: { value: '8px 16px 8px 16px' },
//           lg: { value: '16px 32px 16px 32px' },
//         },
//         stretchInset: {
//           sm: { value: '12px 8px 12px 8px' },
//           md: { value: '24px 16px 24x 16px' },
//           lg: { value: '48px 32px 48x 32x' },
//         },
//       },
//     },

//     textStyles: {
//       'title-1': {
//         value: {
//           fontSize: '{fontSizes["3xl"]}',
//           fontWeight: '{fontWeights.extrabold}',
//         },
//       },
//       'title-2': {
//         value: {
//           fontSize: '{fontSizes["2xl"]}',
//           fontWeight: '{fontWeights.extrabold}',
//         },
//       },
//       'title-3': {
//         value: {
//           fontSize: '{fontSizes.xl}',
//           fontWeight: '{fontWeights.semibold}',
//         },
//       },
//       'title-4': {
//         value: {
//           fontSize: '{fontSizes.lg}',
//           fontWeight: '{fontWeights.semibold}',
//         },
//       },
//       heading: {
//         value: {
//           fontSize: '{fontSizes.md}',
//           fontWeight: '{fontWeights.semibold}',
//         },
//       },
//       subheading: {
//         value: {
//           fontSize: '{fontSizes.sm}',
//           fontWeight: '{fontWeights.semibold}',
//         },
//       },
//       'body-lg': {
//         value: {
//           fontSize: '{fontSizes.md}',
//           fontWeight: '{fontWeights.regular}',
//         },
//       },
//       body: {
//         value: {
//           fontSize: '{fontSizes.sm}',
//           fontWeight: '{fontWeights.regular}',
//         },
//       },
//       'body-sm': {
//         value: {
//           fontSize: '{fontSizes.xs}',
//           fontWeight: '{fontWeights.regular}',
//         },
//       },
//       caption: {
//         value: {
//           fontSize: '{fontSizes.xs}',
//           fontWeight: '{fontWeights.semibold}',
//           textTransform: 'uppercase',
//         },
//       },
//     },
//   },
// });
