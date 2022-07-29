import { Response, Request } from 'express';
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

    public login(req: Request, res: Response) {
        this.ok(res, 'Вошел');
    }

    public register(req: Request, res: Response) {
        this.ok(res, 'Зарегистрирован');
    }
}