import * as React from 'react';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import { Typography } from '@mui/material';
import { global } from 'styled-jsx/css';
const Hero = () => {
  return (
   
<Box container sx={{display:'flex', minHeight: '100vh', width: '100%',  alignItems:'center', justifyItems:'left'}}> 
<Image className={global.landingImage} src="/assets/bg_new.png" layout='fill' objectFit='cover' objectPosition='center' alt=""/>

<Box className={global.landingText} p={3} sx={{display:'block', }}>

<Typography className={global.landingText} variant="h1"  mb={2} sx={{ width: '40vw', }}>
Data driven, design-thinking practitioners.
</Typography>
<Typography variant="body2" mb={2} sx={{width:'40vw',}}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained">
Learn More...
</Button>
  </Box>
</Box>
  );
}
export default Hero