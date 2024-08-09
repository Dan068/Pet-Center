import {Router} from 'express';
import userRoute from './userRoute';
import appointmentRoute from './appointmentRoutes';



const router: Router = Router();
router.use('/users', userRoute);
router.use('/appointments', appointmentRoute)
export default router;
