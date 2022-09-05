import * as React from "react";
import Card from '@mui/material/Card';
import {Box, Stack, Container} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import  Hero from '../components/Hero';
import Image from "next/image";


const Home = () => {
  return(
<Container disablegutters="true">
  <Hero>
  </Hero>  
    

<Stack spacing={2}>
    <Box display="flex" pt='12' sx={{paddingBottom: 10,}}>
      <Typography variant="h2">
        What We Do
      </Typography>
</Box>

{/* <Box display="flex">
  <Typography variant="h2" pt={4}>
Projects
  </Typography>
  <Typography>
    Worked in various roles and capacities for these brands including UX Engineer, Project Manager, Web Producer &amp; Designer, and Design Technologist working from inception to delivery on their digital business initiatives.
  </Typography>
<Image  sx={{width:'100%',}} height="225" src="/assets/workbanner.png" alt=""/>
</Box>   */}


<Box display="flex" sx={{paddingBottom:10, paddingTop:10}}>
    <Typography variant="h2">
Case Studies
</Typography>
  </Box>
</Stack>

  


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
		
    <Card sx={{  }}>
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

  )
}
export default Home
    

    
	

		
		

