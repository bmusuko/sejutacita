"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = require("./routes/userRoute");
const app = express_1.default();
app.use(express_1.default.json());
app.use("/user", userRoute_1.userRoute);
exports.default = app;
//# sourceMappingURL=app.js.map