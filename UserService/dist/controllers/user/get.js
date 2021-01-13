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
exports.getAll = exports.getByUsername = void 0;
const joi_1 = __importDefault(require("joi"));
const responseGenerator_1 = require("../../utils/responseGenerator");
const user_1 = require("../../models/user");
const getByUsernameValidation = joi_1.default.object().keys({
    username: joi_1.default.string().required(),
});
const getByUsername = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = getByUsernameValidation.validate(req.params);
    if (error) {
        return responseGenerator_1.badRequest(res, error.message);
    }
    const { username } = req.params;
    const user = yield user_1.User.findOne({ username });
    if (user == null) {
        return responseGenerator_1.badRequest(res, "username doest not exist");
    }
    return responseGenerator_1.successResponse(res, "Success get User", user);
});
exports.getByUsername = getByUsername;
const getAll = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User.find();
    return responseGenerator_1.successResponse(res, "Success get User", users);
});
exports.getAll = getAll;
//# sourceMappingURL=get.js.map