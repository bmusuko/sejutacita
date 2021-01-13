import { Request, Response } from "express";
import { badRequest, successResponse } from '../../utils/responseGenerator';
import { User } from '../../models/user';
import { usernameParamValidation } from "../../utils/validation";


const deleteByUsername = async (req: Request, res: Response) => {
    const { error } = usernameParamValidation.validate(req.params);
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