"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const admin_1 = require("../middleware/admin");
const authentication_1 = require("../middleware/authentication");
const userRoute = express_1.default.Router();
exports.userRoute = userRoute;
userRoute.get("/", authentication_1.isAuthenticated, user_1.getAll);
userRoute.get("/:username", authentication_1.isAuthenticated, user_1.getByUsername);
userRoute.post("/", user_1.insert);
userRoute.put("/:username", authentication_1.isAuthenticated, admin_1.isAdmin, user_1.updateByUsername);
userRoute.delete("/:username", authentication_1.isAuthenticated, admin_1.isAdmin, user_1.deleteByUsername);
//# sourceMappingURL=userRoute.js.map