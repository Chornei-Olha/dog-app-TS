import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';
import Dosis from '../fonts/Dosis.ttf';


// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#921FED',
      dark: '#A239F4',
      light: '#B568F2',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFCF32',
      light: '#F7E4A8',
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
    },
  },
  typography: {
    fontSize: 20,
    fontFamily:  `src: local('Dosis'), url(${Dosis}) format('ttf');`,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  components: {
    MuiCssBaseline: {styleOverrides: 
       `@font-face {
        font-family: Dosis;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      src: local('Dosis'), local('Dosis'), url(${Dosis}) format('ttf');
    }`},
    MuiButton: MuiButtonConfig,
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
