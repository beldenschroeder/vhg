import { style } from '@vanilla-extract/css';
import { mediaQueries } from '../styles/breakpoints';
import { components } from '../styles/mui';

const navBarToolbarHeight = components.Toolbar.height.sm;
const navBarToolbarHeightMobile = components.Toolbar.height.xs;
const bodyMarginTop = navBarToolbarHeight + 16; // Add some top space to clear the nav bar
const bodyMarginTopMobile = navBarToolbarHeightMobile + 8; // Add some top space to clear the nav bar

export const body = style({
  marginTop: bodyMarginTopMobile,
  paddingLeft: 16,
  paddingRight: 16,
  ':focus': {
    outline: 'none'
  },
  '@media': {
    [mediaQueries.sm]: {
      marginTop: bodyMarginTop,
      paddingLeft: 24,
      paddingRight: 24
    }
  }
});
