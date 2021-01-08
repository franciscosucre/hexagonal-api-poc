import {RequestHandler} from 'express';

export function handleRoute(fn: RequestHandler): RequestHandler {
    return async (req, res, next) => {
        try {
            return await fn(req, res, next)
        } catch (e) {
            return await next(e)
        }
    }
}
