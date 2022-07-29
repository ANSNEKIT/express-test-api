import { ExeptionFilter } from './errors/exeption.filter.js';
import App from './app.js';
import { LoggerService } from "./logger/logger.service.js";
import { UserController } from './users/users.controller.js';

const boot = async () => {
    const logger = new LoggerService();
    const app = new App(
        logger,
        new UserController(logger),
        new ExeptionFilter(logger),
    );
    await app.init();
}

boot();