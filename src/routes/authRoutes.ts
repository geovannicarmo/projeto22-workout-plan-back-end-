import { Router } from 'express';
import { signInController} from '../Controllers/authController'; 
import {singUpSchema, UpdatePassSchemas} from '../schemas/authSchemas';
import schemasMidlewares from '../medleweres/schemasMidlewares';
import verifyTokenMiddlewerw from '../medleweres/verifyTokenMiddlewerw';
import { updatePassController } from '../Controllers/authController';

const authRoutes = Router();

authRoutes.post('/singIn', schemasMidlewares(singUpSchema), signInController);

authRoutes.put('/updatePass', schemasMidlewares(UpdatePassSchemas), verifyTokenMiddlewerw,updatePassController);

export default authRoutes;