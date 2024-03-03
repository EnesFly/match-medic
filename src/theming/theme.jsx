import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FAFAFA',
      backgroundDefault: '#FAFAFA',
      borderColor:'#CCCCCC',
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
  shadows: Array(25).fill("none"),
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
              padding: 0 // <-- added zero padding instruction

        }
      }
    }
  }
});

export default theme;