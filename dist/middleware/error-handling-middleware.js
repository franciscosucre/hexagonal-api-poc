"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(args) {
        var _this = _super.call(this) || this;
        _this.name = 'CustomError';
        _this.code = args.code;
        _this.message = args.message || '';
        _this.statusCode = args.statusCode || 400;
        _this.data = args.data;
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
exports.default = (function (_a) {
    return function (req, res, e) {
        if (e instanceof CustomError) {
            return res.status((e === null || e === void 0 ? void 0 : e.statusCode) || 500).json({
                success: false,
                message: e.message,
                code: e.code,
                data: e.data,
                statusCode: e.statusCode
            });
        }
        return res.status(500).json({ success: false });
    };
});
