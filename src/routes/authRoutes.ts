import { Router } from "express";
import { GymGoerRegisterController, signInController} from "../Controllers/authController"; 
import {singUpSchema, GymGoerSchema} from "../schemas/authSchemas";
import schemasMidlewares from "../medleweres/schemasMidlewares";
import verifyTokenMiddlewerw from '../medleweres/verifyTokenMiddlewerw'

const authRoutes = Router()

authRoutes.post('/singIn', schemasMidlewares(singUpSchema), signInController)

authRoutes.post('/GymGoerRegister', verifyTokenMiddlewerw, schemasMidlewares(GymGoerSchema), GymGoerRegisterController)

export default authRoutes