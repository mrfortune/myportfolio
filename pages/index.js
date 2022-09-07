import { Button, Box, CardActionArea, CardActions, Stack, Card, Item, Container} from '@mui/material';
import Hero from '../components/Hero';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Home() {
  return (
    <Box container>
  <Hero>
    </Hero>  
  <Box display="flex">
    
      <Paper square={true} sx={{
    padding: 4,
    backgroundColor: "#263238",
    width:'100%',
    height:'auto',
    minHeight:'30vh'
  }}>
    <Container maxWidth="lg">
<Typography variant="h2" mb={6} sx={{color:'#fff', textAlign:'center'}}>
  What We Do
</Typography>
<Box container maxWidth="lg" sx={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center', }}>

      <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(3, 1fr)",
  }} >
      <Box component="li"><Image
            src='/assets/wedosharep.png'
            srcSet='1x'
            alt=''
            width={96}
            height={96}
            layout="fixed"
          /></Box>
  <Box component="li">

     <Image
            src='/assets/wedomui.png'
            srcSet=''
            alt=''
            width={96}
            height={96}
            layout="fixed"
          />
  </Box>
          
     
         
        
          <Image
            src='/assets/wedomiro.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
      
          <Image
            src='/assets/wedoadobe.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
            
          />
          
       
          <Image
            src='/assets/wedocss.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
       
          <Image
            src='/assets/wedohtml.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
        
          <Image
            src='/assets/wedojavascript.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
       
          <Image
            src='/assets/wedoreact.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
        
          <Image
            src='/assets/wedoshopify.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
       
          <Image
            src='/assets/wedowrike.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
           <Image
            src='/assets/wedonext.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
       </Box>
    </Box>
</Container>
</Paper>
    

</Box>
<Box display="flex">
<Paper square={true} sx={{
    padding: 4,
    backgroundColor: "#5C69BD",
    width:'100%',
    minHeight:'30vh'
  }}>
    <Container maxWidth="lg">
      <Typography variant="h2" pt={4} sx={{color:'#fff',}}>
Projects

  </Typography>
  <Typography sx={{color:'#fff',}}>
    Worked in various roles and capacities for these brands including UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist working from inception to delivery on their digital business initiatives.
  </Typography> 
  <Box component="ul" 
  sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(2, 1fr)",
  }}
  >
      <Box component="li">Item 1</Box>
  <Box component="li">Item 2</Box>

  </Box> 
    </Container>
 
</Paper>

  </Box>
   
<Box display="flex">
<Paper square={true} sx={{
    padding: 4,
    backgroundColor: "#eceff1",
    width:'100%',
    minHeight:'20vh'
  }}>
    <Container maxWidth="lg">
<Typography variant="h2">
Case Studies
</Typography>
    </Container>

</Paper>

 </Box>
  
  
</Box>
  )
};