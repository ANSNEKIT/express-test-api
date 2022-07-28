import express from "express";
import { userRouter } from './users/users.js';
export default class App {
    constructor(logger) {
        this.app = express();
        this.port = 7000;
        this.logger = logger;
    }
    useRoutes() {
        this.app.use('/users', userRouter);
    }
    async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен. Прослушиваю порт ${this.port}`);
    }
}
