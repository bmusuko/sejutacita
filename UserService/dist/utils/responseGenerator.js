"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseGenerator = exports.authErrorResponse = exports.successResponse = exports.internalError = exports.badRequest = void 0;
const badRequest = (res, message) => {
    return responseGenerator(res, 400, message || "Bad Request", null);
};
exports.badRequest = badRequest;
const successResponse = (res, message, data) => {
    return responseGenerator(res, 200, message, data);
};
exports.successResponse = successResponse;
const internalError = (res, message) => {
    return responseGenerator(res, 500, message || "Internal Server Error", null);
};
exports.internalError = internalError;
const authErrorResponse = (res, message) => {
    return responseGenerator(res, 401, message || "Unauthorized", null);
};
exports.authErrorResponse = authErrorResponse;
const responseGenerator = (res, status, message, data) => {
    return res.status(status).json({
        status,
        message,
        data
    });
};
exports.responseGenerator = responseGenerator;
//# sourceMappingURL=responseGenerator.js.map