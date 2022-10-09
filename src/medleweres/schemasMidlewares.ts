import {Request, Response, NextFunction} from 'express'
import {ObjectSchema} from 'joi'


export default function schemasMidlewares(schema: ObjectSchema){

    return(
        req: Request,
        res: Response,
        next: NextFunction
    )=>{
        const {error} = schema.validate( req.body, {abortEarly: false})
        if(error){
            const validateError: Array<string> = []
            error.details.map((error: any)=>{validateError.push(error.message)})
            return res.status(422).send(validateError)
        }
        next()
    }
}