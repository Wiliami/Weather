import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Rota home');
});

export default router;