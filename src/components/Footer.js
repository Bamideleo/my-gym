import React from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import Logo from '../assets/images/Logo-1.jpg';

const Footer = () => {
    return (
       <Box mt="80px" bgcolor="fff3f4">
           <Stack gap="40px" alignItems="center" px="24px">
               <img src={Logo} alt="logo" width="200px" height="90px"/>
               <Typography variant="h5" pb="40" mt="1px">
            Made By Seun Bamidele
           </Typography>
           </Stack>
           
       </Box>
    )
}

export default Footer
