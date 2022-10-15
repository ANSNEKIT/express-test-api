import { injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './user.servise.interface';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const user = new User(email, name);
		await user.setPassword(password);

		// Проверка есть пользователь? Вернуть null
		// Иначе создать нового пользователя

		return null;
	}
	// eslint-disable-next-line no-empty-pattern
	async validateUser({}: UserLoginDto): Promise<boolean> {
		return true;
	}
}
