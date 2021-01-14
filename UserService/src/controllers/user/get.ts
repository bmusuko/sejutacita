import { Request, Response } from "express";
import { badRequest, successResponse } from '../../utils/responseGenerator';
import { User } from '../../models/user';
import { usernameParamValidation } from "../../utils/validation";

const getByUsername = async (req: Request, res: Response) => {
    const { error } = usernameParamValidation.validate(req.params);
    if (error) {
        return badRequest(res, error.message);
    }

    const { username } = req.params;

    const user = await User.findOne({ username })
    if (user == null) {
        return badRequest(res, "username doest not exist");
    }

    return successResponse(res, "Success get single user", user);
}

const getAll = async (_: Request, res: Response) => {
    const users = await User.find()
    return successResponse(res, "Success get all user", users);
}

export { getByUsername, getAll }