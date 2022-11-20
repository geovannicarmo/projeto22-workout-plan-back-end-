import bcrypt from 'bcrypt';

export default function encrypt(pass: string){
    
	const salt = 10;
	return  bcrypt.hashSync(pass, salt);

}