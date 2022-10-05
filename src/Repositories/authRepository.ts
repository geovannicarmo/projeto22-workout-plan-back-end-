import client from "../database/prisma";
import * as errors from '../utils/errorUtils'
//  import { IError } from "../medleweres/handleErrorsMiddleware";


export async function GymGoerRegisterRepository(dataGymGoerRegister: any){


        await client.gymGoers.create({

            data: dataGymGoerRegister

        })

}

export async function findGymGoerByEmail(email: string){

    console.log(email)

    return  await client.gymGoers.findFirst({

        where:{
            email
        }
    })

}

export async function findByEmail(email: string){

    return  await client.personalTrainers.findFirst({

        where:{
            email
        }
    })

}


export async function findPersonalTrainersByIdRepository(idUser: number){

   return await client.personalTrainers.findFirst({
        where:{id:idUser}
    })

}


