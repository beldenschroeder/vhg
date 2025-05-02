import { SxProps, Theme } from '@mui/material/styles';

export const navBarTitle: SxProps<Theme> = {
  flexGrow: 1,
  fontSize: '1.5rem',
  display: { xs: 'none', sm: 'block' }
};

export const navBarTitleMobile: SxProps<Theme> = {
  my: 2,
  fontSize: '1.25rem'
};
