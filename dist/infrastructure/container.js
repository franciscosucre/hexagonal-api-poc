"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infrastructureContainer = void 0;
var awilix_1 = require("awilix");
var container_1 = require("./repository/container");
exports.infrastructureContainer = awilix_1.createContainer();
exports.infrastructureContainer.loadModules([
    __dirname + "/database!(*.test)*.{ts,js}",
    __dirname + "/middleware/**/!(*.test)*.{ts,js}",
], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: awilix_1.Lifetime.SINGLETON,
    },
});
exports.infrastructureContainer.register(container_1.repositoryContainer.registrations);
//# sourceMappingURL=container.js.map