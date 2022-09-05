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
          fontSize: '3rem',
          fontWeight: 900,
          color:"#212121",
        },
        h2:{
    fontWeight:500,
    fontSize:'2rem',
        },
        h3: {
    fontSize:'1.7rem',
        },
        h4: {
          fontSize:'1.4rem',
        },
        h5: {
          fontSize:'1.2rem',
          textTransform: 'uppercase',
          fontWeight: '500',
            },
        h6:{
            fontSize:'.99rem',
            },
        body1:{
            fontSize: '.9rem',
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