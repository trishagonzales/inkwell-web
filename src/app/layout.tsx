import '../index.css';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '../providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Inkwell',
};

interface CustomProps {
  navbar: React.ReactNode;
}

type Props = CustomProps & PropsWithChildren;

export default function RootLayout(props: Props) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Providers>
          {props.navbar}
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
