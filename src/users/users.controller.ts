import 'reflect-metadata';
import { IUserController } from './users.controller.interface';
import { Response, Request, NextFunction } from 'express';
import { ILogger } from './../logger/logger.interface';
import { HTTPError } from './../errors/http-erros.class';
import { BaseController } from '../common/base.controller';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { ValidateMiddleware } from '../common/validate.middleware';
import { IUserService } from './user.servise.interface';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.UserService) private userService: IUserService,
	) {
		super(loggerService);

		this.bindRoutes([
			{ method: 'post', path: '/login', func: this.login },
			{
				method: 'post',
				path: '/register',
				func: this.register,
				middlewares: [new ValidateMiddleware(UserRegisterDto)],
			},
		]);
	}

	public login(
		req: Request<Record<string, unknown>, Record<string, unknown>, UserLoginDto>,
		res: Response,
		next: NextFunction,
	): void {
		console.log(req.body);
		next(new HTTPError(401, 'Не авторизован', 'users'));
	}

	public async register(
		{ body }: Request<Record<string, unknown>, Record<string, unknown>, UserRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const user = await this.userService.createUser(body);

		if (!user) {
			return next(new HTTPError(422, 'Такой пользователь уже существует'));
		}

		this.ok(res, { email: user.email });
	}
}
