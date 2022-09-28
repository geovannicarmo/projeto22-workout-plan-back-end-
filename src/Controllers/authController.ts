import authService from "../Services/authService";
import { Request, Response } from 'express'


export function signUpController(req: Request, res: Response){

    authService.signUpService("pp")
}


export function signInController(req: Request, res: Response){

    authService.signUpService("pp")
    
}