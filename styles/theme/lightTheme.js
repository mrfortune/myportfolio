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
          fontFamily:'Abril',
          fontSize: '3.052rem',
          fontWeight: 900,
          color:"#212121",
        },
        h2:{
          fontFamily:'Abril',
    fontWeight:500,
    fontFamily:'Abril',
    fontSize:'2.441rem',
    marginBottom:'1rem'
        },
        h3: {
          fontFamily:'Abril',
    fontSize:'1.953rem',
        },
        h4: {
          fontFamily:'Abril',
          fontSize:'1.563rem',
        },
        h5: {
          fontFamily:'Abril',
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