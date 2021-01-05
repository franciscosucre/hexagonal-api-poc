import {Request, RequestHandler, Response} from 'express';


export interface CustomRequest extends Request {
    id?: string;
    auth?: {
        companyId: string;
        employeeId: string;
    };
    rawBody?: any;
    lang: string;
}

export interface CustomResponse extends Response {
    body?: any;
}

export function handleRoute(fn: RequestHandler): RequestHandler {
    return async (req, res, next) => {
        try {
            return await fn(req, res, next)
        } catch (e) {
            return await next(e)
        }
    }
}
