import authService from '../Services/authService';
import { Request, Response } from 'express';
import { updatePassService } from '../Services/authService';

export async function signInController(req: Request, res: Response){
	const token = await authService.signInService(req.body);
	res.send(token);

}

export async function updatePassController(req: Request, res: Response){
	const idUser = res.locals.idUser;
	const typeUser = res.locals.typeUser;
	const password = req.body.passWord;
	const dataUser={
		typeUser,
		idUser,
		data: {
			password
		}
	};

	await updatePassService(dataUser);

	res.sendStatus(201);
}