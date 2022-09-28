import { Router } from "express";
import { signUpController, signInController} from "../Controllers/authController"; 

const authRoutes = Router()

authRoutes.get('/', signInController)

export default authRoutes