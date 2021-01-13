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
exports.isAuthenticated = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const responseGenerator_1 = require("../utils/responseGenerator");
dotenv_1.default.config();
const AUTH_VERIFY_URL = process.env.AUTH_SERVICE_URL + "/auth/verify";
console.log(AUTH_VERIFY_URL);
const isAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.headers.authorization) {
        return responseGenerator_1.authErrorResponse(res, "Missing jwt token");
    }
    let response;
    try {
        response = yield axios_1.default.get(AUTH_VERIFY_URL, {
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    }
    catch (error) {
        return responseGenerator_1.responseGenerator(res, error.response.data.status, error.response.data.message, null);
    }
    req.user = response.data.data;
    return next();
});
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=authentication.js.map