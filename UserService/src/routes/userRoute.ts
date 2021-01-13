import express from "express"
import { insert, getAll, getByUsername, deleteByUsername, updateByUsername } from '../controllers/user';

const userRoute = express.Router();

userRoute.get("/", getAll);
userRoute.get("/:username", getByUsername);
userRoute.post("/", insert);
userRoute.put("/:username", updateByUsername);
userRoute.delete("/:username", deleteByUsername);


export { userRoute }