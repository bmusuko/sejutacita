import Joi from "joi";

const loginBodyValidation = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

export { loginBodyValidation }