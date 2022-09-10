import * as React from "react";
import { styled, useTheme } from '@mui/material/styles';
import {Box, Container, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
	<Grid container spacing={2} sx={{display:'flex', textAlign:'center', justifyItems:'center', alignItems:'center', height:'200px'}}>
		<Grid item xs={12} sm={12} md={12} lg={12} sx={{}}>

		<Typography variant="h4">
183 Sterling Street, Brooklyn, NY 11225
		</Typography>
	<Typography  variant="h4" sx={{ textDecoration:'none', color:'purple'}}><Mailto email="rharris@worldshaker.com" subject="Seeking more info" body="Hi, Robert,">
    Send me an email to get more info, or just to say, hi!.
  </Mailto>
  </Typography>
  <Typography variant="h4">Give me a call: 646.620.4438

  </Typography>
	</Grid>
	
	</Grid>
	
	
	
	  </Box> 
</Container>
	  )
  }
export default Contact
