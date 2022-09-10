import { createTheme } from '@mui/material/styles';
import { red, pink, green, purple, grey, blue } from '@mui/material/colors';

const lightTheme = createTheme({
 
    palette: {
        primary: {
          main: purple['A400'],
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
          fontSize: '3.052rem',
          fontWeight: 900,
          color:"#212121",
        },
        h2:{
    fontWeight:500,
    fontSize:'2.441rem',
    marginBottom:'1rem'
        },
        h3: {
    fontSize:'1.953rem',
        },
        h4: {
          fontSize:'1.563rem',
        },
        h5: {
          fontSize:'1.25rem',
          textTransform: 'uppercase',
          fontWeight: '400',
            },
        body1:{
            fontSize: '1rem',
            marginBottom: '1rem',
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