import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children?: ReactNode | ReactNode[];
  full?: boolean;
  mode?: 'elevated' | 'outlined' | 'text';
}

export const Button = styled.button<ButtonProps>``;
