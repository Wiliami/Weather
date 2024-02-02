import express from 'express';
import routes from './routes/main.routes.js';

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
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