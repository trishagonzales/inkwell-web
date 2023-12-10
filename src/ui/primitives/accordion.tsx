import * as Ark from '@ark-ui/react/accordion';
import { styled } from '@styled-system/jsx';
import { accordion, type AccordionVariantProps } from '@styled-system/recipes';
import { createStyleContext } from '@utils/create-style-context';

const { withProvider, withContext } = createStyleContext(accordion);

export type AccordionProps = Ark.AccordionProps & AccordionVariantProps;

const Root = withProvider(styled(Ark.Accordion.Root), 'root');
const Content = withContext(styled(Ark.Accordion.Content), 'content');
const Item = withContext(styled(Ark.Accordion.Item), 'item');
const Trigger = withContext(styled(Ark.Accordion.Trigger), 'trigger');

export const Accordion = Object.assign(Root, {
  Root,
  Content,
  Item,
  Trigger,
});
