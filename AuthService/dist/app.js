"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoute_1 = require("./routes/authRoute");
const jwt_1 = require("./utils/jwt");
const app = express_1.default();
app.use(express_1.default.json());
app.use("/auth", authRoute_1.authRoute);
app.use(jwt_1.authError);
exports.default = app;
//# sourceMappingURL=app.js.map