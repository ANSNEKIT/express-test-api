import { Response, Request, NextFunction } from 'express';
import { HTTPError } from './../errors/http-erros.class.js';
import { BaseController } from "../common/base.controller.js";
import { LoggerService } from "../logger/logger.service.js";

export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);

        this.bindRoutes([
            {method: 'get', path: '/login', func: this.login},
            {method: 'get', path: '/register', func: this.register},
        ]);
    }

    public login(req: Request, res: Response, next: NextFunction) {
        next(new HTTPError(401, 'Не авторизован', 'users'));
    }

    public register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'Зарегистрирован');
    }
}