import {Dependencies} from "../../container";
import {HintedValues} from "../../libs/interfaces";
import {ErrorRequestHandler} from "express";

export enum ErrorCode {
}


export class CustomError extends Error {
    name: string = 'CustomError';
    code: HintedValues<ErrorCode>;
    message: string;
    statusCode?: number;
    data?: any;

    constructor(args: Pick<CustomError, 'code'> & Partial<Pick<CustomError, 'statusCode' | 'data' | 'message'>>) {
        super();
        this.code = args.code;
        this.message = args.message || '';
        this.statusCode = args.statusCode || 400;
        this.data = args.data;
    }

}

export default ({}: Dependencies) => {
    return function (e, req, res, next) {
        if (e instanceof CustomError || e.name === 'CustomError') {
            return res.status(e?.statusCode || 500).json({
                success: false,
                message: e.message,
                code: e.code,
                data: e.data,
                statusCode: e.statusCode
            });
        }
        return res.status(500).json({success: false});
    } as ErrorRequestHandler
};
