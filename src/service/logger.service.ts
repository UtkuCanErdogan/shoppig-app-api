import winston, {format, transports} from "winston";

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};

export const logger = winston.createLogger({
    levels: logLevels,
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console(), new winston.transports.File({ filename: 'combined.log' })]
})
