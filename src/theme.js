import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#DA3D33', // Customize your primary color (e.g., blue)
    },
    secondary: {
      main: '#e6e6e6', // Customize your secondary color (e.g., pink/red)
    },
    error: {
      main: '#FF0101',
    },
    warning: {
      main: '#FFFA01',
    },
    info: {
      main: '#019EFF',
    },
    success: {
      main: '#EC1203',
    },
  },
});

export default theme;
