import Joi from "joi";

const usernameParamValidation = Joi.object().keys({
    username: Joi.string().required(),
});

const insertBodyValidation = Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});

const updateBodyValidation = Joi.object().keys({
    username: Joi.string(),
    name: Joi.string(),
    role: Joi.string(),
});

export { usernameParamValidation, insertBodyValidation, updateBodyValidation }