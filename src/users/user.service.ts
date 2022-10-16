import { IConfigService } from './../config/config.service.interface';
import { inject, injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './user.servise.interface';
import { TYPES } from '../types';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}

	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const user = new User(email, name);
		const salt = this.configService.get('SALT');
		console.log(salt);
		await user.setPassword(password, Number(salt));

		// Проверка есть пользователь? Вернуть null
		// Иначе создать нового пользователя

		return null;
	}
	// eslint-disable-next-line no-empty-pattern
	async validateUser({}: UserLoginDto): Promise<boolean> {
		return true;
	}
}
