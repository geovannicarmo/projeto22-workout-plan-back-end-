import { number } from 'joi'
import personalScreenRepository from '../Repositories/personalScreenRepository'
import {notFoundError} from '../utils/errorUtils'

async function getAllGymGoersService(){
   
    return await personalScreenRepository.findAllGymGoers()
}

async function newExercisesService(dataNewExercises: any){
   
    dataNewExercises.carga= parseInt(dataNewExercises.carga)
    dataNewExercises.nRepetitions= parseInt(dataNewExercises.nRepetitions)
    dataNewExercises.nSeries= parseInt(dataNewExercises.nSeries)
    dataNewExercises.ExercisesCategoryId= parseInt(dataNewExercises.ExercisesCategoryId)
    dataNewExercises.GymGoersId= parseInt(dataNewExercises.GymGoersId)
    

    const ex =  await personalScreenRepository.newExercises(dataNewExercises)
    console.log(ex)
    return 
}

async function eachGymGoerService(idGymGoers: number) {
    
    console.log(idGymGoers)
    return personalScreenRepository.findGymGoerById(idGymGoers)
}

exerciseCategoryService

async function exerciseCategoryService() {
    
   
    return personalScreenRepository.findCaregory()
}


async function deleteExercisesService(idExercise: number) {
    
   const isExercise = await personalScreenRepository.findExerciseById(idExercise)

   console.log(isExercise)

   if(!isExercise){
    throw notFoundError('exercise not found')
   }

    return personalScreenRepository.deleteExercisesRepository(idExercise)
}


const personalScreenService = {
    getAllGymGoersService,
    newExercisesService,
    eachGymGoerService,
    exerciseCategoryService,
    deleteExercisesService
}

export default personalScreenService