import { injectable } from 'inversify';
import { Logger } from 'tslog';
import { ILogger } from './logger.interface';
import 'reflect-metadata';

@injectable()
export class LoggerService implements ILogger {
	public logger: Logger;

	constructor() {
		this.logger = new Logger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFunctionName: false,
			displayFilePath: 'hidden',
		});
	}

	log(...agrs: unknown[]): void {
		this.logger.info(...agrs);
	}

	error(...agrs: unknown[]): void {
		this.logger.error(...agrs);
	}

	warn(...agrs: unknown[]): void {
		this.logger.warn(...agrs);
	}
}
