import * as React from 'react';
import Image from 'next/image';
//import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Paper } from '@mui/material';
import {Container, Box, Grid} from '@mui/material';
import Link from 'next/link';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import { Instagram } from '@mui/icons-material';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
//  <BottomNavigation sx={{ backgroundColor:'#000', height:'auto', }} value={value} onChange={handleChange}> 
      
      <Paper className="navBG" sx={{ bottom: 0, left: 0, right: 0, minHeight: '280px', height:'auto',padding:'32px'}} elevation={3}>

       <Container maxWidth='md'>
         <Grid container spacing={2}>

         <Grid item xs={4} lg={4}>
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "8px",
    color:'#fff',
  }} >
      <Box component="li">
        <Link href="/">Home</Link>
    </Box>
    <Box component="li">
        <Link href="/Story">Story</Link>
    </Box>
    <Box component="li">
        <Link href="/Contact">Contact</Link>
    </Box>
    </Box>
    </Grid>
    <Grid item xs={4} lg={4}>
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "8px",
    color:'#fff',
  }} >
      <Box component="li">
        <Link href="/">Terms</Link>
    </Box>
    <Box component="li">
        <Link href="/Story">Privacy</Link>
    </Box>
    
    </Box>
    </Grid>
    <Grid item xs={4} lg={4}>
    <Box
      sx={{
        color:'#fff',
        '& > :not(style)': {
          mr: 2,
        },
      }}
    >
      <Link href="http://linkedin.com/in/robertsharris">
        <a><LinkedIn fontSize="large"/></a>
        </Link>
      <Link href="/"><Facebook fontSize="large"/></Link>
      <Link href="/"><Instagram fontSize="large"/></Link>
      </Box>
    </Grid>
    
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
       </Grid>
      </Container>
   </Paper> 
  //  </BottomNavigation>
    
  );
}
