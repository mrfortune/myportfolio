import { createTheme } from '@mui/material/styles';
import { red, pink, green, purple, grey, blue } from '@mui/material/colors';

const lightTheme = createTheme({
    palette: {
        primary: {
          main: pink['A200'],
        },
        secondary: {
          main: grey[50],
        },
      },
      logo:{
    width:'40px',
      },
      typography: {
        h1: {
          fontSize: '2.48 rem',
          fontWeight: 900,
          color:"#212121",
        },
        h2:{
    fontWeight:500,
    fontSize:'2.0 rem',
        },
        h3: {
    fontSize:'1.7 rem',
        },
        h4: {
          fontSize:'1.4 rem',
        },
        h5: {
          fontSize:'1.2 rem',
          textTransform: 'uppercase',
          fontWeight: '500',
            },
        h6:{
            fontSize:'.99 rem',
            },
        body1:{
            fontSize: '.875 rem',
        },
    
        fontFamily: 'Lato', 
      },
      MuiBottomNavigation:{
        styleOverrides:{
    backgroundcolor:'transparent',
        },
      },
});

export default lightTheme;