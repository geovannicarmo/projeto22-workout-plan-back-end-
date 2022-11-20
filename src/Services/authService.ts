import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as errors from '../utils/errorUtils';
import * as authRepository from '../Repositories/authRepository';
import encrypt from '../utils/crypt';

export async function getPersonalTrainersByIdServices(idUser: number) {
	const isPersonal = await authRepository.findPersonalTrainersByIdRepository(idUser);
	if(isPersonal===null){
		throw errors.unauthorizedError();
	}
}

export async function getGymGoerByIdServices(idUser: number) {
	const isGymgoer = await authRepository.findGymgoerByIdRepository(idUser);
	if(isGymgoer===null){
		throw errors.unauthorizedError();
	}
}

export async function getAdmByIdServices(idUser: number) {
	const isGymgoer = await authRepository.findAdmByIdRepository(idUser);
	if(isGymgoer===null){
		throw errors.unauthorizedError();
	}
}

async function signInService(dataLogin: any) {
	let dataUser = null;
	
	if(dataLogin.typeUser==='Personal'){
		dataUser = await authRepository.findPersonalByEmail(dataLogin.email);
	}else if(dataLogin.typeUser==='Aluno'){
		dataUser = await authRepository.findGymGoerByEmail(dataLogin.email);
	}else if(dataLogin.typeUser==='Adm'){
		dataUser = await authRepository.findAdmByEmail(dataLogin.email);
	}
	if(!dataUser){
		throw errors.unauthorizedError('email or password incorrect');
	}
	const passwordVerify = bcrypt.compareSync(dataLogin.password, dataUser.password);
	
	if(!passwordVerify){
		console.log('passwordVerify');
		throw errors.unauthorizedError('email or password incorrect');
	}
	const SECRET = process.env.SECRET;
	if(typeof(SECRET)!=='string'){
		throw 'Internal Server Error';
	}
	const data = { id: dataUser.id, typeUser: dataLogin.typeUser };
	const config = {expiresIn: 60*60};
	const token = jwt.sign(data, SECRET, config);
	return {token, name: dataUser.name, photo: dataUser.photo};
}

export async function updatePassService(dataUser: any){
	dataUser.data.password=encrypt(dataUser.data.password);
	if(dataUser.typeUser==='Personal'){
		return await authRepository.updatePersonalPassRepository(dataUser.idUser, dataUser.data);
	}else if(dataUser.typeUser==='Aluno'){
		return await authRepository.updateGymGoersPassRepository(dataUser.idUser, dataUser.data);
	}else if(dataUser.typeUser==='Adm'){
		await authRepository.updateAdmPassRepository(dataUser.idUser, dataUser.data);
	}
}


const authService = {
	signInService
};

export default authService;