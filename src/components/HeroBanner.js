import React from 'react'
import {Box, Stack, Typography,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
    return (
       <Box sx={{
           mt:{lg:'212px', xs:'70px'},
            ml:{sm:'50px'}
        }} position="600" fontSize="26px">
           <Typography color="#0d7a03"
           fontWeight="600" fontSize="26px">
               Fitness Hub
           </Typography>
           <Typography fontWeight={700 } 
           sx={{fontSize:{lg:'44px',xs:'40px'}}} mt="30" mb="23px">
               Sweat, Smile <br/> Try Again
           </Typography>
           <Typography fontSize="22px"lineHeight="35px" mb={4}>
               Check out the most effective workouts
           </Typography>
          
           <Button className="search-btn" variant="outlined"color="success"
           sx={{padding:'10px'}}
           >Explore Workout</Button>
           <Typography fontWeight={600}
           color="#0d7a03"
           sx={{
               opacity:0.1,
               display:{lg:'block',xs:'none'}
               
           }}
           fontSize="200px"
           >
               Workouts
           </Typography>
       <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
       
       </Box> 
    )
}

export default HeroBanner
 