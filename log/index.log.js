import winston from 'winston';

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} ${message}`;
});

export const logger = winston.createLogger({
	level: 'silly',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: 'good-recipes-api.log',
		}),
	],
	format: combine(
		label({ label: 'good-recipes-api.log' }),
		timestamp(),
		myFormat
	),
});
