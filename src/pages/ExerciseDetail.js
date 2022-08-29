import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {workoutOption,youtubeOptions,fetchData} from '../utils/fetchData';
import Detail from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {
     const [exerciseDetail, setexerciseDetail] = useState({});
    const [exerciseVideo, setexerciseVideoData] = useState([]);
    const [targetMuscleExercise, settargetMuscleExercise] = useState([]);
     const [equipmentExercise, setequipmentExercise] = useState([]);
    const {id} = useParams();

    useEffect(() => {
       const fetchExercisesDate = async ()=>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,workoutOption);
            // console.log(exerciseDetailData);
            setexerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
            //  console.log(exerciseVideosData);
            setexerciseVideoData(exerciseVideosData.contents);

            const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,workoutOption);
 
            settargetMuscleExercise(targetMuscleExerciseData);

            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,workoutOption);
        
            setequipmentExercise(equipmentExerciseData);
        }
       fetchExercisesDate();  

    }, [id]); 
     return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/> 
            <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise} />
        </Box>
    )
}

export default ExerciseDetail
