import { IExeptionFilter } from './errors/exeption.filter.interface';
import { Container, ContainerModule, interfaces } from 'inversify';
import { ExeptionFilter } from './errors/exeption.filter.js';
import App from './app.js';
import { LoggerService } from "./logger/logger.service.js";
import { UserController } from './users/users.controller.js';
import { ILogger } from './logger/logger.interface.js';
import { TYPES } from './types.js';
import { IUserController } from './users/users.controller.interface';


export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<ILogger>(TYPES.ILogger).to(LoggerService);
    bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
    bind<IUserController>(TYPES.UserController).to(UserController);
    bind<App>(TYPES.Application).to(App);
});


function boot() {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(TYPES.Application);
    app.init();


    return { app, appContainer };
}


export const { app, appContainer } = boot();
