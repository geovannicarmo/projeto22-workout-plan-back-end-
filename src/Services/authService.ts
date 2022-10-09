import sgMail from '@sendgrid/mail'
import {generate} from 'generate-password'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as errors from '../utils/errorUtils'
import * as authRepository from '../Repositories/authRepository'


export async function getPersonalTrainersByIdServices(idUser: number) {

    const isPersonal = await authRepository.findPersonalTrainersByIdRepository(idUser)

    
    if(isPersonal===null){
        throw errors.unauthorizedError()
    }
}

async function  GymGoerRegisterService(dataGymGoerRegister: any){
    
    const password = generate({
        length: 6,
        numbers: true
    })
    
    const salt = 10
    
    
    const passworCrypt =  bcrypt.hashSync("123456", salt)

    console.log(passworCrypt)
    
    dataGymGoerRegister.password = passworCrypt

    const isEmail =  await authRepository.findGymGoerByEmail(dataGymGoerRegister.email)

    if(isEmail!==null){
        throw errors.conflictError("email already registered")
    }
    
    await authRepository.GymGoerRegisterRepository(dataGymGoerRegister)

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

    if(!SENDGRID_API_KEY){
        throw "mio"
    }


sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
    to: 'geovannidocarmo@outlook.com',
  from: 'geovannidocarmo@gmail.com', // Use the email address or domain you verified above
  subject: 'Senha para a academia',
  text: `Sua senha é: ${password}`,
  html: `Sua senha é: ${password}`,
};

sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
    
    if (error.response) {
        console.error(error.response.body)
    }
});
}



export async function signInService(dataLogin: any) {

    console.log(dataLogin)

    const dataUser = await authRepository.findByEmail(dataLogin.email)
    
    if(!dataUser){
        throw errors.unauthorizedError("email or password incorrect")
    }


    const passwordVerify = bcrypt.compareSync(dataLogin.password, dataUser.password)


    if(!passwordVerify){
        throw errors.unauthorizedError("email or password incorrect")
    }

    const SECRET = process.env.SECRET
    if(typeof(SECRET)!=="string"){
        throw "Internal Server Error"
    }
    const data = dataUser.id
    const config = {expiresIn: 60*60}
    const token = jwt.sign({data}, SECRET, config)

    
    
    return token
}

const authService = {
    GymGoerRegisterService,
    signInService
}

export default authService