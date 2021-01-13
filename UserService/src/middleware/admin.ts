import { Request, Response, NextFunction } from "express";
import { authErrorResponse, internalError } from "../utils/responseGenerator";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;
    if (!user) {
        return internalError(res)
    }

    if (user.role !== "admin") {
        return authErrorResponse(res, "Admin only")
    }

    return next();
}

export { isAdmin }