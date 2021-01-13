import { Request, Response } from "express"
import bcrypt from "bcryptjs";
import { badRequest, successResponse, internalError } from '../../utils/responseGenerator'
import { User } from '../../models/user';
import { bodyValidation } from "../../utils/validation";

const insert = async (req: Request, res: Response) => {
    const { error } = bodyValidation.validate(req.body)
    if (error) {
        return badRequest(res, error.message);
    }
    const { name, username, role, password } = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const model = new User({ name, username, role, password: hashedPassword })
    try {
        await model.save();
    } catch (error) {
        if (error.name == "MongoError" && error.code == 11000) {
            return badRequest(res, "Username already exist");
        }
        return internalError(res, error.message);
    }

    return successResponse(res, "Success insert user", model);
}

export { insert }