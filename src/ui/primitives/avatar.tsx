import * as Ark from '@ark-ui/react/avatar';
import { styled } from '@styled-system/jsx';
import { avatar, type AvatarVariantProps } from '@styled-system/recipes';
import { createStyleContext } from '@utils/create-style-context';

const { withProvider, withContext } = createStyleContext(avatar);

export type AvatarProps = Ark.AvatarProps & AvatarVariantProps;

const Root = withProvider(styled(Ark.Avatar.Root), 'root');
const Fallback = withContext(styled(Ark.Avatar.Fallback), 'fallback');
const Image = withContext(styled(Ark.Avatar.Image), 'image');

export const Avatar = Object.assign(Root, {
  Root,
  Fallback,
  Image,
});
