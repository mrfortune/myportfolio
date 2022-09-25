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

const commonStyles = {
  bgcolor: '#e7e6e2',
  borderColor: 'text.primary',
  m: 1,
  p: 0,
  border: 1,
};

export default function Home() {
  return (
    <>
    {/* <Box component="div" sx={{display:'block', width:'100%', minHeight:'100vh'}}> */}
  {/* <Hero>
    </Hero>  */}
    {/* </Box> */}
 
    <Box component="div" className="homeHero" padding={0} mb={8} height="100%" direction="row" display='flex' alignItems='center' justifyContent='center' component="div"> 
<Box p={2}  sx={{maxWidth:'md'}}>
{/* <Grid container mt={6} maxWidth='md' spacing={0} sx={{ width:'900px',}}>
    
    <Grid item xs={12} md={12} lg={12} mb={8}>   */}
    <Box component="div" sx={{width:'60%'}}>
<Typography  variant="h1"  mb={2} sx={{ color:'#fafafa', fontSize:'3.0rem', }}>
Data-Driven Design for Humans.
</Typography>
<Typography variant="body2" mb={4} sx={{color:'#fafafa', fontWeight:'400', fontSize:'1rem', textTransform:'none'}}>

UX/UI design and engineering practioners who focus on identifying user pain-points and problems and designing solutions that work.
</Typography>
<Button color="primary" variant="contained" size="large" sx={{width:'160px', }}>
Learn More...
</Button>
</Box>
{/* </Grid>
</Grid> */}
  </Box>
</Box>
    
          {/* <Paper square={true} className="workBG" sx={{
    padding: 4,
    backgroundColor: "#263238",
    width:'100%',
    height:'auto',
    minHeight:'30vh'
  }}> */}
    <Box direction="row" display='flex' ml={2} justifyContent='center' component="div">
     <Grid container spacing={2} mb={8} sx={{maxWidth:'md'}}>
       <Grid item xs={12} md={12} md={12} lg={12}>
         <Typography variant="h2" mb={6} sx={{color:'#333', textAlign:'left'}}>
  What We Do
</Typography>
       </Grid>
       <Grid item xs={12} md={12} md={12} lg={12}>
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "8px",
    gridTemplateColumns: "repeat(4, 1fr)",
  }} >
     <Box component="li">
        <Image
        loader={myLoader}
            src='wedofigma.png'
            srcSet='1x'
            alt=''
            width={96}
            height={96}
            layout="fixed"
          />
          </Box>
      <Box component="li">
        <Image
        loader={myLoader}
            src='wedosharep.png'
            alt=''
            width={96}
            height={96}
            layout="fixed"
          />
          </Box>
  <Box component="li">

     <Image
     loader={myLoader}
            src='wedomui.png'
            srcSet=''
            alt=''
            width={96}
            height={96}
            layout="fixed"
          />
  </Box>
          <Image
          loader={myLoader}
            src='wedomiro.png'
            width={88}
            height={88}
            alt=''
            layout="fixed"
          />
      
          <Image
          loader={myLoader}
            src='wedoadobe.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
            
          />
          
       
          <Image
          loader={myLoader}
            src='wedocss.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
       
          <Image
          loader={myLoader}
            src='wedohtml.png'
            width={96}
            height={96}
            srcSet='1x'
            alt=''
            layout="fixed"
          />
          
        
          <Image
          loader={myLoader}
            src='wedojavascript.png'
            width={96}
            height={96}
            alt=''
            layout="fixed"
          />
          
       
          <Image
          loader={myLoader}
            src='wedoreact.png'
            width={96}
            height={96}
            alt=''
            layout="fixed"
          />
          
        
          <Image
          loader={myLoader}
            src='wedoshopify.png'
            width={96}
            height={96}
            alt=''
            layout="fixed"
          />
          
       
          <Image
            src='wedowrike.png'
            width={96}
            height={96}
            alt=''
            layout="fixed"
          />
           <Image
            src='wedonext.png'
            width={96}
            height={96}
            alt=''
            layout="fixed"
          />
        
       </Box>
   
         </Grid> 
