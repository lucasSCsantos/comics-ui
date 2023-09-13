import { createGlobalStyle } from 'styled-components';

import IntegralRegular from '../fonts/IntegralCF-Regular.otf';
import IntegralRegularOblique from '../fonts/IntegralCF-RegularOblique.otf';

export const GlobalStyle = createGlobalStyle`
	@font-face {
    font-family: 'Integral';
    src: url(${IntegralRegular}) format('opentype');
    font-weight: 400; 
    font-style: normal; 
  }

  @font-face {
    font-family: 'Integral';
    src: url(${IntegralRegularOblique}) format('opentype');
    font-weight: 400; 
    font-style: italic; 
  }

  * {
    margin: 0;
		padding: 0;
		border: 0;
		font-family: 'Poppins', Arial, Helvetica, sans-serif;
		box-sizing: border-box;
  }
`;
