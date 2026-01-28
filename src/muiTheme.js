import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },
  palette: {
    primary: { main: '#0ea5b7' },
    secondary: { main: '#f59e0b' },
    background: { default: '#0b1220', paper: '#0f172a' },
    text: { primary: '#e5e7eb', secondary: '#94a3b8' }
  }
});

export default theme;
