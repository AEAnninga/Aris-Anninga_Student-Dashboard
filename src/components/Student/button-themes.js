import { createTheme } from '@mui/material/styles';

export const topFiveButtonTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    difficult: {
      main: 'rgba(102,153,204, 0.9)',
      darker: '#69c',
      contrastText: 'white'
    },
    fun: {
      main: 'rgba(128,0,128,0.5)',
      darker: 'rgba(128,0,128,0.9)',
      contrastText: 'white',
    },
  },
});

export const studentNavButtonTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    student: {
      main: 'rgba(102,153,204, 1)',
      darker: '#69c',
      contrastText: 'white'
    },
  },
});