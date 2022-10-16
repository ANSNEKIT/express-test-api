import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { IConfigService } from './config.service.interface';
import { ILogger } from '../logger/logger.interface';
import { DotenvConfigOutput, config, DotenvParseOutput } from 'dotenv';

@injectable()
export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.logger.error('[ConfigService] Не удалось прочитать файл .env или он отсутствует');
		} else {
			this.logger.log('[ConfigService] .env config загружен');
			this.config = result.parsed as DotenvParseOutput;
		}
	}

	get(key: string): string {
		return this.config[key];
	}
}
