import personalScreenService from '../Services/personalScreenService';
import { Request, Response } from 'express';
import {wrongSchemaError} from '../utils/errorUtils';

export async function personalScreenController(req:Request, res:Response){
	const AllGymGoers = await personalScreenService.getAllGymGoersService();
	res.send(AllGymGoers);
}

export async function newExercisesController(req:Request, res:Response){
	const AllGymGoers = await personalScreenService.newExercisesService(req.body);
	res.send(AllGymGoers);
}

export async function eachGymGoerController(req:Request, res:Response){
	const idGymGoers = parseInt(req.params.idGymGoers);
	if(isNaN(idGymGoers)){
		throw wrongSchemaError('params needs to be a number');
	}
	const eachGymGoer = await personalScreenService.eachGymGoerService(idGymGoers);
	res.send(eachGymGoer);
}

export async function exerciseCategoryController(req:Request, res:Response){
	const exerciseCategory = await personalScreenService.exerciseCategoryService();
	res.send(exerciseCategory);
}

export async function deleteExercisesController(req:Request, res:Response){
	const idExercise = parseInt(req.params.idExercise);
	await personalScreenService.deleteExercisesService(idExercise);
	res.send('deleted');
}