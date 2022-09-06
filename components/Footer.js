import * as React from 'react';
import Image from 'next/image';
//import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper } from '@mui/material';
import {Container} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
//  <BottomNavigation sx={{ backgroundColor:'#000', height:'auto', }} value={value} onChange={handleChange}> 
      
      <Paper sx={{ bottom: 0, left: 0, right: 0, backgroundColor:'#000'}} elevation={3}>

       <Container maxWidth="lg">
      {/* <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
      <List sx={{ horizontal: 'right', color:'#fff'}}>
       <ListItemButton sx={{ textAlign: 'center' }} href="/">Home</ListItemButton>
       <ListItemButton sx={{ textAlign: 'center' }} href="/Story">Story</ListItemButton>
       <ListItemButton sx={{ textAlign: 'center' }} href="/Media">Media</ListItemButton>
       <ListItemButton sx={{ textAlign: 'center' }} href="/Contact">Contact</ListItemButton>
      </List>  
      </Container>
   </Paper> 
  //  </BottomNavigation>
    
  );
}
