import React from 'react'
import {Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.jpg';


const BodyPart = ({item, setBodyPart, bodyPart}) => {
    return (
        <Stack
        type ="button"
        alignItems ="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart ===item ? '4px solid #0d7a03':'',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
        }}
        onClick ={()=>{
            setBodyPart(item)
        }}
        >
            <img src={Icon} alt="dumbell" style={{width:'100px', height:'70px'}}/>
        <Typography fontSize="20px" textTransform="capitalize">{item}</Typography>
        </Stack>
    )
}

export default BodyPart
