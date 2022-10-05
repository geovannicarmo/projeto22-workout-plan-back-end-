import { Router } from "express";
import { personalScreenController } from "../Controllers/personalScreenController";
import verifyTokenMiddlewerw from "../medleweres/verifyTokenMiddlewerw";

const routerPersonalScreen = Router()

routerPersonalScreen.get('/AllGymGoers',verifyTokenMiddlewerw, personalScreenController)


export default routerPersonalScreen
