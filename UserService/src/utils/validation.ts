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

const bodyOptionalValidation = Joi.object().keys({
    name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
    role: Joi.string(),
});

export { usernameParamValidation, bodyValidation, bodyOptionalValidation }