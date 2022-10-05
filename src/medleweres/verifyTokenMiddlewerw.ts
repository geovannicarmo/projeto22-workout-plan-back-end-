import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import * as errors from '../utils/errorUtils'
import {getPersonalTrainersByIdServices} from '../Services/authService'

export default async function verifyTokenMiddlewerw(
    req: Request,
    res: Response, 
    next: NextFunction
    ){


        const authorization = req.headers.authorization

      

        if(!authorization){
         return res.status(401).send("token not send")
        }
        const SECRET = process.env.SECRET
        if(!SECRET){
         throw errors.internalServerError("Internal Server Error")
        }

        try{

            const token = authorization.replace("Bearer ","")
            const dataToken: any = jwt.verify(token, SECRET)
            const idUser = dataToken.data
 
            await getPersonalTrainersByIdServices(idUser)
            res.locals.idUser = idUser
            next()
         }catch{
             return res.status(401).send("invalid token")
         }
     
    }