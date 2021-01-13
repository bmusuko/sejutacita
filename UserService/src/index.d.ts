interface UserToken {
    name: string;
    username: string;
    password: string;
    role: string;
}
declare namespace Express {
    interface Request {
        user: UserToken
    }
}
