import personalScreenService from "../Services/personalScreenService";
import { Request, Response } from 'express'

export async function personalScreenController(req:Request, res:Response){
   
    const AllGymGoers = await personalScreenService.getAllGymGoers()
    console.log(AllGymGoers)
    res.send(AllGymGoers)
}