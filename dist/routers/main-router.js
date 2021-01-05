"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
exports.default = (function (_a) {
    var catsRouter = _a.catsRouter;
    var router = express_1.default.Router();
    router.get('/', function (req, res, next) {
        return res.json({ api: 'cats' });
    });
    router.use('/cats', catsRouter);
    return router;
});
//# sourceMappingURL=main-router.js.map