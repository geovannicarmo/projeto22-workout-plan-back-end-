import client from '../database/prisma';

export async function findGymGoerByEmail(email: string){

	return  await client.gymGoers.findFirst({
		where:{
			email
		}
	});

}

export async function findPersonalByEmail(email: string){

	return  await client.personalTrainers.findFirst({
		where:{
			email
		}
	});

}

export async function findAdmByEmail(email: string){

	return  await client.adm.findFirst({
		where:{
			email
		}
	});

}



export async function findPersonalTrainersByIdRepository(idUser: number){

	return await client.personalTrainers.findFirst({
		where:{id:idUser}
	});
}

export async function findGymgoerByIdRepository(idUser: number){

	return await client.gymGoers.findFirst({
		where:{id:idUser}
	});

}

export async function findAdmByIdRepository(idUser: number){

	return await client.adm.findFirst({
		where:{id:idUser}
	});

}



export async function updateAdmPassRepository(idUser: number, data: {password: string}){
	return await client.adm.update({
		where:{id:idUser},
		data
	});
}

export async function updateGymGoersPassRepository(idUser: number, data: {password: string}){
	return await client.gymGoers.update({
		where:{id:idUser},
		data
	});
}

export async function updatePersonalPassRepository(idUser: number, data: {password: string}){
	return await client.personalTrainers.update({
		where:{id:idUser},
		data
	});
}


