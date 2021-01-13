import { Response } from "express";

const badRequest = (res: Response, message?: string) => {
    return response(res, 400, message || "Bad Request", null);
}

const successResponse = (res: Response, message: string, data: any) => {
    return response(res, 200, message, data);
}

const internalError = (res: Response, message?: string) => {
    return response(res, 500, message || "Internal Server Error", null);
}

const response = (res: Response, status: number, message: string, data: any) => {
    return res.status(status).json({
        status,
        message,
        data
    })
}

export { badRequest, internalError, successResponse, response }