"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependency_injection_1 = require("./dependency-injection");
var serverFactory = dependency_injection_1.resolveDependency('serverFactory');
var server = serverFactory.createServer({ mongoDbUri: 'mongodb://localhost', port: 3000 });
server.start().then(function (value) { return console.info('Server started: ', server.getConfig()); }).catch(function (reason) { return console.error('Error en in server: ', reason); });
//# sourceMappingURL=index.js.map