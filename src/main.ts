import App from './app.js';
import { LoggerService } from "./logger/logger.service.js";

const boot = async () => {
    const app = new App(new LoggerService());
    await app.init();
}

boot();