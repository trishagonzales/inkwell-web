import { PatternProperties } from '@styled-system/types/pattern';

export const patterns = {
  extend: {
    container: {
      transform(rest: PatternProperties) {
        return {
          maxWidth: 'page-width',
          marginX: 'auto',
          paddingX: { base: 4, md: 6, lg: 8 },
          position: 'relative',
          ...rest,
        };
      },
    },
  },
};
