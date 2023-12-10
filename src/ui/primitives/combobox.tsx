import * as Ark from '@ark-ui/react/combobox';
import { styled } from '@styled-system/jsx';
import { combobox, type ComboboxVariantProps } from '@styled-system/recipes';
import { createStyleContext } from '@utils/create-style-context';

const { withProvider, withContext } = createStyleContext(combobox);

export type ComboboxProps = Ark.ComboboxProps & ComboboxVariantProps;

const Root = withProvider(styled(Ark.Combobox.Root), 'root');
const ClearTrigger = withContext(
  styled(Ark.Combobox.ClearTrigger),
  'clearTrigger'
);
const Content = withContext(styled(Ark.Combobox.Content), 'content');
const Control = withContext(styled(Ark.Combobox.Control), 'control');
const Input = withContext(styled(Ark.Combobox.Input), 'input');
const Label = withContext(styled(Ark.Combobox.Label), 'label');
const Option = withContext(styled(Ark.Combobox.Option), 'option');
const OptionGroup = withContext(
  styled(Ark.Combobox.OptionGroup),
  'optionGroup'
);
const OptionGroupLabel = withContext(
  styled(Ark.Combobox.OptionGroupLabel),
  'optionGroupLabel'
);
const Positioner = withContext(styled(Ark.Combobox.Positioner), 'positioner');
const Trigger = withContext(styled(Ark.Combobox.Trigger), 'trigger');

export const Combobox = Object.assign(Root, {
  Root,
  ClearTrigger,
  Content,
  Control,
  Input,
  Label,
  Option,
  OptionGroup,
  OptionGroupLabel,
  Positioner,
  Trigger,
});
