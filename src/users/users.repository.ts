import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { User } from './user.entity';
import { IUsersRepository } from './users.repository.interface';
import { PrismaServise } from '../database/prisma.service';

@injectable()
export default class UsersRepository implements IUsersRepository {
	constructor(@inject(TYPES.PrismaServise) private prismaServise: PrismaServise) {}

	async create({ email, password, name }: User): Promise<UserModel> {
		return this.prismaServise.client.userModel.create({
			data: {
				email,
				password,
				name,
			},
		});
	}

	async find(email: string): Promise<UserModel | null> {
		return this.prismaServise.client.userModel.findFirst({
			where: {
				email,
			},
		});
	}
}
