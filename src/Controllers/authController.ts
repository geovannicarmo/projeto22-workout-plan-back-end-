import authService from "../Services/authService";
import { Request, Response } from 'express'


export async function GymGoerRegisterController(req: Request, res: Response){

    await authService.GymGoerRegisterService(req.body)


    res.sendStatus(201)
}


export async function signInController(req: Request, res: Response){

        const token = await authService.signInService(req.body)
        res.send(token)
   

}