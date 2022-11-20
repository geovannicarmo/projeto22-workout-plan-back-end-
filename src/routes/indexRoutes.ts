import { Router } from 'express';
import authRoutes from './authRoutes';
import routerPersonalScreen from './personalRoutes';
import routerGymGors from './GymGorsRouter';
import admRoutes from './admRoutes';

const router = Router();

router.use(authRoutes);
router.use(routerPersonalScreen);
router.use(routerGymGors);
router.use(admRoutes);
export default router;