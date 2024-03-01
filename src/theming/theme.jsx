import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: '#FAFAFA',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    boldHeader:{
      fontWeight: 700,
      fontSize:24,
    },
    fontFamily:
      'Sintony',
  },
});

export default theme;