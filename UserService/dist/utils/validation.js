"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyOptionalValidation = exports.bodyValidation = exports.usernameParamValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const usernameParamValidation = joi_1.default.object().keys({
    username: joi_1.default.string().required(),
});
exports.usernameParamValidation = usernameParamValidation;
const bodyValidation = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    role: joi_1.default.string().required(),
});
exports.bodyValidation = bodyValidation;
const bodyOptionalValidation = joi_1.default.object().keys({
    name: joi_1.default.string(),
    username: joi_1.default.string(),
    password: joi_1.default.string(),
    role: joi_1.default.string(),
});
exports.bodyOptionalValidation = bodyOptionalValidation;
//# sourceMappingURL=validation.js.map