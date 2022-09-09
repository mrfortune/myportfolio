import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const Wine = () => {
  return (
	  <Container maxWidth='md'>
<Grid container spacing={2}>
		  <Grid item xs={12} lg={12}>
		  <Typography variant="h5">Overview</Typography>               
            <Typography variant="body1">BK Wine Cellar is a local wine store in Brooklyn (BK) that does not have a well designed e-commerce website for its customers to be able to view its wine collection, and order wine for delivery.
            </Typography>
			<Typography variant="h5">The Team &amp; Timeframe</Typography>
                <Typography variant="body1">
            Robert Harris is the UX Researcher, Information Architect, and Visual Designer. The project time frame was a 2 week sprint.
            </Typography>

			<Typography variant="h5">Tools &amp; Methods</Typography>            
            <ul>
                    <li>
                        Closed card-sorting
                    </li>
                    <li>Contextual Inquiry </li><li>Competitive &amp; Comparative Analysis</li><li> Miro</li><li> Figma</li><li>Adobe CC</li>
            </ul>
		  </Grid>
      

	  </Grid>

	  </Container>
	  
	
  )
}

export default Wine

