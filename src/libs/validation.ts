import * as express from 'express';
import * as joi from 'joi';
import {CustomError} from "../infrastructure/middleware/error-handling-middleware";

export const validate = (inputValue: any, schema: joi.ObjectSchema, customOptions: joi.ValidationOptions = {}) => {
    const options: joi.ValidationOptions = Object.assign<joi.ValidationOptions, joi.ValidationOptions>(
        {stripUnknown: true, convert: true, abortEarly: false},
        customOptions,
    );
    const {error, value, warning} = schema.validate(inputValue, options);
    if (error) {
        throw new CustomError({
            code: 'route-validation-error',
            message: error.message,
            statusCode: 422,
            data: {details: error.details, warnings: warning},
        })
    }
    return value;
};

export const validateRequestPayload = (schema: joi.ObjectSchema, type: ValidationTarget, customOptions: joi.ValidationOptions = {}) => {
    const middleware: express.RequestHandler = (req, res, next) => {
        const inputValue = req[type] || {};
        try {
            const value = validate(inputValue, schema, customOptions)
            req[type] = value;
            return next();
        } catch (e) {
            return next(e);
        }
    };
    return middleware;
};

export enum ValidationTarget {
    BODY = 'body',
    PARAMS = 'params',
    QUERY = 'query',
}
