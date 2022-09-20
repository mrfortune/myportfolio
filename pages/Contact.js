import * as React from "react";
import { styled, useTheme } from '@mui/material/styles';
import {Box, ThemeProvider, Button, Container, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import lightTheme from "../styles/theme/lightTheme";
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { global } from 'styled-jsx/css';

function Mailto({ email, subject, body, ...props }) {
	return (
	  <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
		{props.children}
	  </a>
	);
  }
  
const Contact = () => {
	  return(	
<Box component="div" className={global.Contact} direction="row" display='flex' justifyContent='center'>	  

	<Box mt={15} mb={15}>
		<Typography variant="h1" mb={8}>
Contact Us
	</Typography>
	<Box component="div" display="flex" mt={0} justifyContent="left" alignItems="left">
	<Grid container spacing={2} sx={{height:'40vh'}}>
		
	<Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:'left'}}>

		<Typography variant="body1">183 Sterling Street</Typography> 
<Typography variant="body1">Brooklyn, NY 11225</Typography>
<Typography variant="body1">
	 Cell: 1.646.620.4438</Typography>
  <Typography color='primary' varian='button' sx={{ textDecoration:'none', }}><Mailto email="rharris@worldshaker.com" subject="Available to Discuss a new Project" body="Hi Robert,">
    Please email me to discuss your next project.
  </Mailto>
  </Typography>
	</Grid>
	
	</Grid>
	</Box>
	
	
	  </Box> 
</Box>
	  )
  }
export default Contact
