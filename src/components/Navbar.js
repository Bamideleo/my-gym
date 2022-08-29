import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';

import Logo from '../assets/images/Logo.jpg';


const Navbar = () => {
    return (
        <Stack
        direction="row"
        justifyContent="sapce-around"
        sx={{gap:{sm:'122px',xs:'40px'},
    mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px="20px"
        >
            <Link to="/">
            <img src={Logo} className="nav-logo"/>
            </Link>
            <Stack 
            direction="row"
            gap="40px"
            fontSize="24px"
            alignItems="flex-end"
            >
                <Link to="/" className="nav-item-1">Home</Link>
                <a href="#exercise" className="nav-item-0">Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar
