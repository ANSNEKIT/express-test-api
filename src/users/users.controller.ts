import { Response, Request, NextFunction } from 'express';
import { ILogger } from './../logger/logger.interface';
import { HTTPError } from './../errors/http-erros.class.js';
import { BaseController } from "../common/base.controller.js";
import { inject, injectable } from 'inversify';
import { TYPES } from '../types.js';
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController {
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
        super(loggerService);

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