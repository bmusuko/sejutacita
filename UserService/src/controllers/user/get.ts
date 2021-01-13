import { Request, Response } from "express";
import Joi from "joi";
import { badRequest, successResponse } from '../../utils/responseGenerator';
import { User } from '../../models/user';


const getByUsernameValidation = Joi.object().keys({
    username: Joi.string().required(),
});

const getByUsername = async (req: Request, res: Response) => {
    const { error } = getByUsernameValidation.validate(req.params);
    if (error) {
        return badRequest(res, error.message);
    }

    const { username } = req.params;

    const user = await User.findOne({ username })
    if (user == null) {
        return badRequest(res, "username doest not exist");
    }

    return successResponse(res, "Success get User", user);
}

const getAll = async (_: Request, res: Response) => {
    const users = await User.find()
    return successResponse(res, "Success get User", users);
}

export { getByUsername, getAll }