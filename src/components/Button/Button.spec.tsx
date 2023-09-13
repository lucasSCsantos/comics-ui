import '@testing-library/jest-dom';
import 'jest-styled-components';

import { fireEvent, screen } from '@testing-library/react';

import { renderWithComicsUi } from '../../global/render';
import { theme } from '../../global/theme';
// import renderer from 'react-test-renderer';
import { Button, ButtonProps } from './Button.styles';

const { primary, secondary, disabled } = theme.yellow.light.colors;

describe('Button Component', () => {
  let defaultTestPassed = false;
  it('renders with children', () => {
    renderWithComicsUi(<Button>Button</Button>);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = renderWithComicsUi(
      <Button onClick={onClickMock}>Click Me</Button>,
    );
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("doesn't call onClick handler when is disabled", () => {
    const onClickMock = jest.fn();
    const { getByText } = renderWithComicsUi(
      <Button onClick={onClickMock} disabled>
        Click Me
      </Button>,
    );
    const buttonElement = getByText('Click Me');

    fireEvent.click(buttonElement);

    expect(onClickMock).not.toHaveBeenCalled();
    expect(onClickMock).not.toHaveBeenCalledTimes(1);
  });

  it('applies default styles', () => {
    const { getByText } = renderWithComicsUi(<Button>Button</Button>);

    const button = getByText('Button');

    expect(button).toHaveStyleRule('background-color', primary);
    expect(button).toHaveStyleRule('background-color', secondary, {
      modifier: ':hover',
    });
    expect(button).toHaveStyleRule('background-color', disabled, {
      modifier: ':disabled',
    });
    expect(button).toHaveStyleRule('border-radius', '100px');
    expect(button).toHaveStyleRule('display', 'flex');
    expect(button).toHaveStyleRule('flex-direction', 'row');
    expect(button).toHaveStyleRule('gap', '10px');
    expect(button).toHaveStyleRule('justify-content', 'center');
    expect(button).toHaveStyleRule('align-items', 'center');

    defaultTestPassed = true;
  });
  it("applies correct styles for 'elevated' mode", () => {
    const { getByText } = renderWithComicsUi(<Button>Elevated</Button>);

    const buttonElevated = getByText('Elevated');

    if (defaultTestPassed) {
      expect(buttonElevated).toHaveStyleRule('box-shadow', '8px 8px 0 rgb(0, 0, 0)');
      expect(buttonElevated).toHaveStyleRule('border', '2px solid #262626');
    } else {
      throw new Error('Default styles are not applied');
    }
  });

  it("applies correct styles for 'outlined' mode", () => {
    const { getByText } = renderWithComicsUi(<Button mode="outlined">Outlined</Button>);

    const buttonOutlined = getByText('Outlined');

    if (defaultTestPassed) {
      expect(buttonOutlined).not.toHaveStyleRule('box-shadow', '8px 8px 0 rgb(0, 0, 0)');
      expect(buttonOutlined).toHaveStyleRule('border', '2px solid #262626');
    } else {
      throw new Error('Default styles are not applied');
    }
  });
  it("applies correct styles for 'text' mode", () => {
    const { getByText } = renderWithComicsUi(<Button mode="text">Text</Button>);

    const buttonText = getByText('Text');

    if (defaultTestPassed) {
      expect(buttonText).not.toHaveStyleRule('box-shadow', '8px 8px 0 rgb(0, 0, 0)');
      expect(buttonText).not.toHaveStyleRule('border', '2px solid #262626');
    } else {
      throw new Error('Default styles are not applied');
    }
  });

  it("don't applies effect styles when disabled", () => {
    const { getByText } = renderWithComicsUi(<Button disabled>Text</Button>);

    const button = getByText('Text');

    if (defaultTestPassed) {
      expect(button).not.toHaveStyleRule('background-color', secondary, {
        modifier: ':hover',
      });
      expect(button).toHaveStyleRule('background-color', disabled, {
        modifier: ':hover',
      });
    } else {
      throw new Error('Default styles are not applied');
    }
  });
  it('applies full container size when full prop is true', () => {
    const props: Partial<ButtonProps> = { full: true };
    const { getByText } = renderWithComicsUi(<Button {...props}>Full</Button>);
    const buttonElement = getByText('Full');
    expect(buttonElement).toHaveStyleRule('width', '100%');
  });

  // });
  // it('it works', () => {
  //   const tree = renderer.create(<Button>Button</Button>).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
