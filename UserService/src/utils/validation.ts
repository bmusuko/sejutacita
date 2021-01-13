import Joi from "joi";

const usernameParamValidation = Joi.object().keys({
    username: Joi.string().required(),
});

const bodyValidation = Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});

export { usernameParamValidation, bodyValidation }