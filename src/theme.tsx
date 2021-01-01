import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        light: '#63ccff',
        main: '#009be5',
        dark: '#006db3',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });
  
  export default theme;