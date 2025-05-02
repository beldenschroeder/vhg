'use client';
import { createTheme } from '@mui/material/styles';
import { app } from '../styles/colors';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-geist-sans)'
  },
  palette: {
    background: {
      default: app.background
    },
    text: {
      primary: app.text
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: app.background
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: app.background,
          color: app.text
        }
      }
    }
  }
});

export default theme;
