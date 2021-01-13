"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.authErrorResponse = exports.successResponse = exports.internalError = exports.badRequest = void 0;
const badRequest = (res, message) => {
    return response(res, 400, message || "Bad Request", null);
};
exports.badRequest = badRequest;
const authErrorResponse = (res, message) => {
    return response(res, 401, message || "Unauthorized", null);
};
exports.authErrorResponse = authErrorResponse;
const successResponse = (res, message, data) => {
    return response(res, 200, message, data);
};
exports.successResponse = successResponse;
const internalError = (res, message) => {
    return response(res, 500, message || "Internal Server Error", null);
};
exports.internalError = internalError;
const response = (res, status, message, data) => {
    return res.status(status).json({
        status,
        message,
        data
    });
};
exports.response = response;
//# sourceMappingURL=responseGenerator.js.map