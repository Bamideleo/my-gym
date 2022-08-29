import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {workoutOption,fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({
  setExercises, bodyPart, setBodyPart
}) => {
  const [search, setSearch] = useState('')
  const [bodyparts, setBodyparts] = useState([])

  useEffect(() => {
    const  fetchWorkout = async()=>{
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      workoutOption);  

      setBodyparts(['all',...bodyPartData]);

    }
    fetchWorkout();
  }, [])

  const handleSearch = async () =>{
    if(search){
      const workoutData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
      workoutOption); 
      const searchedWorkout =  workoutData.filter(
        (exercise)=> exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search) 
        || exercise.equipment.toLowerCase().includes(search) 
        ||exercise.bodyPart.toLowerCase().includes(search) 
      );

      setSearch('');
      setExercises(searchedWorkout);
    }
  }
  return (
      <Stack 
      alignItems="center" mt="37px"
      justifyContent="center" p="20px"
      >
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}}
        mb="50px" textAlign="center"
        >
          Awesome Workouts You <br/> Should Learn
        </Typography>
        <Box position="relative" mb="72px">
          <TextField 
           sx={{
             input:{fontWeight:'700',border:'none',borderRadius:'4px'},
             width:{lg:'800px',xs:'350px'},
             backgroundColor:'fff',
             borderRadius:'40px'
            }}
          height="76px"
            value={search} 
            onChange ={(e)=> setSearch(e.target.value.toLowerCase())}
            placeholder="Search Workouts"
            type="text"
        />
        <Button variant="outlined" className="search-btn" color="success"
        sx={{
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          fontSize:{lg:'18px',xs:'14px'},
          height:'56px',
          postion:'absolute',
          right:'0'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
           <HorizontalScrollbar data={bodyparts}
           bodyPart={bodyPart}
           setBodyPart={setBodyPart} isBodyParts/> 
        </Box>
      </Stack>
    )
}

export default SearchExercises
