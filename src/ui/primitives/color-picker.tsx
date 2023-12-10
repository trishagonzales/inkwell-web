import * as Ark from '@ark-ui/react/color-picker';
import { styled } from '@styled-system/jsx';
import {
  colorPicker,
  type ColorPickerVariantProps,
} from '@styled-system/recipes';
import { createStyleContext } from '@utils/create-style-context';

const { withProvider, withContext } = createStyleContext(colorPicker);

export type ColorPickerProps = Ark.ColorPickerProps & ColorPickerVariantProps;

const Root = withProvider(styled(Ark.ColorPicker.Root), 'root');
const Area = withContext(styled(Ark.ColorPicker.Area), 'area');
const AreaGradient = withContext(
  styled(Ark.ColorPicker.AreaGradient),
  'areaGradient'
);
const AreaThumb = withContext(styled(Ark.ColorPicker.AreaThumb), 'areaThumb');
const ChannelInput = withContext(
  styled(Ark.ColorPicker.ChannelInput),
  'channelInput'
);
const ChannelSliderBackground = withContext(
  styled(Ark.ColorPicker.ChannelSliderBackground),
  'channelSliderBackground'
);
const ChannelSliderThumb = withContext(
  styled(Ark.ColorPicker.ChannelSliderThumb),
  'channelSliderThumb'
);
const ChannelSliderTrack = withContext(
  styled(Ark.ColorPicker.ChannelSliderTrack),
  'channelSliderTrack'
);
const Content = withContext(styled(Ark.ColorPicker.Content), 'content');
const EyeDropperTrigger = withContext(
  styled(Ark.ColorPicker.EyeDropperTrigger),
  'eyeDropperTrigger'
);
const Swatch = withContext(styled(Ark.ColorPicker.Swatch), 'swatch');
const SwatchBackground = withContext(
  styled(Ark.ColorPicker.SwatchBackground),
  'swatchBackground'
);
const SwatchGroup = withContext(
  styled(Ark.ColorPicker.SwatchGroup),
  'swatchGroup'
);

export const ColorPicker = Object.assign(Root, {
  Root,
  Area,
  AreaGradient,
  AreaThumb,
  ChannelInput,
  ChannelSliderBackground,
  ChannelSliderThumb,
  ChannelSliderTrack,
  Content,
  EyeDropperTrigger,
  Swatch,
  SwatchBackground,
  SwatchGroup,
});
