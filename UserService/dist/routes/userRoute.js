"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const userRoute = express_1.default.Router();
exports.userRoute = userRoute;
userRoute.get("/", user_1.getAll);
userRoute.get("/:username", user_1.getByUsername);
userRoute.post("/", user_1.insert);
userRoute.put("/:username", user_1.updateByUsername);
userRoute.delete("/:username", user_1.deleteByUsername);
//# sourceMappingURL=userRoute.js.map