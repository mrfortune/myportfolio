import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import { Typography } from '@mui/material';
import { global } from 'styled-jsx/css';
import { ThemeProvider } from '@emotion/react';
const Hero = () => {
  return (
   
<Box container disableGutters={true} sx={{display:'flex', minHeight: '100vh', alignItems:'center', maxwidth:'1440px', justifyItems:'left', }}> 
<Image className={global.landingImage} src="/assets/bg_new.png" layout='fill' objectFit='cover' objectPosition='center' alt=""/>

<Box p={3} sx={{display:'block', zIndex:1000, }}>

<Typography className={Hero.display} variant="h1"  mb={2} sx={{ width: '40vw', color:'#fff',  }}>
Data driven, design-thinking practitioners.
</Typography>
<Typography variant="body2" mb={2} sx={{width:'40vw', color:'#fff', fontWeight:'500', }}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained">
Learn More...
</Button>
  </Box>
  <style jsx>{`
        .container {
          margin: 50px;
        }
        h1 {
          font-size: 4rem;
        }
      `}</style>
</Box>
  );
}
export default Hero