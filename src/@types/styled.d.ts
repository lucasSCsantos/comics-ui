// import original module declarations
import 'styled-components';

import { ComicsUiThemeProps } from '../global/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ComicsUiThemeProps {}
}
