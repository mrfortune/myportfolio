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
import lightTheme from '../styles/theme/lightTheme';


const Hero = () => {
  return (
   <Container maxWidth="lg">
<Box container disablegutters="false" sx={{display:'flex', minHeight: '100vh', alignItems:'center', justifyItems:'left', }}> 
<Image className={global.landingImage} src="/assets/bg_new.png" layout='fill' objectFit='cover' objectPosition='center' alt=""/>

<Box p={3} sx={{display:'block', zIndex:1000, }}>

<Typography  variant="h1"  mb={2} sx={{ width: '45vw', color:'#fafafa', fontSize:'3.6rem', }}>
Data-Driven Design for Humans.
</Typography>
<Typography variant="body2" mb={2} sx={{width:'45vw', color:'#fafafa', fontWeight:'400', fontSize:'1rem'}}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained">
Learn More...
</Button>
  </Box>

</Box>

   </Container>

  );
}
export default Hero