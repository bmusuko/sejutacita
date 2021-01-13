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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
const user_1 = require("../../models/user");
const responseGenerator_1 = require("../../utils/responseGenerator");
const verify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.user);
    const { id } = req.user;
    const user = yield user_1.User.findById(id);
    if (!user) {
        return responseGenerator_1.authErrorResponse(res, "user not found");
    }
    return responseGenerator_1.successResponse(res, "Valid access token", user);
});
exports.verify = verify;
//# sourceMappingURL=verify.js.map