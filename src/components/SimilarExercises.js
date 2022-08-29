import React from 'react'
import {Box,Typography,Stack, Button} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
const SimilarExercises = ({equipmentExercise, targetMuscleExercise}) => {
    return (
    <Box sx={{mt:{lg:'100px',xs:'50px'}}}p="20px" >
      <Typography variant="h4" mb={5}>
      Workout that target the same muscle group.
      </Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {targetMuscleExercise.length ?<HorizontalScrollbar data={targetMuscleExercise}/>
        :<Loader/>}
      </Stack>
{/* Same Equipment */}
      <Typography variant="h4" mb={5}>
      Workout that use the same equipment.
      </Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {equipmentExercise.length ?<HorizontalScrollbar data={equipmentExercise}/>
        :<Loader/>}
      </Stack>
    </Box>
    )
}

export default SimilarExercises
