import { newExercisesTypeRepository } from '../Repositories/admRepository';
import sgMail from '@sendgrid/mail';
import {generate} from 'generate-password';
import * as errors from '../utils/errorUtils';
import * as authRepository from '../Repositories/authRepository';
import { gymGoersRegisterRepository, personalRegisterRepository } from '../Repositories/admRepository';
import encrypt from '../utils/crypt';

export async function newExercisesTypeServices(data: any){

	return await newExercisesTypeRepository(data);
}

export async function  userRegisterService(dataUserRegister: any){
	const passwordGenerate = generate({
		length: 6,
		numbers: true
	});
    
	dataUserRegister.password = encrypt(passwordGenerate);

	let isEmail = null;

	if(dataUserRegister.typeUser==='aluno'){

		isEmail =  await authRepository.findGymGoerByEmail(dataUserRegister.email);
	}
	else if(dataUserRegister.typeUser==='personal'){

		isEmail =  await authRepository.findPersonalByEmail(dataUserRegister.email);
	}
	
	if(isEmail!==null){
		throw errors.conflictError('email already registered');
	}

	if(dataUserRegister.typeUser==='aluno'){
		await gymGoersRegisterRepository(dataUserRegister);
	}
	else if(dataUserRegister.typeUser==='personal'){
		await personalRegisterRepository(dataUserRegister);
	}

	const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
	if(!SENDGRID_API_KEY){
		throw 'mio';
	}
	sgMail.setApiKey(SENDGRID_API_KEY);
	const msg = {
		to: dataUserRegister.email,
		from: 'geovannidocarmo@gmail.com', // Use the email address or domain you verified above
		subject: 'Senha para a academia',
		text: `Sua senha temporária é: ${passwordGenerate}`,
		html: `Sua senha é: ${passwordGenerate}`,
	};
	sgMail
		.send(msg)
		.then(() => {console.log('send email');}, error => {
			console.error(error);
			if (error.response) {
				console.error(error.response.body);
			}
		});
}