interface UserToken {
    id: string;
    iat: number;
    exp: number;
}
declare namespace Express {
    interface Request {
        user: UserToken
    }
}
