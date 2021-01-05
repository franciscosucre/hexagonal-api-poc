"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDependency = void 0;
var container_1 = require("./container");
function resolveDependency(key, inputContainer) {
    if (!inputContainer) {
        inputContainer = container_1.getMainContainer();
    }
    return inputContainer.resolve(key);
}
exports.resolveDependency = resolveDependency;
//# sourceMappingURL=dependency-injection.js.map