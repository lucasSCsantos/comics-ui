const themeTemplate = {
  font: {
    weight: {
      regular: 400,
    },
    size: {
      max: 64,
      xxxl: 57,
      xxl: 45,
      xl: 32,
      l: 28,
      m: 24,
      s: 22,
      xs: 18,
      xxs: 16,
      xxxs: 14,
      min: 12,
    },
    lineHeight: {
      max: 76,
      xxxl: 64,
      xxl: 52,
      xl: 40,
      l: 36,
      m: 32,
      s: 28,
      xs: 24,
      xxs: 24,
      xxxs: 20,
      min: 16,
    },
    family: {
      poppins: `"Poppins", Arial, Helvetica, sans-serif`,
      integral: `"Integral", Impact, Arial, Helvetica, sans-serif`,
    },
  },
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
  },
  colors: {
    dark: {
      error: '#FC4C01',
      foreground: '#262626',
      disabled: '#7a7a7a',
    },
    light: {
      error: '#B3261E',
      foreground: '#DEDEDE',
      disabled: '#7a7a7a',
    },
  },
};

const generateTheme = (
  dark: string,
  light: string,
  primary: string,
  secondary: string,
) => {
  return {
    dark: {
      ...themeTemplate,
      colors: {
        ...themeTemplate.colors.dark,
        background: dark,
        primary,
        secondary,
      },
    },
    light: {
      ...themeTemplate,
      colors: {
        ...themeTemplate.colors.light,
        background: light,
        primary,
        secondary,
      },
    },
  };
};

export const theme = {
  yellow: generateTheme('#16160A', '#FFFEE8', '#908200', '#DADE0B'),
  green: generateTheme('#0A160B', '#EDFFE8', '#005F4B', '#00903E'),
  blue: generateTheme('#0A0E16', '#E8F3FF', '#005C90', '#00A3FF'),
};

export type ComicsUiThemeProps = (typeof theme)['blue']['dark'];
