import * as React from "react";
import { styled, useTheme } from '@mui/material/styles';
import {Box, ThemeProvider, Button, Container, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import lightTheme from "../styles/theme/lightTheme";
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';

function Mailto({ email, subject, body, ...props }) {
	return (
	  <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
		{props.children}
	  </a>
	);
  }
  
const Contact = () => {
	  return(	
<Container maxWidth='md' sx={{minHeight:'50vh',}}>	  

	<Box mt={15} mb={15}>
		<Typography variant="h1">
Contact Us
	</Typography>
	<Box component="div" display="flex" mt={0} justifyContent="center" alignItems="center">
	<Grid container spacing={2} sx={{height:'40vh'}}>
		
	<Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:'center'}}>

		<Typography variant="body1">
183 Sterling Street,Brooklyn, NY 11225
		</Typography>
	<Typography color='primary' sx={{ textDecoration:'none', }}><Mailto email="rharris@worldshaker.com" subject="Seeking more info" body="Hi, Robert,">
    Send me an email to get more info, or just to say, hi!.
  </Mailto>
  </Typography>
  <ThemeProvider theme={lightTheme}>
        
  <Typography variant="body1">
	 <Chip icon={<MdPhone />} label="Call me" />:646.620.4438

  </Typography>
  </ThemeProvider>
	</Grid>
	
	</Grid>
	</Box>
	
	
	  </Box> 
</Container>
	  )
  }
export default Contact
