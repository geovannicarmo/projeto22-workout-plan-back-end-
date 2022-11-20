import { Request, Response } from 'express';
import { newExercisesTypeServices, userRegisterService } from '../Services/admServices';

export async function newExercisesTypeController(req: Request, res: Response){
	const data = req.body;
	await newExercisesTypeServices(data);
	console.log('voltei');
	res.sendStatus(201);
}

export async function userRegisterController(req: Request, res: Response){
	await userRegisterService(req.body);
	res.sendStatus(201);

}