import { Router } from 'express';
import axios from 'axios';

const key_api = "d90ff67156bc289cf5e79d6be28f583f"

const router = Router();

router.get('/', async (req, res, next) => {

    res.header('Access-Control-Allow-Origin', 'http://seufrontend.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With , Content-Type, Accept');
    next();
    
    try {
        const responseApi = await axios.get('https://api.meteorologia.com/dados', {
            headers: {
                'Authorization': key_api,
            },
        });

        res.json(responseApi.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao obter dados meteorológicos');
    }
});

export default router;