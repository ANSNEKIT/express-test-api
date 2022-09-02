import { Logger } from 'tslog';

export interface ILogger {
	logger: Logger;
	log: (...agrs: unknown[]) => void;
	error: (...agrs: unknown[]) => void;
	warn: (...agrs: unknown[]) => void;
}
