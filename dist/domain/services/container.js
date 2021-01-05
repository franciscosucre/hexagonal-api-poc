"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceContainer = void 0;
var awilix_1 = require("awilix");
exports.serviceContainer = awilix_1.createContainer();
exports.serviceContainer.loadModules([
    __dirname + "/!(*.test)*.{ts,js}",
], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: awilix_1.Lifetime.SINGLETON,
    },
});
//# sourceMappingURL=container.js.map