import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';
import Dosis from '../fonts/Dosis.ttf';
import FugazOne from '../fonts/FugazOne-Regular.ttf';

// A custom theme for this app
const theme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000'
    },
    primary: {
      main: '#921FED',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#921FED'
    },
    text: {
      primary: '#5F556D'
      // secondary: "#FFFFFF",
    },
    grey: {
      100: '#FBFAFC',
      300: '#E6E6E6',
      500: '#ADA7B8'
    },
    action: {
      hover: '#A239F4',
      selected: '#B568F2'
    },
    warning: {
      main: '#FFCF32'
    },
    background: {
      paper: '#FBFAFC'
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: ['FugazOne', 'Dosis'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  components: {
    MuiButton: MuiButtonConfig,
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Dosis';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Dosis'), local('Dosis'), url(${Dosis}) format('truetype');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
        @font-face {
          font-family: 'FugazOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('FugazOne'), local('FugazOne-Regular'), url(${FugazOne}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
