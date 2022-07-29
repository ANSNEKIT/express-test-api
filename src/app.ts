import express, { Express } from "express";
import {Server} from 'http';
import { UserController } from './users/users.controller.js';
import { LoggerService } from "./logger/logger.service.js";

export default class App {
    app: Express;
    port: number;
    server: Server;
    logger: LoggerService;
    userController: UserController;

    constructor(
        logger: LoggerService,
        userController: UserController,
        ) {
        this.app = express();
        this.port = 7000;
        this.logger = logger;
        this.userController = userController;
    }

    useRoutes() {
        this.app.use('/users', this.userController.router); 
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен. Прослушиваю порт ${this.port}`);
    }
}