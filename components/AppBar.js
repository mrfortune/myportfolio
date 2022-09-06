import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
//import Link from '@mui/material/Link';
import { LinkProps } from '@mui/material/Link';
import { ThemeProvider } from '@mui/material';
import Slide from '@mui/material/Slide';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {css} from '@emotion/react';
import { alpha } from "@mui/material";
import lightTheme from '../styles/theme/lightTheme';

const drawerWidth = 240;
const navItems = ['Story', 'Media', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Divider />
      <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/Story">
          <a>Story</a>
        </Link>
      </li>
      <li>
        <Link href="/Media">
          <a>Media</a>
        </Link>
      </li>
      <li>
        <Link href="/Contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
      {/* <List sx={{ horizontal: 'right',}}>
          <ListItem  
             sx={{ textAlign: 'left',  }}
          disablePadding>
            <ListItemButton sx={{ textAlign: 'left', fontSize: '12px', textTransform:'uppercase', color:'black'}}>
              <ListItemText as Link href="/">Home
                </ListItemText>
                <ListItemText>Story
                </ListItemText>
                <ListItemText>Media
                </ListItemText>
                <ListItemText>Contact
                </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>  */}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>  
    <HideOnScroll {...props}>
      <AppBar component="nav" elevation={2} sx={{background: '#def8cc', }}>
        <Toolbar maxWidth='md' sx={{}}>
        <Box sx={{ flexGrow: 1, }}>
<Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'block', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
          WORLDSHAKER
          </Typography>
            </Box>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { xs:'block', sm: 'block', md: 'none', horizontal: 'right' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display:'flex', display: { xs: 'none', sm: 'none', md:'block', horizontal: 'right', fontWeight:600, } }}>
<Button sx={{mr: 1,}}><Link href="/">
  Home
</Link></Button>
<Button sx={{mr:1}}><Link href="/Story">
  Story
</Link></Button>
<Button sx={{mr:1}}><Link href="/Media">
  Media
</Link>
</Button>
<Button variant="contained"><Link href="/Contact">
  Contact
</Link>
</Button>
          </Box> 
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
        anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md:'none', horizontal:'right' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
    
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
