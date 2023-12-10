import * as Ark from '@ark-ui/react/carousel';
import { styled } from '@styled-system/jsx';
import { carousel, type CarouselVariantProps } from '@styled-system/recipes';
import { createStyleContext } from '@utils/create-style-context';

const { withProvider, withContext } = createStyleContext(carousel);

export type CarouselProps = Ark.CarouselProps & CarouselVariantProps;

const Root = withProvider(styled(Ark.Carousel.Root), 'root');
const Control = withContext(styled(Ark.Carousel.Control), 'control');
const Indicator = withContext(styled(Ark.Carousel.Indicator), 'indicator');
const IndicatorGroup = withContext(
  styled(Ark.Carousel.IndicatorGroup),
  'indicatorGroup'
);
const NextSlideTrigger = withContext(
  styled(Ark.Carousel.NextSlideTrigger),
  'nextSlideTrigger'
);
const PrevSlideTrigger = withContext(
  styled(Ark.Carousel.PrevSlideTrigger),
  'prevSlideTrigger'
);
const Slide = withContext(styled(Ark.Carousel.Slide), 'slide');
const SlideGroup = withContext(styled(Ark.Carousel.SlideGroup), 'slideGroup');
const Viewport = withContext(styled(Ark.Carousel.Viewport), 'viewport');

export const Carousel = Object.assign(Root, {
  Root,
  Control,
  Indicator,
  IndicatorGroup,
  NextSlideTrigger,
  PrevSlideTrigger,
  Slide,
  SlideGroup,
  Viewport,
});
