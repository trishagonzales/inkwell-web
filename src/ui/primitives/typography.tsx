import { HTMLStyledProps, styled } from '@styled-system/jsx';
import type { PropsWithChildren } from 'react';

type TextTags = 'p' | 'span';
type TextCustomProps = {
  as?: TextTags;
};

type TextProps = TextCustomProps &
  PropsWithChildren &
  HTMLStyledProps<TextTags>;

export function Text(props: TextProps) {
  const { as = 'p', children, ...rest } = props;
  const Component = styled(as);

  return <Component {...rest}>{children}</Component>;
}

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingCustomProps = {
  as?: HeadingTags;
};

type HeadingProps = HeadingCustomProps &
  PropsWithChildren &
  HTMLStyledProps<HeadingTags>;

export function Heading(props: HeadingProps) {
  const { as = 'h2', children, ...rest } = props;
  const Component = styled(as);

  return <Component {...rest}>{children}</Component>;
}
