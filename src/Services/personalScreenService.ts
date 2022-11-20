import personalScreenRepository from '../Repositories/personalScreenRepository';
import {notFoundError} from '../utils/errorUtils';

async function getAllGymGoersService(){
   
	return await personalScreenRepository.findAllGymGoers();
}

async function newExercisesService(dataNewExercises: any){
   
	dataNewExercises.carga= parseInt(dataNewExercises.carga);
	dataNewExercises.nRepetitions= parseInt(dataNewExercises.nRepetitions);
	dataNewExercises.nSeries= parseInt(dataNewExercises.nSeries);
	dataNewExercises.ExercisesCategoryId= parseInt(dataNewExercises.ExercisesCategoryId);
	dataNewExercises.GymGoersId= parseInt(dataNewExercises.GymGoersId);
	dataNewExercises.break= parseInt(dataNewExercises.break);

	await personalScreenRepository.newExercises(dataNewExercises);
	return; 
}

async function eachGymGoerService(idGymGoers: number) {
	return personalScreenRepository.findGymGoerById(idGymGoers);
}

exerciseCategoryService;

async function exerciseCategoryService() {
	return personalScreenRepository.findCaregory();
}


async function deleteExercisesService(idExercise: number) {
	const isExercise = await personalScreenRepository.findExerciseById(idExercise);
	if(!isExercise){
		throw notFoundError('exercise not found');
	}

	return personalScreenRepository.deleteExercisesRepository(idExercise);
}


const personalScreenService = {
	getAllGymGoersService,
	newExercisesService,
	eachGymGoerService,
	exerciseCategoryService,
	deleteExercisesService
};

export default personalScreenService;