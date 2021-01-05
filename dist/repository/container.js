"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryContainer = void 0;
var awilix_1 = require("awilix");
exports.repositoryContainer = awilix_1.createContainer();
exports.repositoryContainer.loadModules([
    __dirname + "/**/!(*.test)*.{ts,js}",
], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: awilix_1.Lifetime.SINGLETON,
    },
});
