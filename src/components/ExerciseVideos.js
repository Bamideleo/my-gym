import React from 'react'
import {Box,Typography,Stack, Button} from '@mui/material';
const ExerciseVideos= ({exerciseVideo,name}) => {
   // console.log(exerciseVideo);
    return (
       <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p="20px" >
         <Typography variant="h5" mb="33px">
            Watch <span style={{color:'#0d7a03',textTransform:'capitalize'}}>{name}</span>  workout videos
             </Typography> 
             <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
             sx={{
                flexDirection:{lg:'row'},
                gap: {lg:'50px',xs:'80px'}
             }}
             >
                 {
                     exerciseVideo.slice(0,8).map((item,index)=>(
                        <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                        <Box>
                           <Typography   variant="h6" color="#000" fontSize="18px">
                              {item.video.title}
                           </Typography>
                           <Typography   variant="h6" color="#0d7a03" fontSize="14px">
                              {item.video.channelName}
                           </Typography>
                        </Box>
                        </a>
                     )) 
                     }
                 </Stack> 
       </Box>
    )
}

export default ExerciseVideos
