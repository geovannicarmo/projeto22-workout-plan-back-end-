import { Router } from 'express';
import { getMyExercisesController } from '../Controllers/GymGorsController';
import verifyTokenMiddlewerw from '../medleweres/verifyTokenMiddlewerw';


const routerGymGors = Router();

routerGymGors.get('/myExercises', verifyTokenMiddlewerw, getMyExercisesController);


export default routerGymGors;