import { Button, Box, CardActionArea, CardActions, Stack, Card, Container} from '@mui/material';
import Hero from '../components/Hero';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <Container disableGutters={true}>
  <Hero>
    </Hero>  
    <Divider variant="middle" mt={4} mb={4}/>
    <Container display="flex" pb={4} >
<Typography variant="h2" pt={4}>
  What We Do
</Typography>
    </Container>
    <Divider variant="middle" />
<Container pt={10} display="flex">

  <Typography variant="h2" pt={4}>
Projects

  </Typography>
  <Typography>
    Worked in various roles and capacities for these brands including UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist working from inception to delivery on their digital business initiatives.
  </Typography>   <Box>
<CardMedia  sx={{width:'100%',}} component="img" height="225" image="/assets/workbanner.png"/>
      </Box> 
  </Container>
  <Divider variant="middle" /> 
   <Container>
<Typography variant="h2">
Case Studies
</Typography>
<Stack  display="flex" justifyContent="center" mt={{ xs: 6, sm: 8, lg: 18 }}  sx={{alignItems:'center',}}>
<Box display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center', justifyContent:'center' }}>


<Card sx={{ display:'flex', }}>

  <Box sx={{ display: 'flex', flexDirection: 'column'}}>
<CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/assets/bkwinesite.png"
          alt="green iguana"
        />
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </Box>
  <Box display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center', justifyContent:'center' }}>
  <Card sx={{ display: 'flex', }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
      
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
      
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  
          
  
    </Box> 
    <Box  display="flex" justifyContent="center" mb={{xs: 12, sm: 18, md: 18, lg: 18}} sx={{ alignItems:'center' }}>
		
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          
  
    </Box>
</Stack>
   </Container>

</Container>
  )
}
