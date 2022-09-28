import { Router } from "express";
import { signUpController, signInController} from "../Controllers/authController"; 
import {singUpSchema} from "../schemas/authSchemas";
import schemasMidlewares from "../medleweres/schemasMidlewares";

const authRoutes = Router()

authRoutes.post('/singUp', schemasMidlewares(singUpSchema), signInController)

export default authRoutes