import { Router } from 'express';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

const private_key_api = process.env.PRIVATE_KEY

const router = Router();

router.get('/', async (req, res, next) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:8082');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With , Content-Type, Accept');
    next();
    
    try {
        const response = await axios.get('https://api.meteorologia.com/dados', {
            headers: {
                'Authorization': private_key_api,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao obter dados meteorológicos');
    }
});

export default router;