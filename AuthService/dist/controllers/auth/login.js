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
exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = require("../../models/user");
const responseGenerator_1 = require("../../utils/responseGenerator");
const validation_1 = require("../../utils/validation");
const jwt_1 = require("../../utils/jwt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = validation_1.loginBodyValidation.validate(req.body);
    if (error) {
        return responseGenerator_1.badRequest(res, error.message);
    }
    const { username, password } = req.body;
    const user = yield user_1.User.findOne({ username });
    if (!user) {
        return responseGenerator_1.authErrorResponse(res, "username not found");
    }
    const checkPassword = yield bcryptjs_1.default.compare(password, user.password);
    if (!checkPassword) {
        return responseGenerator_1.authErrorResponse(res, "wrong password");
    }
    const access_token = jwt_1.signAccessToken({
        id: user.id
    });
    const refresh_token = jwt_1.signRefreshToken({
        id: user.id
    });
    return responseGenerator_1.successResponse(res, "Success Login", {
        access_token,
        refresh_token
    });
});
exports.login = login;
//# sourceMappingURL=login.js.map