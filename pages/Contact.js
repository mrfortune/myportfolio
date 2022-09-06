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
<Container maxWidth="lg" sx={{display:'flex',}}>	  

	<Box mt={15} sx={{ display: 'flex', }}>
		
	<Grid container lg={12} spacing={4}>
<Typography variant="h1">
Contact Us
	</Typography>
		<Grid item xs={12}>

		
	<Typography mt={2} style={{ textDecoration:'none', color:'pink'}}><Mailto email="rharris@worldshaker.com" subject="Seeking more info" body="Hi, Robert,">
    Send me an email to get more info, or just to say, hi!.
  </Mailto>
  </Typography>
  <Typography variant="body1">Give me a call: 646.620.4438

  </Typography>
	</Grid>
	
	</Grid>
	
	
	
	  </Box> 
</Container>
	  )
  }
export default Contact
