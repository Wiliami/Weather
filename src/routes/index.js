import { Router } from "express";
import home from './home.js';
import api from '../../services/service.weather.js';

const router = Router();

router.use('/', home);
router.use('/api', api);

export default router;