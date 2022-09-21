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
import {Container, Box, Grid, Typography} from '@mui/material';
import Link from 'next/link';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import { Instagram } from '@mui/icons-material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
//  <BottomNavigation sx={{ backgroundColor:'#000', height:'auto', }} value={value} onChange={handleChange}> 
      
      <Box component="div" className="navBG" pt={2} direction="row" display='flex' justifyContent='center' height="192px">
         <Grid container spacing={2} sx={{maxWidth:'lg', paddingLeft:'16px'}}>

         <Grid item xs={4} lg={4} >
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "8px",
    color:'#fff',
  }} >
    <Box component="li" mb={2}>
        <Typography variant="h4">Pages</Typography>
    </Box>
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
    <Grid item xs={4} lg={4} >
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "8px",
    color:'#fff',
  }} >
    <Box component="li" mb={2}>
        <Typography variant="h4">Resources</Typography>
    </Box>
      <Box component="li">
        <Link href="/">Terms</Link>
    </Box>
    <Box component="li">
        <Link href="/Story">Privacy</Link>
    </Box>
    
    </Box>
    </Grid>
    <Grid item xs={4} lg={4}>
    <Box component="div" mb={2}>
        <Typography variant="h4" sx={{color:'#fff'}}>Sharing</Typography>
    </Box>
    <Box
      sx={{
        width:'160px',
        color:'#fff',
        '& > :not(style)': {
          mr: 2,
        },
      }}
    >
      <Link href="http://linkedin.com/in/robertsharris">
        <a><LinkedIn fontSize="large"/></a>
        </Link>
      <Link href="/"><a><Facebook fontSize="large"/></a></Link>
      <Link href="/"><a><Instagram fontSize="large"/></a></Link>
      </Box>
    </Grid>
    <Grid item xs={12} lg={12} md={12} sm={12} sx={{bottom: 0, left: 0, right: 0,}}>
<Typography variant="caption" display="block" gutterBottom color='#fff' align='center'>&copy; 2022 WorldShaker Interactive, Inc. All rights reserved.</Typography>
      </Grid>
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
       </Grid>
      
   </Box> 
  //  </BottomNavigation>
    
  );
}
