import { Router } from 'express';
import {newExercisesTypeController, userRegisterController} from '../Controllers/admController';
import verifyTokenMiddlewerw from '../medleweres/verifyTokenMiddlewerw';

const admRoutes = Router();

admRoutes.post('/newExercisesType', verifyTokenMiddlewerw, newExercisesTypeController);
admRoutes.post('/newUser', verifyTokenMiddlewerw, userRegisterController);

export default admRoutes;
