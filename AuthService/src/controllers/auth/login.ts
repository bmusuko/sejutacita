import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../models/user";
import { authErrorResponse, badRequest, successResponse } from "../../utils/responseGenerator";
import { loginBodyValidation } from '../../utils/validation'
import { signAccessToken, signRefreshToken } from "../../utils/jwt";


const login = async (req: Request, res: Response) => {
    const { error } = loginBodyValidation.validate(req.body);
    if (error) {
        return badRequest(res, error.message);
    }
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
        return authErrorResponse(res, "username not found")
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
        return authErrorResponse(res, "wrong password");
    }

    const access_token = signAccessToken({
        id: user.id
    });

    const refresh_token = signRefreshToken({
        id: user.id
    })

    return successResponse(res, "Success Login", {
        access_token,
        refresh_token
    });
}


export { login }