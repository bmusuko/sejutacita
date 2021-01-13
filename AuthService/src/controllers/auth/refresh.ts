import { Request, Response } from "express";
import { User } from "../../models/user";
import { signAccessToken } from "../../utils/jwt";
import { authErrorResponse, successResponse } from "../../utils/responseGenerator";

const refresh = async (req: Request, res: Response) => {
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
        return authErrorResponse(res, "user not found")
    }

    const access_token = signAccessToken({
        id: user.id
    });

    return successResponse(res, "Success get new access token", { access_token });
}

export { refresh }