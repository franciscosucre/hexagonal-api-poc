"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerContainer = void 0;
var awilix_1 = require("awilix");
exports.routerContainer = awilix_1.createContainer();
exports.routerContainer.loadModules([
    __dirname + "/!(*.test)*.{ts,js}",
], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: awilix_1.Lifetime.SINGLETON,
    },
});
//# sourceMappingURL=container.js.map