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
<Grid container spacing={2} mt={15} mb={15}>
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
          <Grid item xs={12} lg={12}>
          <Typography variant="h5">Problem</Typography>
    <Typography variant="h2" class="mb-1">BK Wine Cellar's Needs a Well Designed Website</Typography>
    <Typography variant="body1">
            Local wine lovers want to be able to search the site – bkwinecellar.com - by region, categories and varietals so that they can easily find and purchase their favorite wine/s and have it delivered.
            </Typography>
              </Grid>
              <Grid item xs={12} lg={12}>
              <Typography variant="h5">Approach</Typography>
                <Typography variant="h2">Let's Get Together and Order Wine</Typography>
                <Typography variant="body1">
                My journey of discovery began on Easter Sunday, April 2021, where I organized a dinner party with a group of women ranging in age from 30-45. My first insight was that all of the women ordered their wine form various local wine stores but all of them were order by their mobile phones. 
                I asked them about their experience with buying wine and how they normally go about the process. We talked about the the websites of local retailers and what they felt about the sites.</Typography>
                  </Grid>
                  <Grid item><Typography>Persona</Typography>
                      </Grid>
                      <Grid item><Typography>Journey Map</Typography>
                      </Grid>
      <Grid item xs={12} lg={12}>
      <Typography variant="h5">Activities &amp; Deliverables</Typography>
    <Typography variant="h2">Research Architect, Design, and Iterate.</Typography>
    <Typography variant="body1">BK Wine Cellar's website solution will provide its customers with the ability to search the stores inventory, buy wine and have it delivered.</Typography>
          </Grid>
<Grid item xs={12} lg={12}>
<Typography variant="h4">3. Closed Card-Sorting</Typography>
    <Typography variant="h2">Tell Us How To Architect</Typography>
    <Typography variant="body1">The closed card-sort gave me insights on how the navigation should be organized. I gave  users specific categories to place the 75 inventory items into. I designed our navigation, search filters and pages from these insights. The choice of using a closed sort was to limit the categories to how wines are grouped in the industry by professionals.
    </Typography>	
    </Grid>
    <Grid item xs={12} lg={12}>
    <Typography variant="h5">Design</Typography>	
                    <Typography variant="h2">Design for Search, Navigation, Checkout and Delivery</Typography>
        </Grid>
        <Grid item xs={12} lg={12}>

        <Typography variant="h4">Site Map</Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
        <Typography variant="h4">User Flow</Typography>
        <Typography variant="body1">I created a user flow that expects to be able to search and/or go directly to the wine varietals, regions and coutries that the customer is looking for. If a user is signed up he/she can see the wines that they bought and repurchase it/them. </Typography>
                    <Typography variant="body1">No matter what choice the user makes, they will be able now check out and complete their purchase online and select delivery to a selected address.</Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
        <Typography variant="h5">Visual Design</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
            <Typography variant="h2">Design System</Typography>
        <Typography variant="body1">I have incorporated Bootstrap 4/5's design system into my project and modified some of it UI elements. I also created some of my own UI elements for this system.</Typography>
        <Typography variant="h3">Typography</Typography>
                </Grid>

                <Grid item xs={12} lg={12}>
                <Typography variant="h2">Great Wine Buying User Experience</Typography>
        <Typography variant="body1">The visual design incoporates all of the UI elements and functionality found in other e-commerce wine sites. I have incorporated search and faceted search to help users select wine by ratings, price, region and country.</Typography>
                        <Typography variant="body1">The solution is visually appealing as I chose colors and typography that appealed to food and wine buyers and add elegance to the experience.</Typography>
                        <Typography variant="body1">Consumers can easily navigate the site and find the category of wine that they are looking for, add it to their shopping cart, pay for it, and select an address for delivery.</Typography>
                    </Grid>

                    <Grid item xs={12} lg={12}>
                    <Typography variant="h5">Results &amp; Reflections</Typography>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                    <Typography variant="body1">
            Local wine lovers want to be able to search the site – bkwinecellar.com - by region, categories and varietals so that they can easily find and purchase their favorite wine/s and have it delivered.
            </Typography>
                        </Grid>
	  </Grid>

	  </Container>
	  
	
  )
}

export default Wine

