import express from "express"
import { insert, getAll, getByUsername, deleteByUsername, updateByUsername } from '../controllers/user';
import { isAdmin } from "../middleware/admin";
import { isAuthenticated } from "../middleware/authentication";

const userRoute = express.Router();

userRoute.get("/", isAuthenticated, getAll);
userRoute.get("/:username", isAuthenticated, getByUsername);
userRoute.post("/", insert);
userRoute.put("/:username", isAuthenticated, isAdmin, updateByUsername);
userRoute.delete("/:username", isAuthenticated, isAdmin, deleteByUsername);


export { userRoute }