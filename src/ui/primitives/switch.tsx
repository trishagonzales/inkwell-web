import * as Ark from '@ark-ui/react/switch';
import { styled } from '@styled-system/jsx';
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from '@styled-system/recipes';
import { createStyleContext } from '@utils/create-style-context';

const { withProvider, withContext } = createStyleContext(switchRecipe);

export type SwitchProps = Ark.SwitchProps & SwitchRecipeVariantProps;

const Root = withProvider(styled(Ark.Switch.Root), 'root');
const Control = withContext(styled(Ark.Switch.Control), 'control');
const Input = withContext(styled(Ark.Switch.Input), 'input');
const Label = withContext(styled(Ark.Switch.Label), 'label');
const Thumb = withContext(styled(Ark.Switch.Thumb), 'thumb');

export const Switch = Object.assign(Root, {
  Root,
  Control,
  Input,
  Label,
  Thumb,
});
