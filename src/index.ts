import {resolveDependency} from "./dependency-injection";

const serverFactory = resolveDependency('serverFactory')

const server = serverFactory.createServer({mongoDbUri: 'mongodb://localhost', port: 3000})

server.start().then(value => console.info('Server started: ', server.getConfig())).catch(reason => console.error('Error en in server: ', reason))

