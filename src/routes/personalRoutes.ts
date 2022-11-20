import { Router } from 'express';
import { personalScreenController, newExercisesController, eachGymGoerController, deleteExercisesController, exerciseCategoryController } from '../Controllers/personalController';
import verifyTokenMiddlewerw from '../medleweres/verifyTokenMiddlewerw';
import { newExercisesSchema } from '../schemas/personalSchemas';
import schemasMidlewares from '../medleweres/schemasMidlewares';

const routerPersonalScreen = Router();

routerPersonalScreen.get('/AllGymGoers', verifyTokenMiddlewerw, personalScreenController);

routerPersonalScreen.post('/newExercises', verifyTokenMiddlewerw, schemasMidlewares(newExercisesSchema), newExercisesController);

routerPersonalScreen.get('/eachGymGoer/:idGymGoers', verifyTokenMiddlewerw, eachGymGoerController);

routerPersonalScreen.get('/exerciseCategory', verifyTokenMiddlewerw, exerciseCategoryController);

routerPersonalScreen.delete('/deleteExercises/:idExercise', verifyTokenMiddlewerw, deleteExercisesController);


export default routerPersonalScreen;
