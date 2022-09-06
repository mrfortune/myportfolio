import { Button, Box, CardActionArea, CardActions, Stack, Card, Item, Container} from '@mui/material';
import Hero from '../components/Hero';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';


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
<Typography variant="h2" sx={{color:'#fff', textAlign:'center'}}>
  What We Do
</Typography>
</Paper>
</Box>
<Box display="flex">
<Paper square={true} sx={{
    padding: 4,
    backgroundColor: "#5C69BD",
    width:'100%',
    minHeight:'30vh'
  }}>
<Typography variant="h2" pt={4} sx={{color:'#fff',}}>
Projects

  </Typography>
  <Typography sx={{color:'#fff',}}>
    Worked in various roles and capacities for these brands including UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist working from inception to delivery on their digital business initiatives.
  </Typography>   
</Paper>

  </Box>
   
<Box display="flex">
<Paper square={true} sx={{
    padding: 4,
    backgroundColor: "#eceff1",
    width:'100%',
    minHeight:'20vh'
  }}>
<Typography variant="h2">
Case Studies
</Typography>
</Paper>

 </Box>
  
  
</Box>
  )
};