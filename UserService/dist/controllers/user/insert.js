"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = void 0;
const joi_1 = __importDefault(require("joi"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const responseGenerator_1 = require("../../utils/responseGenerator");
const user_1 = require("../../models/user");
const insertUserValidation = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
const insert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = insertUserValidation.validate(req.body);
    if (error) {
        return responseGenerator_1.badRequest(res, error.message);
    }
    const { name, username, password } = req.body;
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    const model = new user_1.User({ name, username, password: hashedPassword });
    try {
        yield model.save();
    }
    catch (error) {
        if (error.name == "MongoError" && error.code == 11000) {
            return responseGenerator_1.badRequest(res, "Username already exist");
        }
        return responseGenerator_1.internalError(res);
    }
    return responseGenerator_1.successResponse(res, "Success insert user", model);
});
exports.insert = insert;
//# sourceMappingURL=insert.js.map