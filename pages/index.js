import { Button, Box, CardActionArea, CardActions, Stack, Card, Item, Container} from '@mui/material';
import Hero from '../components/Hero';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <Box component='div'>
  <Hero>
    </Hero> 
  <Box display="flex">
    <Paper square={true} className="workBG" sx={{
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
<Box maxWidth="lg" sx={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center', }}>

  <Box component="ul" sx={{
    padding: "0 0",
    listStyle: "none",
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(4, 1fr)",
  }} >
     <Box component="li">
        <Image
            src='/assets/wedofigma.png'
            srcSet='1x'
            alt=''
            width={96}
            height={96}
            layout="fixed"
          />
          </Box>
      <Box component="li">
        <Image
            src='/assets/wedosharep.png'
            srcSet='1x'
            alt=''
            width={96}
            height={96}
            layout="fixed"
          />
          </Box>
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
<Paper square={true} className="firstBG" sx={{
    padding: 4,
    backgroundColor: "#5C69BD",
    width:'100%',
    height:'auto',
    minHeight:'45vh'
  }}>
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={6} lg={6}>
      <Typography variant="h2" mb={4} sx={{color:'#fff',}}>
Projects

  </Typography>
  <Typography sx={{color:'#fff',}}>
    Worked in various roles and capacities for these brands including UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist working from inception to delivery on their digital business initiatives.
  </Typography> 
  </Grid>
  <Grid item xs={6} lg={6}>
    <Image src='/assets/workbanner.png'
    alt=''
    width='640px'
    height='360px'
    layout='responsive'
    >
    </Image>
    </Grid>
  </Grid>
    </Container>
 
</Paper>

  </Box>
   
<Box display="flex">
<Paper className="caseBG" square={true} elevate={2} sx={{
    padding: 4,
    backgroundColor: "#eceff1",
    width:'100%',
    minHeight:'1440px',
    height:'auto',
    borderTop:'1px',
    borderTopColor:'#000'
  }}>
    <Container maxWidth="lg">
<Typography variant="h2" sx={{color:'#fff'}}>
Case Studies
</Typography>
<Grid container spacing={2}>
  <Grid item xs={12} md={3} lg={3}>
<Typography>

</Typography>
  </Grid>
<Grid item xs={12} md={9} lg={9}>
<Card sx={{ maxWidth: 900 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="506"
          image="/assets/FadeB2B_Page_01.png"
          alt="Fade Technology"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fade Technology Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href="/FadeDesign"> Read More...</Link>
        </Button>
      </CardActions>
    </Card>
{/* <Image src='/assets/FadeB2B_Page_01.png'
    alt=''
    width={900}
    height={506}
    layout='responsive'
    >
</Image> */}
</Grid>
<Grid item xs={12} md={3} lg={3}>
<Typography>

</Typography>
  </Grid>
<Grid item xs={12} md={9} lg={9}>
<Card sx={{ maxWidth: 900 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="506"
          image="/assets/FadeB2B_Page_01.png"
          alt="Fade Technology"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fade Technology Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href="/FadeDesign"> Read More...</Link>
        </Button>
      </CardActions>
    </Card>
</Grid>
<Grid item xs={12} md={3} lg={3}>
<Typography>

</Typography>
  </Grid>
<Grid item xs={12} md={9} lg={9}>
<Card sx={{ maxWidth: 900 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="506"
          image="/assets/FadeB2B_Page_01.png"
          alt="Fade Technology"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fade Technology Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href="/FadeDesign"> Read More...</Link>
        </Button>
      </CardActions>
    </Card>
</Grid>
</Grid>
    </Container>

</Paper>

 </Box>
  
  
</Box>
  )
};