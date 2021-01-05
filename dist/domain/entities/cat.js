"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var uuid_1 = require("uuid");
var Cat = /** @class */ (function () {
    function Cat(_a) {
        var id = _a.id, name = _a.name;
        this.id = id || uuid_1.v4();
        this.name = name;
    }
    return Cat;
}());
exports.Cat = Cat;
//# sourceMappingURL=cat.js.map