import { Request, Response } from "express";
import Joi from "joi";
import { badRequest, successResponse } from '../../utils/responseGenerator';
import { User } from '../../models/user';


const deleteValidation = Joi.object().keys({
    username: Joi.string().required(),
});

const deleteByUsername = async (req: Request, res: Response) => {
    const { error } = deleteValidation.validate(req.params);
    if (error) {
        return badRequest(res, error.message);
    }

    const { username } = req.params;

    const user = await User.findOneAndDelete({ username })

    if (user == null) {
        return badRequest(res, "username doest not exist");
    }

    return successResponse(res, "Success delete User", user);
}

export { deleteByUsername }