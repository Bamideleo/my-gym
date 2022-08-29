import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import {workoutOption,fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  
 const [currentPage, setcurrentPage] = useState(1); 
 const execrisesPerpage =9;

//  calculate the pagination of each page
const indexOfLastExercise = currentPage *  execrisesPerpage;
const indexOfFirstExercise = indexOfLastExercise - execrisesPerpage;
const currentExercises = exercises.slice(
  indexOfFirstExercise,indexOfLastExercise 
);
 const paginate = (e,value)=>{
  setcurrentPage(value);
  window.scrollTo({top:1800,behavior:'smooth'})
 }

//  Fetching Category Workout 
 useEffect(()=>{
    const fetchExerciseData = async()=>{
      let  exerciseData = [];
      if(bodyPart=== 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
        workoutOption); 
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        workoutOption); 
      }
      setExercises(exerciseData); 
    }
    fetchExerciseData(); 
 },[bodyPart])



  return (
        <Box id="exercises" 
        sx={{mt:{lg:'110px'}}}
        mt="50px"
        p="20px"
        >
          <Typography variant="h6" mb="46px">
               Showing Result
          </Typography>
           <Stack direction="row"
           sx={{gap:{lg:'110px',xs:'50px'}}}
           flexWrap="wrap" justifyContent="center"
           >
             {
               currentExercises.map((exercise, index)=>(
                <ExerciseCard key={index} exercise={exercise}/>
               ))
             }
           </Stack>
           <Stack mt="100px" alignItems="center">
              {exercises.length > 9 &&(
                <Pagination variant="outlined" color="secondary" 
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length/execrisesPerpage)}
                page={currentPage}
                onChange={paginate}
                size ="large"
                />
              )}
           </Stack>
        </Box>
    )
}

export default Exercises
