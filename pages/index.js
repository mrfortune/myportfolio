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
    height:'300px'
  }}>
<Typography variant="h2" sx={{color:'#fff', textAlign:'center'}}>
  What We Do
</Typography>
</Paper>
</Box>
<Box display="flex">
<Paper square={true} sx={{
    padding: 4,
    backgroundColor: "#263238",
    width:'100%',
    height:'300px'
  }}>
<Typography variant="h2" pt={4} sx={{color:'#fff',}}>
Projects

  </Typography>
  <Typography sx={{color:'#fff',}}>
    Worked in various roles and capacities for these brands including UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist working from inception to delivery on their digital business initiatives.
  </Typography>   
</Paper>

  </Box>
   
     


 
   


  
  
  <Box>
<CardMedia  sx={{width:'100%',}} component="img" height="225" image="/assets/workbanner.png"/>
      </Box> 
 
  
  
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
 <Grid container spacing={2}>
        <Grid item xs={8}>
          
        </Grid>
        <Grid item xs={4}>
        
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>   

</Box>
  )
}
