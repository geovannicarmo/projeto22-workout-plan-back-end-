import client from '../database/prisma';

export default async function getMyExercisesRepository(id: number){
	return await client.gymGoers.findUnique({
		where: {
			id,
		},
		select:{
			Exercises: {
				include:{
					category:true
				}
			},
		}
	});
}