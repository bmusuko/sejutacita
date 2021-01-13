import { Request, Response } from "express";
import { User } from "../../models/user";
import { authErrorResponse, successResponse } from "../../utils/responseGenerator";

const verify = async (req: Request, res: Response) => {
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
        return authErrorResponse(res, "user jwt not found")
    }
    user['password'] = undefined;
    return successResponse(res, "Valid access token", user);
}

export { verify }