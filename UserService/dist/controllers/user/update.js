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
exports.updateByUsername = void 0;
const responseGenerator_1 = require("../../utils/responseGenerator");
const user_1 = require("../../models/user");
const validation_1 = require("../../utils/validation");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const updateByUsername = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { error } = validation_1.usernameParamValidation.validate(req.params);
    if (error) {
        return responseGenerator_1.badRequest(res, error.message);
    }
    ({ error } = validation_1.bodyOptionalValidation.validate(req.body));
    if (error) {
        return responseGenerator_1.badRequest(res, error.message);
    }
    const { username } = req.params;
    if (req.body.password) {
        const salt = yield bcryptjs_1.default.genSalt(10);
        req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
    }
    try {
        const user = yield user_1.User.findOneAndUpdate({ username }, req.body, { new: true });
        if (user == null) {
            return responseGenerator_1.badRequest(res, "username doest not exist");
        }
        return responseGenerator_1.successResponse(res, "Success get User", user);
    }
    catch (error) {
        if (error.name == "MongoError" && error.code == 11000) {
            return responseGenerator_1.badRequest(res, "Username already exist");
        }
        return responseGenerator_1.internalError(res, error.message);
    }
});
exports.updateByUsername = updateByUsername;
//# sourceMappingURL=update.js.map