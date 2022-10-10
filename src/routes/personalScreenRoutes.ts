import { Router } from "express";
import { personalScreenController, newExercisesController, eachGymGoerController, deleteExercisesController, exerciseCategoryController } from "../Controllers/personalScreenController";
import verifyTokenMiddlewerw from "../medleweres/verifyTokenMiddlewerw";

const routerPersonalScreen = Router()

routerPersonalScreen.get('/AllGymGoers',verifyTokenMiddlewerw, personalScreenController)

routerPersonalScreen.post('/newExercises',verifyTokenMiddlewerw, newExercisesController)

routerPersonalScreen.get('/eachGymGoer/:idGymGoers',verifyTokenMiddlewerw, eachGymGoerController)

routerPersonalScreen.get('/exerciseCategory',verifyTokenMiddlewerw, exerciseCategoryController)

routerPersonalScreen.delete('/deleteExercises/:idExercise',verifyTokenMiddlewerw, deleteExercisesController)


export default routerPersonalScreen
