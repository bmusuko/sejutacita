import { Request, Response } from "express"
import Joi from "joi"
import bcrypt from "bcryptjs";
import { badRequest, successResponse, internalError } from '../../utils/responseGenerator'
import { User } from '../../models/user';

const insertUserValidation = Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
});


const insert = async (req: Request, res: Response) => {
    const { error } = insertUserValidation.validate(req.body)
    if (error) {
        return badRequest(res, error.message);
    }
    const { name, username, password } = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const model = new User({ name, username, password: hashedPassword })
    try {
        await model.save();
    } catch (error) {
        if (error.name == "MongoError" && error.code == 11000) {
            return badRequest(res, "Username already exist");
        }
        return internalError(res);
    }

    return successResponse(res, "Success insert user", model);
}

export { insert }