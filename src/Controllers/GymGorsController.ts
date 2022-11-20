import { Request, Response } from 'express';
import getMyExercisesService from '../Services/gymGoerServise';

export async function getMyExercisesController(req: Request, res: Response){


	const idUser = res.locals.idUser;
	const response = await getMyExercisesService(idUser);
	
	res.status(200).send(response);
}