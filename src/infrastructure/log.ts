import Pino = require('pino');

const logger = Pino(
    {
        base: null,
        timestamp: true,
        redact: ['password', '*.password', 'grossSalary', '*.grossSalary'],
        messageKey: 'message',
        prettyPrint: {
            colorize: true,
            messageKey: 'message',
            translateTime: 'yyyy-mm-dd HH:MM:ss',
            levelFirst: true,
            crlf: true
        },
    } as Pino.LoggerOptions,
    Pino.destination({sync: false}),
);


export class Logger {

    public info(msg: string, ...moreMsgs: string[]){
        logger.info(msg, ...moreMsgs)
    }

    public error(msg: string, ...moreMsgs: string[]){
        logger.error(msg, ...moreMsgs)
    }
}
