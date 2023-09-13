import type { Preview } from '@storybook/react';
import { ComicsUiWrapper } from '../src/global/wrapper';
import React, { FC, ReactNode } from 'react';
import { theme } from '../src/global/theme';
import { withThemeProvider } from 'storybook-addon-theme-provider';

interface StoryThemeProps {
  name: keyof typeof theme;
  dark: boolean;
}

const providerFn: FC<{ children?: ReactNode, theme?: unknown; }> = ({ children, theme }) => {
  const { name, dark } = theme ? theme as StoryThemeProps : { name: "yellow", dark: false } as StoryThemeProps;
  return <ComicsUiWrapper color={name} dark={dark}>{children}</ComicsUiWrapper>
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
   globals: {
        selectedTheme: 'Primary',
        themes: [
            {
                name: 'Yellow',
                color: '#DADE0B',
                themeObject: {
                    name: 'yellow',
                }
            },
            {
                name: 'Yellow-Dark',
                color: '#908200',
                themeObject: {
                  name: 'yellow',
                  dark: true
                }
            },
            {
               name: 'Green',
                color: '#00903E',
                themeObject: {
                    name: 'green',
                }
            },
            {
               name: 'Green-Dark',
                color: '#005F4B',
                themeObject: {
                  name: 'green',
                  dark: true
                }
            },
            {
               name: 'Blue',
                color: '#00A3FF',
                themeObject: {
                    name: 'blue',
                }
            },
            {
               name: 'Blue-Dark',
                color: '#005C90',
                themeObject: {
                    name: 'blue',
                    dark: true
                }
            }
        ]
    },
  decorators: [withThemeProvider(providerFn)],
};

export default preview;
