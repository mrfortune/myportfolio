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
import {useState, useEffect} from 'react';
import heroImage from '../public/assets/bg_new.png';
import myLoader from './Loader';


const Hero = () => {
  useEffect(() => {
console.log('use effect')

});
  return (
<Box component="div" direction="row" display='flex' justifyContent='center' className="homeHero"> 
<Grid container spacing={2} sx={{maxWidth:'lg'}}>
<Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
<Box p={3} className="landingText" sx={{display:'block', zIndex:1000, }}>
<Typography  variant="h1"  mb={2} sx={{ width: '48vw', color:'#fafafa', fontSize:'3.6rem', }}>
Data-Driven Design for Humans.
</Typography>
<Typography variant="body2" mb={2} sx={{width:'56vw', color:'#fafafa', fontWeight:'400', fontSize:'1rem', textTransform:'capitalize'}}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained">
Learn More...
</Button>
  </Box>
</Grid>
</Grid>




</Box>

  );
}
export default Hero