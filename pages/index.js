import { Button, Box, CardActionArea, CardActions, Stack, Card, Item, Container} from '@mui/material';
import Hero from '../components/Hero';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { border } from '@mui/system';
import myLoader from '../components/Loader';


export default function Home() {
  return (
    <>
    <Box component="div" className="homeHero" padding={0}  mb={10}  direction="row" display='flex' alignItems='center' justifyContent='center'> 
<Box p={2}  sx={{maxWidth:'md'}}>

    <Box component="div" sx={{width:'60%'}}>
<Typography  variant="h1"  className="header" mb={2} sx={{ color:'#fafafa',}}>
Data-Driven Design for Humans.
</Typography>
<Typography variant="body2" className="body1" mb={4} sx={{color:'#fafafa', fontWeight:'400', fontSize:'1rem', textTransform:'none'}}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained" size="large" sx={{width:'160px', }}>
<Link href="/story">Learn More...</Link>
</Button>
</Box>

  </Box>
</Box>
    
          
    <Box direction="row" mb={8} display='flex' ml={2} justifyContent='center' component="div">
     <Grid container spacing={2}  sx={{maxWidth:'md'}}>
       <Grid item xs={12} sm={12} md={12}  lg={12}>
         <Typography variant="h2" className="header" sx={{color:'#333', textAlign:'left'}}>
  What We Do
</Typography>
       </Grid>
       <Grid item xs={12} md={12} sm={12} lg={12}>
      <Box component="div" ml={0} className="whatWeDo" height='100%' display='flex' sx={{}}>

      </Box>
   
         </Grid> 
</Grid>

    </Box>

    
    <Box component='div' direction="row" mb={10} display='flex' ml={2} justifyContent='center'>
      <Grid container spacing={2} sx={{maxWidth:'md'}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
      <Typography variant="h2" className="header" mb={4} sx={{color:'#333',}}>
Projects

  </Typography>
  <Typography variant="body1" className="pbody1">
    Worked as a UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist for these brands.
  </Typography>  
  </Grid>
  <Grid item xs={12} md={12} lg={12}>
    <Box component="div" className="ourProjects">
  
  </Box>
  </Grid>
  
  </Grid>
    </Box>
 
<Box component="div" direction="row" ml={2} mr={2} display='flex' justifyContent='center'>
<Grid container spacing={2} sx={{maxWidth:'md'}}>
  <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
<Typography variant="h2" className="header" sx={{color:'#333'}}>
Case Studies
</Typography>
  </Grid>
<Grid item xs={12} md={12} lg={12} mb={8}>
  <Card className="cardBorder"  sx={{ display: 'flex',}}>
      <Box p={1} sx={{ display: 'flex', flexDirection: 'column', width:'66.66%' }}>
        <CardContent sx={{ flex: '1 0 auto',  }}>
          <Typography component="div" variant="h3" className="cardHeader">
            Fade Technology Solutions
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mb={3} component="div" >
            Explore the process of designing a B2B dashboard with data-visualization and ad campaign management tools.
          </Typography>
          
        <Button size="small" variant="text" color="primary">
          <Link href="/fade-solutions"> Read More...</Link>
        </Button>
     
        </CardContent>
       
      </Box>
      <CardMedia
      loader={myLoader}
        component="img"
        sx={{ width:300 }}
        background-size = 'cover'
        image="/assets/fadecardImage.png"
        alt="Fade Technology Solutions"
      />
    </Card>

</Grid>

<Grid item xs={12} md={12} lg={12} mb={8}>
<Card className="cardBorder" sx={{ display: 'flex',}}>
<Box p={1} sx={{ display: 'flex', flexDirection: 'column', width:'66.66%' }}>
        <CardContent sx={{ flex: '1 0 auto',  }}>
          <Typography component="div" variant="h3" className="cardHeader">
           West Side German Shepherd Rescue
          </Typography>
          <Typography variant="subtitle1"  color="text.secondary" component="div" mb={3} >
            Let's walk through the dog adoption process that we explored and the assumptions, insights, and final design of sheprescue.org.
          </Typography>
          
          <Button size="small" variant="text" color="primary">
          <Link href="/west-side-german-shepherd"> Read More...</Link>
        </Button>
       
        </CardContent>
    
      </Box>
     
      <CardMedia
      loader={myLoader}
      component="img"
      sx={{ width:300 }}
        image="/assets/wgsrcardimage.png"
        alt="WGSR"
      />
      
    </Card>

</Grid>

</Grid>
    </Box>



 
 </> 

  )
};