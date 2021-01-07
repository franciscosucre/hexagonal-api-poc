import express from 'express';
import * as http from 'http'
import {Dependencies} from "../container";

import bodyParser = require('body-parser');

export default ({databaseClient, errorHandlingMiddleware, mainRouter}: Dependencies) => {
    return {
        createServer({port, mongoDbUri}): Server {
            const expressServer = express()
            let httpConnection: http.Server;
            expressServer.use(bodyParser.json({limit: '50mb',}),);
            expressServer.use(mainRouter)
            expressServer.use(errorHandlingMiddleware)

            return {
                async start() {
                    const serverWillStart = new Promise<void>(resolve => (httpConnection = expressServer.listen(port, () => resolve())));
                    const databaseWillConnect = databaseClient.connectToDatabase(mongoDbUri);
                    await Promise.all([serverWillStart, databaseWillConnect]);
                },
                getConfig() {
                    return {port, mongoDbUri}
                }


            }
        }
    } as ServerFactory
}

export type ServerOptions = { port: number; mongoDbUri: string }

export interface Server {
    start(): Promise<void>;

    getConfig(): ServerOptions
}

export interface ServerFactory {
    createServer(options: { port: number; mongoDbUri: string }): Server
}
