import type { PropsWithChildren } from 'react';
import { Container, HStack, styled } from '@styled-system/jsx';
import ColorModeToggle from '@ui/elements/color-mode-toggle';
import { Button } from '@ui/primitives/button';
import { Link } from '@ui/primitives/link';
import { Heading } from '@ui/primitives/typography';

export default function Navbar() {
  return (
    <styled.header boxShadow='md' position='sticky'>
      <Container>
        <HStack justify='space-between' minH='64px'>
          <BrandLogo />

          <HStack gap='6'>
            <NavItem href='#'>Home</NavItem>
            <NavItem href='#'>About</NavItem>
            <NavItem href='#'>Services</NavItem>
            <NavItem href='#'>Portfolio</NavItem>
            <NavItem href='#'>Testimonials</NavItem>
            <NavItem href='#'>Blog</NavItem>
            <NavItem href='#'>Contact</NavItem>
          </HStack>

          <HStack justify='space-between'>
            <ColorModeToggle />
            <Button variant='primary'>Contact Us</Button>
          </HStack>
        </HStack>
      </Container>
    </styled.header>
  );
}

function BrandLogo() {
  return (
    <Heading textStyle='2xl' fontWeight='semibold'>
      Inkwell
    </Heading>
  );
}

type NavItemProps = PropsWithChildren<{
  href: string;
}>;

function NavItem(props: NavItemProps) {
  return (
    <Link href={props.href} variant='navbar'>
      {props.children}
    </Link>
  );
}
