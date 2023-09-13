import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './global';
import { theme } from './theme';

export interface ComicsUiWrapperProps {
  children: ReactNode;
  color?: 'yellow' | 'green' | 'blue';
  dark?: boolean;
}

export function ComicsUiWrapper({
  children,
  color = 'yellow',
  dark,
}: ComicsUiWrapperProps) {
  return (
    <ThemeProvider theme={theme[color][dark ? 'dark' : 'light']}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
