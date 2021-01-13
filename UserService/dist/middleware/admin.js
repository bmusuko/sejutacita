"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const responseGenerator_1 = require("../utils/responseGenerator");
const isAdmin = (req, res, next) => {
    const { user } = req;
    if (!user) {
        return responseGenerator_1.internalError(res);
    }
    if (user.role !== "admin") {
        return responseGenerator_1.authErrorResponse(res, "Admin only");
    }
    return next();
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=admin.js.map