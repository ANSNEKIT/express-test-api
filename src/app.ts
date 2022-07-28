import express, { Express } from "express";
import { userRouter } from './users/users.js';
import http, {Server} from 'http';

export default class App {
    app: Express;
    port: number;
    server: Server;

    constructor() {
        this.app = express();
        this.port = 7000;
    }

    useRoutes() {
        this.app.use('/users', userRouter); 
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        console.log(`Сервер запущен. Прослушиваю порт ${this.port}`);
    }
}