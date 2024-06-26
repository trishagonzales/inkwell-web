import { defineTokens } from '@pandacss/dev';
import { animations, easings } from './animations';
import { colors } from './colors';
import { lineHeights } from './line-heights';
import { radii } from './radii';
import { zIndex } from './z-index';
import { sizes } from './sizes';

export const tokens = defineTokens({
  animations,
  colors,
  easings,
  lineHeights,
  radii,
  zIndex,
  sizes,
});
