import { Button, Box, CardActionArea, CardActions, Stack, Card, Item, Container} from '@mui/material';
import Hero from '../components/Hero';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
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
  <Hero>
    </Hero> 
    <Paper square={true} className="workBG" sx={{
    padding: 4,
    backgroundColor: "#263238",
    width:'100%',
    height:'auto',
    minHeight:'30vh'
  }}>
    <Box direction="row" display='flex' justifyContent='center' component="div">
     <Grid container spacing={2} sx={{maxWidth:'md'}}>
       <Grid item xs={12} md={12} md={12} lg={12}>
         <Typography variant="h2" mb={6} sx={{color:'#fff', textAlign:'center'}}>
  What We Do
</Typography>
       </Grid>
       <Grid item xs={12} md={12} md={12} lg={12}>
       <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "30px",
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
            layout="intrinsic"
          />
          </Box>
      <Box component="li">
        <Image
        loader={myLoader}
            src='wedosharep.png'
            alt=''
            width={96}
            height={96}
            layout="intrinsic"
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
            layout="intrinsic"
          />
  </Box>
          
     
         
        
          <Image
          loader={myLoader}
            src='wedomiro.png'
            width={96}
            height={96}
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
</Box>


  
</Paper>
    


<Paper square={true} className="firstBG" sx={{
    padding: 4,
    backgroundColor: "#5C69BD",
    width:'100%',
    height:'auto',
    minHeight:'45vh'
  }}>
    <Box component='div' direction="row" display='flex' justifyContent='center'>
      <Grid container spacing={2} sx={{maxWidth:'md'}}>
        <Grid item xs={6} lg={6}>
      <Typography variant="h2" mb={4} sx={{color:'#fff',}}>
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
 
</Paper>

   

<Paper className="caseBG" square={true} elevate={2} sx={{
    padding: 4,
    backgroundColor: "#eceff1",
    width:'100%',
    minHeight:'1440px',
    height:'auto',
    borderTop:'1px',
    borderTopColor:'#000'
  }}>
    <Box component="div" direction="row" display='flex' justifyContent='center'>
      

<Grid container spacing={2} sx={{maxWidth:'md'}}>
  <Grid item xs={12} sm={12} md={12} lg={12}>
<Typography variant="h2" sx={{color:'#fff'}}>
Case Studies
</Typography>
  </Grid>
<Grid item xs={12} md={7} lg={7}>
  <Box component="div">
<Card variant="outlined"  sx={{ maxWidth: 640,}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="360"
          image="/assets/FadeB2B_Page_01.png"
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
    </Card>
    </Box>
{/* <Image src='/assets/FadeB2B_Page_01.png'
    alt=''
    width={900}
    height={506}
    layout='responsive'
    >
</Image> */}
</Grid>
<Grid item xs={12} md={5} lg={5}>
<Typography>

</Typography>
  </Grid>
<Grid item xs={12} md={7} lg={7}>
<Card sx={{ maxWidth: 640 }}>
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
    </Card>
</Grid>
<Grid item xs={12} md={5} lg={5}>
<Typography>

</Typography>
  </Grid>
<Grid item xs={12} md={7} lg={7}>
<Card sx={{ maxWidth: 640 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="360"
          image="/assets/FadeB2B_Page_01.png"
          alt="Fade Technology"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" sx={{textTransform:'none', fontSize:'1rem'}}>
            Fade Technology Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          <Link href="/FadeDesign"> Read More...</Link>
        </Button>
      </CardActions>
    </Card>
</Grid>
</Grid>
    </Box>

</Paper>
  
 </> 

  )
};