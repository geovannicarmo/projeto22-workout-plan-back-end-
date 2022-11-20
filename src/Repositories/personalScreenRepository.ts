import client from '../database/prisma';
import { Exercises } from '@prisma/client';

async function findAllGymGoers(){
	return await client.gymGoers.findMany({
		select:{
			id:true,
			name:true,
			photo:true
		}
	});
}

async function newExercises(dataNewExercises: Ex){
	await client.exercises.create({
		data: dataNewExercises
	});
}

async function findGymGoerById(id: number){
	return await client.gymGoers.findUnique({
		where: {
			id,
		},
		select:{
			name:true,
			photo:true,
			Exercises: {
				include:{
					category:true
				}
			},
		}
	});
}


async function findCaregory(){
	return await client.exercisesCategory.findMany();
}

async function deleteExercisesRepository(id: number){
	return await client.exercises.delete({
		where: {
			id
		}
	});
}


async function findExerciseById(id: number){
	return await client.exercises.findUnique({
		where: {
			id
		}
	});
}


const personalScreenRepository = {
	findAllGymGoers,
	newExercises,
	findGymGoerById,
	findCaregory,
	deleteExercisesRepository,
	findExerciseById
}; 

export default personalScreenRepository;


type Ex =Omit<Exercises, 'id'>