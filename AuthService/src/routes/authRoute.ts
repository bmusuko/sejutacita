import express from "express"
import { jwtAccessTokenMiddleware, jwtRefreshTokenMiddleware } from "../utils/jwt";
import { login, refresh, verify } from "../controllers/auth";

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.get("/verify", jwtAccessTokenMiddleware, verify);
authRoute.get("/refresh", jwtRefreshTokenMiddleware, refresh);


export { authRoute }