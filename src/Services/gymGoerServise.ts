import getMyExercisesRepository from '../Repositories/gymGoerRepository';

export default async function getMyExercisesService(id: number){
	return await getMyExercisesRepository(id);
}