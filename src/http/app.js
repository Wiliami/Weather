import express from 'express';
import path from 'path';
import routes from '../routes/index.js';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars'

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        this.app.use('/assets', express.static(path.join(__dirname, '../../assets')));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.engine('.hbs', engine({extname: '.hbs'}));
        this.app.set('view engine', '.hbs');   
        this.app.use(express.urlencoded({ extended:false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', routes);
        this.app.get('*', (req, res) => res.send('Rota 404 - Not found error!:'));
    }

    listen(port) {
        this.app.listen(port, () => console.log(`Server started on port http://localhost:8082`));
    }
}

export { App };