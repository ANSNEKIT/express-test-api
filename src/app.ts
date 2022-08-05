import express, { Express } from "express";
import {Server} from 'http';
import { UserController } from './users/users.controller.js';
import { ExeptionFilter } from './errors/exeption.filter.js';
import { ILogger } from "./logger/logger.interface.js";
import { inject, injectable } from "inversify";
import { TYPES } from "./types.js";
import 'reflect-metadata';

@injectable()
export default class App {
    app: Express;
    port: number;
    server: Server;

    constructor(
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.UserController) private userController: UserController,
        @inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,
        ) {
        this.app = express();
        this.port = 7000;
    }

    useRoutes() {
        this.app.use('/users', this.userController.router); 
    }

    useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
    }

    public async init() {
        this.useRoutes();
        this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен. Прослушиваю порт ${this.port}`);
    }
}