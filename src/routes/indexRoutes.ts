import { Router } from "express";
import authRoutes from "./authRoutes";
import routerPersonalScreen from "./personalScreenRoutes"

const router = Router()

router.use(authRoutes)
router.use(routerPersonalScreen)

export default router