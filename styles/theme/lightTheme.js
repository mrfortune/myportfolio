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
      components:{
        MuiContainer:{
        styleOverrides:{
                        root:{
                            border:"1px solid black",
                            borderRadius:8,
                },
                },
              },
      },
      typography: {
        h1: {
          fontFamily:'Merriweather',
          fontSize: '3.052rem',
          fontWeight: 800,
          '@media (max-width:500px)': {
            fontSize: '2.4rem',
          },
          '@media (max-width:900px)': {
            fontSize: '3.0rem',
          }, 
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
            '3xl': 1920,
            '4xl': 2560,
            '5xl': 3200,
          },
        },
        h2:{
          fontFamily:'Merriweather',
    fontWeight:400,
    fontSize:'2.441rem',
    marginBottom:'1rem'
        },
        h3: {
          fontFamily:'Abril',
    fontSize:'1.953rem',
        },
        h4: {
          textTransform:'uppercase',
          fontSize:'1.563rem',
        },
        h5: {
          fontSize:'1.25rem',
          textTransform: 'uppercase',
          fontWeight: '500',
          marginBottom:'3rem',
          textAlign:'center',
            },
        body1:{
            fontSize: '1rem',
            marginBottom: '1rem',
            fontWeight:'400',
            
        },
        body2:{
          fontSize: '.8rem',
          marginBottom: '1rem',
          textTransform:'uppercase',
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