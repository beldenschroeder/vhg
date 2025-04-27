'use client';
import { createTheme } from '@mui/material/styles';
import { colors } from '../styles/app';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-geist-sans)'
  },
  palette: {
    background: {
      default: colors.background
    },
    text: {
      primary: colors.text
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: colors.background
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.background,
          color: colors.text
        }
      }
    }
  }
});

export default theme;
