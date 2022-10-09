import personalScreenRepository from '../Repositories/personalScreenRepository'

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


const personalScreenService = {
    getAllGymGoersService,
    newExercisesService,
    eachGymGoerService,
    exerciseCategoryService
}

export default personalScreenService