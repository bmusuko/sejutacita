"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authError = exports.jwtAccessTokenMiddleware = exports.signRefreshToken = exports.signAccessToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_jwt_1 = __importDefault(require("express-jwt"));
const responseGenerator_1 = require("./responseGenerator");
dotenv_1.default.config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const signAccessToken = (data) => {
    return jsonwebtoken_1.default.sign(data, ACCESS_TOKEN_SECRET, {
        expiresIn: '15m'
    });
};
exports.signAccessToken = signAccessToken;
const signRefreshToken = (data) => {
    return jsonwebtoken_1.default.sign(data, REFRESH_TOKEN_SECRET, {
        expiresIn: '60d'
    });
};
exports.signRefreshToken = signRefreshToken;
const getJwtToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};
const jwtAccessTokenMiddleware = express_jwt_1.default({
    secret: ACCESS_TOKEN_SECRET,
    getToken: getJwtToken,
    algorithms: ['HS256']
});
exports.jwtAccessTokenMiddleware = jwtAccessTokenMiddleware;
const authError = (err, _, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return responseGenerator_1.authErrorResponse(res, err.message);
    }
    return next();
};
exports.authError = authError;
//# sourceMappingURL=jwt.js.map