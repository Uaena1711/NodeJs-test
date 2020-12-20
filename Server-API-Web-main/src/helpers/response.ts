import { Request, Response } from "express";

export const handleSuccess = (res: Response, data: Object, message?: string) => {
    return res.send({
        code: 1,
        message: message,
        data: data,
    });
}

export const handleError = (res: Response, message: Object) => {
    return res.send({
        code: 2,
        message: message,
    });
}

export const errorSystem = (req: Request, res: Response, err: any) => {
    if (res)
        res.send({
            status: 0,
            code: 0,
            message: err.message,
        });
}
