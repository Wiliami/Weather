import express from 'express';


class App {
    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
    }

    listen(port) {
        this.app.listen(port, () => console.log(`Server started on port http://localhost:8082`));
    }
}

export { App };