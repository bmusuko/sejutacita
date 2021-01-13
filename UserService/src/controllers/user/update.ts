import { Request, Response } from "express";
import { badRequest, successResponse, internalError } from '../../utils/responseGenerator';
import { User } from '../../models/user';
import { updateBodyValidation, usernameParamValidation } from "../../utils/validation";

const updateByUsername = async (req: Request, res: Response) => {
    let { error } = usernameParamValidation.validate(req.params);
    if (error) {
        return badRequest(res, error.message);
    }

    ({ error } = updateBodyValidation.validate(req.body));
    if (error) {
        return badRequest(res, error.message);
    }

    const { username } = req.params;

    try {
        const user = await User.findOneAndUpdate({ username }, req.body, { new: true })
        if (user == null) {
            return badRequest(res, "username doest not exist");
        }

        return successResponse(res, "Success get User", user);
    } catch (error) {
        if (error.name == "MongoError" && error.code == 11000) {
            return badRequest(res, "Username already exist");
        }
        return internalError(res);
    }

}

export { updateByUsername }