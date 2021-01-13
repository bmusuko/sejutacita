import { Request, Response, NextFunction } from "express"
import axios from "axios"
import dotenv from "dotenv";
import { authErrorResponse, responseGenerator } from "../utils/responseGenerator"

dotenv.config();

const AUTH_VERIFY_URL = process.env.AUTH_SERVICE_URL + "/auth/verify"
console.log(AUTH_VERIFY_URL)

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return authErrorResponse(res, "Missing jwt token");
    }
    let response;
    try {
        response = await axios.get(AUTH_VERIFY_URL, {
            headers: {
                'Authorization': req.headers.authorization
            }
        })
    } catch (error) {
        return responseGenerator(res, error.response.data.status, error.response.data.message, null)
    }
    req.user = response.data.data;
    return next();
}

export { isAuthenticated }