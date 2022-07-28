import express, { Express } from "express";
import {Server} from 'http';
import { userRouter } from './users/users.js';
import { LoggerService } from "./logger/logger.service.js";

export default class App {
    app: Express;
    port: number;
    server: Server;
    logger: LoggerService;

    constructor(logger: LoggerService) {
        this.app = express();
        this.port = 7000;
        this.logger = logger;
    }

    useRoutes() {
        this.app.use('/users', userRouter); 
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен. Прослушиваю порт ${this.port}`);
    }
}