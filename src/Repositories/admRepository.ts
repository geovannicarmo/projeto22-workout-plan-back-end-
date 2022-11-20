import client from '../database/prisma';

export async function newExercisesTypeRepository(dataNewExercisesType: any){
	return await client.exercisesCategory.create({data: dataNewExercisesType});
}

export async function gymGoersRegisterRepository(dataUserRegister: any){
	await client.gymGoers.create({
		data: dataUserRegister
	});
}

export async function personalRegisterRepository(dataUserRegister: any){
	await client.personalTrainers.create({
		data: dataUserRegister
	});
}
