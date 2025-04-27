'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-geist-sans)'
  },
  palette: {
    background: {
      default: '#101214'
    },
    text: {
      primary: '#fff'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#11171d'
        }
      }
    }
  }
});

export default theme;
