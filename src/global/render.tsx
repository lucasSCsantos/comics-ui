import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import { theme } from './theme';
import { ComicsUiWrapper } from './wrapper';

export function renderWithComicsUi(
  component: ReactElement,
  color?: keyof typeof theme | Omit<RenderOptions, 'queries'>,
  dark?: boolean,
  options?: Omit<RenderOptions, 'queries'>,
) {
  return render(
    <ComicsUiWrapper color={typeof color === 'object' ? 'yellow' : color} dark={dark}>
      {component}
    </ComicsUiWrapper>,
    typeof color === 'object' ? color : options,
  );
}
