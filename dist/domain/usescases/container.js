"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCaseContainer = void 0;
var awilix_1 = require("awilix");
exports.useCaseContainer = awilix_1.createContainer();
exports.useCaseContainer.loadModules([
    __dirname + "/!(*.test)*.{ts,js}",
], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: awilix_1.Lifetime.SINGLETON,
    },
});
//# sourceMappingURL=container.js.map