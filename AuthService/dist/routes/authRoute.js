"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = __importDefault(require("express"));
const jwt_1 = require("../utils/jwt");
const auth_1 = require("../controllers/auth");
const authRoute = express_1.default.Router();
exports.authRoute = authRoute;
authRoute.post("/login", auth_1.login);
authRoute.get("/verify", jwt_1.jwtAccessTokenMiddleware, auth_1.verify);
authRoute.get("/refresh");
//# sourceMappingURL=authRoute.js.map