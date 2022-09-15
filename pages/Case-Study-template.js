import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Item, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import FadeJourneyMap from '../public/assets/FadeJourneyMap.png';


const CaseStudyTemplate = () => {
  
  return (
    <Container maxWidth={false} mt={0} disableGutters={true}>
  <Paper square={true} className="fadeHero" mt={0} sx={{minHeight:'50vh', color:'#fff'}}>
        <Box mt={8} component="div" display="flex" justifyContent="center" alignItems="center">
  <Grid container spacing={0}>
     <Grid item xs={12} lg={12}>   
         <Box component="div" mt={4} mb={3} sx={{textAlign:'center', height:'152px'}}>
        <Typography variant="h1" sx={{fontSize:'3.0rem',}}> Dashboard UI/UX Solution</Typography>
               <Typography variant="body1">Publisher, agency, brand and ad campaign management dashboard solution.</Typography>              
           </Box>
            
     </Grid> 
     <Grid item xs={12} lg={12}>
       <Box component="div" p={6} sx={{flexgrow:'1',}}>     
        <Grid container spacing={2}>
<Grid item xs={12} sm={3} md={3} lg={3}>
  <Typography variant="body2">Client </Typography>
<Typography variant="body1">Fade Technology - fadetechnology.com </Typography>
</Grid>
<Grid item xs={12} sm={3} md={3} lg={3}><Typography variant="body2">Year</Typography>
                        <Typography variant="body1">2021</Typography>
                      
                        </Grid>
<Grid item xs={12} sm={3} md={3} lg={3} ><Typography variant="body2">Role</Typography>
                        
                          <ul sx={{marginLeft: '0',}}>
            
            <li>Information Architect &amp; Research</li>
            
                        </ul> 
                        </Grid>

                        <Grid item xs={12} sm={3} md={3} lg={3} >
<Typography variant="body2">What I Did</Typography>            
                   <Typography variant="body1">
My priciple role was Information Architect and I collaborated on research and visual design. I drew low fidelity sketches in design studio, designed site maps and conducted usability testing.

                   </Typography>
</Grid>

</Grid>
                 
         </Box>           
		  </Grid>
     </Grid> 
     </Box>
        </Paper>
       
       
       
    <Box component="div" display="flex" justifyContent="center" alignItems="center" sx={{ flexGrow: 1, px: 3 }}> 
		<Grid container mt={6} spacing={0} sx={{ width:'740px',}}>
    
      <Grid item xs={12} md={12} lg={12}>            
      <Typography variant="h2">About This Project</Typography>
                     
      <Typography variant="body1">
      Fade Technology is an early-stage startup with a team of entertainment technology,
payments, and digital leaders from leading companies. Fade Technology provides the
quickest way to embed the next-generation of shoppable media on the digital publisher
and streaming service platforms. It is a cloud-based platform that enables digital
publishers to monetize editorial, sponsored, advertorial, and original video content
natively. It allows a new commerce experience that lets viewers instantly discover and
buy products directly from the video on the platform they are on, without redirects.
                </Typography>
                
             
		  </Grid>
        
     <Grid item xs>

       </Grid>
      
		  <Grid item xs={12} lg={12} md={12}>            
      <Typography variant="h2">
                The Problem  
                </Typography>
                
                <Typography variant="body1">
                This project focuses on the customer portal experience, which will include one or more
of the following:

The target platform for this project is a responsive website and will be accessible through
the fade.technology website with URLs: fade.technology/sellerportal;
fade.technology/publisher; fade.technology/login. This portal will require a secure
customer environment, with features such as encryption and SSL, which will allow users
to feel safe when inputting private business information or accessing/uploading sensitive
documents.

                </Typography>
                
              
          
		  </Grid>
      <Grid item xs={12} lg={12} mt={5}>
      <Typography variant="h5">The Process &amp; Solution</Typography>
               <Typography variant="body1">
            The Fade executives and techs came to us with a detailed project brief, inclding how their system worked for publishers, agencies, brands and admins and examples of Facebook Business Suite and Snapchat's Business dashboard. We did not have access to user info, nor could we interview users since their users are their business clients.</Typography>
           
           <Typography variant="body1">Fade did part of our Double Diamond work for us and we just needed to build on what they provided and begin sketches and low-fidelity wireframing based on the examples.
            We were forced to rely on the project brief and competitive analysis and comparative analysis to inform our final design decisions.</Typography>
     
        </Grid>
        
     
      <Grid item xs={12} lg={12} mt={5}>
                   <Typography variant="h2" mb={4}>Design Studio</Typography>
     
        </Grid>
        <Grid item xs={12} lg={12}>
   <Typography variant="body1">
We began our process by sketching low fidelity wireframes with pen and paper.  Since the brief informed us of what the dashboard should look like, based on the examples provided, and the fact that we had no ability to do user research with participants, we jsu started sketching. The resluts were that we got early buyin from the client and we could procede to site-mapping and mid-fidelity wireframing.
   </Typography>
     
        </Grid>
        <Grid item xs={12} lg={4}>
   
     
   </Grid>
   <Grid item xs={12} lg={4}>
   
     
   </Grid> 
       

     
        
      <Grid item xs={12} lg={12} mt={5}>
    <Typography variant="h2">Competitive Analysis</Typography>
    <Typography variant="body1">Campaign managment solutions and administrative dashboards are nothing new. Many companies, such as Amazon, YouTube and Facebook alll have those solutions for their business users. We simply looked at those properties and features and applied it to Fades project brief. </Typography>
    <Typography variant="body1">Fades business model is an advertiser driven B2B model not for consumers, so we focused heavily on their layout and UI components including analytics. Fade has no direct competitors based on their unique offering.</Typography>
    <Typography variant="body2">Observations:</Typography>
    <ul>
    <li>Dashboards all have analytics and charts and features to analyse the data.</li>
    <li>There are access and privilege levels assigned to users including who has administrative rights.</li>
    <li>Administrators invite users to the platform.</li>
    <li>Security protocols are put in place to prevent unauthorized access of the platform.</li>
    <li>Campaign management features such as 'Create a Campaign', 'Start/Stop a Campaign'.</li>	
    </ul>
     
        </Grid>
       
      <Grid item xs={12} lg={12} mt={5}>

      <Typography variant="h2">Comparative Analysis</Typography>
      <Typography variant="body1">Fades proposition is a unique technology and although there are similarites in the online ad space they do not have a direct competitor. We next looked at Amazon's Seller Central's dashboard. Their business model is not an advertishing based model but there are similarities in their solutions. This was to gather more data on how these solutions are designed, and to get more inspiration.</Typography>
        </Grid>
        <Grid item xs={12} lg={12} mt={5}>
      
                    
                    
                    <Typography variant="h2" mb={4}>Persona:Meet Pamela Wu</Typography>
                    <Image src="/assets/fadepersona.png" alt="" height={1080} width={1440} />
     
        </Grid>
       
      <Grid item xs={12} lg={12} mt={5}>
      <Typography variant="h4">Journey Map</Typography>
                
                <Image src="/assets/FadeJourneyMap.png" alt="" height={1080} width={1440} sx={{borderRadius:'16px',}}/>
                <Typography  variant="body1">In the above image we are mapping the journey of the Account Administrator as he/she interacts with the proposed solution.</Typography>	 
        </Grid>
      <Grid item xs={12} lg={12} mt={5}>
      <Typography variant="h5">Design</Typography>
                <Typography variant="h2">Dashboards are Dynamic</Typography>
                <Typography variant="body1">Due to the dynamic nature of this platform many site maps were created to show what pages each user would see. Our design had to account for that and the following images will show the maps. Here is the information architecture that we came up with.</Typography>
                <Typography variant="h2">Site Maps</Typography>
                
                   
     
        </Grid>
        <Grid item xs={12} lg={12} mt={5}>
      
                    
      
      <Box sx={{borderRadius: '16px',}}>
      <Image src="/assets/fadewire1.png" alt="" height={900} width={1280} />
</Box>
</Grid>

<Grid item xs={12} lg={12} mt={5}>

      
     
      <Box sx={{borderRadius: '16px',}}>
      <Image src="/assets/fadewire2.png" alt="" height={1080} width={1440} />
</Box>
</Grid>
       
      <Grid item xs={12} lg={12} mt={5}>
      
                <Typography  variant="h2">The Happy Paths</Typography>
                <Typography  variant="body1">Fades user flow was touched on earlier at the journey map but here is a bit more detail showing how users would navigate on the platform. We focused on the primary flow, which is 'Sign-up' for the platform.</Typography>
            
                    
     
        </Grid>
       
      <Grid item xs={12} lg={12} mt={5}>
      <Typography variant="h5">Visual Design</Typography>
            <Typography variant="h2">Simple and Intuitive Dashboard</Typography>
            <Typography variant="body1">A simple and intuitive dashboard with all of the minimal features that Fade needs for its clients. These are the final design that the team and I came up with for Fade's dashboard. Desktop was primary so we did not design a mobile solution </Typography>
     
        </Grid>
        
      <Grid item xs={12} lg={12} mt={5}>
      <Typography variant="h5">Results & Reflections</Typography>
        
        <Typography variant="h2">Dashboards Are a Challenge</Typography>
    <Typography  variant="body1">Dashboards are a challenging design to take on with many moving parts. This was in many ways a vey challenging project for our team. We started off with no ability to research the user and had to rely on the project brief for all of our research. In many ways we had to abondone the normal UX steps and just work with what we had.</Typography>
    <Typography variant="body1">It turned out that what we had was sufficient and we were able to design by looking at other dashboards and copying their architecture and layout and use Fades business goals and needs provided to us in the project brief.</Typography>
     
        </Grid>
        
     
      <Grid item xs={12} lg={12}mt={5}>

     
        </Grid>
        
		</Grid>
	  </Box>
    </Container>
  )
}

export default CaseStudyTemplate