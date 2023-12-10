import * as Ark from '@ark-ui/react/checkbox';
import { styled } from '@styled-system/jsx';
import { checkbox, type CheckboxVariantProps } from '@styled-system/recipes';
import { createStyleContext } from '@utils/create-style-context';

const { withProvider, withContext } = createStyleContext(checkbox);

export type CheckboxProps = Ark.CheckboxProps & CheckboxVariantProps;

const Root = withProvider(styled(Ark.Checkbox.Root), 'root');
const Control = withContext(styled(Ark.Checkbox.Control), 'control');
const Label = withContext(styled(Ark.Checkbox.Label), 'label');

export const Checkbox = Object.assign(Root, {
  Root,
  Control,
  Label,
});
