"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainContainer = void 0;
var awilix_1 = require("awilix");
var container_1 = require("./infrastructure/container");
var container_2 = require("./routers/container");
var container_3 = require("./domain/services/container");
var container_4 = require("./domain/usescases/container");
var container;
function getMainContainer() {
    if (!container) {
        container = awilix_1.createContainer();
    }
    container.loadModules([
        __dirname + "/server-factory!(*.test)*.{ts,js}",
    ], {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: awilix_1.Lifetime.SINGLETON,
        },
    });
    container.register(container_2.routerContainer.registrations);
    container.register(container_1.infrastructureContainer.registrations);
    container.register(container_3.serviceContainer.registrations);
    container.register(container_4.useCaseContainer.registrations);
    return container;
}
exports.getMainContainer = getMainContainer;
//# sourceMappingURL=container.js.map