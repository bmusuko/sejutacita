import { Response } from "express";

const badRequest = (res: Response, message?: string) => {
    return responseGenerator(res, 400, message || "Bad Request", null);
}

const successResponse = (res: Response, message: string, data: any) => {
    return responseGenerator(res, 200, message, data);
}

const internalError = (res: Response, message?: string) => {
    return responseGenerator(res, 500, message || "Internal Server Error", null);
}

const authErrorResponse = (res: Response, message?: string) => {
    return responseGenerator(res, 401, message || "Unauthorized", null);
}


const responseGenerator = (res: Response, status: number, message: string, data: any) => {
    return res.status(status).json({
        status,
        message,
        data
    })
}

export { badRequest, internalError, successResponse, authErrorResponse, responseGenerator }