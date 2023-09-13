import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button.styles';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    full: false,
    mode: 'elevated',
  },
};