</Grid>


  
{/* </Paper> */}
    </Box>

    




{/* <Paper square={true} className="firstBG" sx={{
    padding: 4,
    backgroundColor: "#5C69BD",
    width:'100%',
    height:'auto',
    minHeight:'45vh'
  }}> */}
    <Box component='div' direction="row" display='flex' ml={2} justifyContent='center'>
      <Grid container spacing={2} sx={{maxWidth:'md'}}>
        <Grid item xs={6} lg={6}>
      <Typography variant="h2" mb={4} sx={{color:'#333',}}>
Projects

  </Typography>
  <Typography sx={{color:'#fff',}}>
    Worked in various roles and capacities for these brands including UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist working from inception to delivery on their digital business initiatives.
  </Typography> 
  </Grid>
  <Grid item xs={6} lg={6}>
    <Image 
    loader={myLoader}
    src='workbanner.png'
    alt=''
    width={640}
    height={360}
    layout='responsive'
    >
    </Image>
    </Grid>
  </Grid>
    </Box>
 
{/* </Paper> */}




{/* <Paper className="caseBG" square={true} elevate={2} sx={{
    padding: 4,
    backgroundColor: "#eceff1",
    width:'100%',
    minHeight:'1440px',
    height:'auto',
    borderTop:'1px',
    borderTopColor:'#000'
  }}> */}
    <Box component="div" direction="row" ml={2} mr={2} display='flex' justifyContent='center'>
      

<Grid container spacing={2} sx={{maxWidth:'md'}}>
  <Grid item xs={12} sm={12} md={12} lg={12} spacing={2}>
<Typography variant="h2" sx={{color:'#333'}}>
Case Studies
</Typography>
  </Grid>
<Grid item xs={12} md={12} lg={12} mb={8}>
  {/* <Box component="div" direction="row" display='flex' justifyContent='center'> */}

  <Card className="cardBorder" sx={{ display: 'flex', maxWidth:'md' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:'60%' }}>
        <CardContent sx={{ flex: '1 0 auto',  }}>
          <Typography component="div" variant="h3">
            Fade Technology Solutions
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Case study of UI/UX dewsign for Fade Technology dashboard.
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box> */}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '40%', height:'240px' }}
        image="/assets/FadeB2B_Page_01.png"
        alt="Live from space album cover"
      />
    </Card>
{/* <Card className="fade" sx={{maxWidth:'md'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="360"
          //image="/assets/FadeB2B_Page_01.png"
          alt="Fade Technology"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Fade Technology Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textTransform:'none', fontSize:'1rem'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          <Link href="/fade-solutions"> Read More...</Link>
        </Button>
      </CardActions>
    </Card> */}
    {/* </Box> */}
{/* <Image src='/assets/FadeB2B_Page_01.png'
    alt=''
    width={900}
    height={506}
    layout='responsive'
    >
</Image> */}
</Grid>

<Grid item xs={12} md={12} lg={12} mb={8}>

<Box component="div" direction="row" display='flex' justifyContent='center'>
<Card className="cardBorder" sx={{ display: 'flex', maxWidth:'md' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:'60%' }}>
        <CardContent sx={{ flex: '1 0 auto',  }}>
          <Typography component="div" variant="h3">
            Fade Technology Solutions
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Case study of UI/UX dewsign for Fade Technology dashboard.
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box> */}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '40%', height:'240px' }}
        image="/assets/wgsr_home.png"
        alt="Live from space album cover"
      />
    </Card>
{/* <Card className="fade" sx={{maxWidth:'md'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="360"
          image="/assets/wgsr_home.png"
          alt="West Side German Sheperd Rescue"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            West-Side German Shepherd Rescue
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textTransform:'none', fontSize:'1rem'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          <Link href="/west-side-german-shepherd"> Read More...</Link>
        </Button>
      </CardActions>
    </Card> */}
    </Box>
</Grid>

<Grid item xs={12} md={12} lg={12}>
<Box component="div" direction="row" display='flex' justifyContent='center'>

    </Box>
</Grid>
</Grid>
    </Box>

{/* </Paper> */}

 
 </> 

  )
};