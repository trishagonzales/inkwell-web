import { defineSemanticTokens } from '@pandacss/dev';

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      canvas: {
        value: {
          base: '{colors.grayscale.25}',
          _dark: '{colors.grayscale.950}',
        },
      },
      default: {
        value: { base: '{colors.white}', _dark: '{colors.grayscale.950}' },
      },
      subtle: {
        value: {
          base: '{colors.grayscale.100}',
          _dark: '{colors.grayscale.900}',
        },
      },
      muted: {
        value: {
          base: '{colors.grayscale.200}',
          _dark: '{colors.grayscale.800}',
        },
      },
      emphasized: {
        value: {
          base: '{colors.grayscale.300}',
          _dark: '{colors.grayscale.600}',
        },
      },
      disabled: {
        value: {
          base: '{colors.grayscale.200}',
          _dark: '{colors.grayscale.700}',
        },
      },
    },
    fg: {
      default: {
        value: { base: '{colors.grayscale.950}', _dark: '{colors.white}' },
      },
      emphasized: {
        value: {
          base: '{colors.grayscale.700}',
          _dark: '{colors.grayscale.200}',
        },
      },
      muted: {
        value: {
          base: '{colors.grayscale.600}',
          _dark: '{colors.grayscale.300}',
        },
      },
      subtle: {
        value: {
          base: '{colors.grayscale.500}',
          _dark: '{colors.grayscale.400}',
        },
      },
      disabled: {
        value: {
          base: '{colors.grayscale.200}',
          _dark: '{colors.grayscale.800}',
        },
      },
    },
    accent: {
      default: {
        value: { base: '{colors.primary.600}', _dark: '{colors.primary.200}' },
      },
      emphasized: {
        value: {
          base: '{colors.primary.700}',
          _dark: '{colors.primary.300}',
        },
      },
      fg: {
        value: { base: '{colors.white}', _dark: '{colors.grayscale.950}' },
      },
    },

    border: {
      default: {
        value: {
          base: '{colors.grayscale.200}',
          _dark: '{colors.grayscale.800}',
        },
      },
      emphasized: {
        value: {
          base: '{colors.grayscale.300}',
          _dark: '{colors.grayscale.700}',
        },
      },
      outline: {
        value: {
          base: '{colors.grayscale.600}',
          _dark: '{colors.grayscale.400}',
        },
      },
      accent: {
        value: { base: '{colors.grayscale.900}', _dark: '{colors.white}' },
      },
      disabled: {
        value: {
          base: '{colors.grayscale.200}',
          _dark: '{colors.grayscale.800}',
        },
      },
    },
  },

  shadows: {
    accent: {
      value: '0 0 0 1px {colors.border.accent}',
    },
    outline: {
      value: '0 0 0 1px {colors.border.outline}',
    },
    xs: {
      value: {
        base: '0px 1px 2px rgba(23, 23, 23,  0.1)',
        _dark: '0px 1px 2px rgba(0, 0, 0, 1.0)',
      },
    },
    sm: {
      value: {
        base: '0px 2px 4px rgba(23, 23, 23,  0.1)',
        _dark: '0px 2px 4px rgba(0, 0, 0, 1.0)',
      },
    },
    md: {
      value: {
        base: '0px 4px 8px rgba(23, 23, 23,  0.1)',
        _dark: '0px 4px 8px rgba(0, 0, 0, 1.0)',
      },
    },
    lg: {
      value: {
        base: '0px 8px 16px rgba(23, 23, 23,  0.1)',
        _dark: '0px 8px 16px rgba(0, 0, 0, 1.0)',
      },
    },
    xl: {
      value: {
        defaubaselt: '0px 16px 24px rgba(23, 23, 23,  0.1)',
        _dark: '0px 16px 24px rgba(0, 0, 0, 1.0)',
      },
    },
  },

  radii: {
    l1: { value: '{radii.xs}' },
    l2: { value: '{radii.sm}' },
    l3: { value: '{radii.md}' },
  },

  spacing: {
    inset: {
      sm: { value: '8px 8px 8px 8px' },
      md: { value: '16px 16px 16px 16px' },
      lg: { value: '32px 32px 32px 32px' },
    },
    'squish-inset': {
      sm: { value: '12px 16px 12px 16px' },
    },
  },
});
