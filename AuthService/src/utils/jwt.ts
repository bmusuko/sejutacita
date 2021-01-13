import dotenv from "dotenv";
import token from "jsonwebtoken";
import jwt from "express-jwt";
import { Request, Response, NextFunction } from "express";
import { authErrorResponse } from "./responseGenerator";

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string

const signAccessToken = (data: any) => {
    return token.sign(data, ACCESS_TOKEN_SECRET, {
        expiresIn: '15m' // 15 minutes
    })
}

const signRefreshToken = (data: any) => {
    return token.sign(data, REFRESH_TOKEN_SECRET, {
        expiresIn: '60d' // 2 months
    })
}

// token format: Bearer <JWT_TOKEN>
const getJwtToken = (req: Request) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const jwtAccessTokenMiddleware = jwt({
    secret: ACCESS_TOKEN_SECRET,
    getToken: getJwtToken,
    algorithms: ['HS256']
})

const jwtRefreshTokenMiddleware = jwt({
    secret: REFRESH_TOKEN_SECRET,
    getToken: getJwtToken,
    algorithms: ['HS256']
})

const authError = (err: Error, _: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
        return authErrorResponse(res, err.message);
    }
    return next();
};


export { signAccessToken, signRefreshToken, jwtAccessTokenMiddleware, jwtRefreshTokenMiddleware, authError }