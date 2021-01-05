"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationTarget = exports.validateRequestPayload = exports.validate = void 0;
var error_handling_middleware_1 = require("./infrastructure/middleware/error-handling-middleware");
var validate = function (inputValue, schema, customOptions) {
    if (customOptions === void 0) { customOptions = {}; }
    var options = Object.assign({ stripUnknown: true, convert: true, abortEarly: false }, customOptions);
    var _a = schema.validate(inputValue, options), error = _a.error, value = _a.value, warning = _a.warning;
    if (error) {
        throw new error_handling_middleware_1.CustomError({
            code: 'route-validation-error',
            message: error.message,
            statusCode: 422,
            data: { details: error.details, warnings: warning },
        });
    }
    return value;
};
exports.validate = validate;
var validateRequestPayload = function (schema, type, customOptions) {
    if (customOptions === void 0) { customOptions = {}; }
    var middleware = function (req, res, next) {
        var inputValue = req[type] || {};
        try {
            var value = exports.validate(inputValue, schema, customOptions);
            req[type] = value;
            return next();
        }
        catch (e) {
            return next(e);
        }
    };
    return middleware;
};
exports.validateRequestPayload = validateRequestPayload;
var ValidationTarget;
(function (ValidationTarget) {
    ValidationTarget["BODY"] = "body";
    ValidationTarget["PARAMS"] = "params";
    ValidationTarget["QUERY"] = "query";
})(ValidationTarget = exports.ValidationTarget || (exports.ValidationTarget = {}));
//# sourceMappingURL=validation.js.map