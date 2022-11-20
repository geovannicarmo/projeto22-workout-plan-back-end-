import { Router } from 'express';
import { personalScreenController, newExercisesController, eachGymGoerController, deleteExercisesController, exerciseCategoryController } from '../Controllers/personalController';
import verifyTokenMiddlewerw from '../medleweres/verifyTokenMiddlewerw';
import { newExercisesSchema } from '../schemas/personalSchemas';
import schemasMidlewares from '../medleweres/schemasMidlewares';

const routerPersonalScreen = Router();

routerPersonalScreen.get('/AllGymGoers', personalScreenController);

routerPersonalScreen.post('/newExercises', schemasMidlewares(newExercisesSchema), newExercisesController);

routerPersonalScreen.get('/eachGymGoer/:idGymGoers', eachGymGoerController);

routerPersonalScreen.get('/exerciseCategory', exerciseCategoryController);

routerPersonalScreen.delete('/deleteExercises/:idExercise', deleteExercisesController);


export default routerPersonalScreen;
