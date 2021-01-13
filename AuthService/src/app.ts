import express from "express";
import { authRoute } from './routes/authRoute'
import { authError } from "./utils/jwt";

const app = express();

app.use(express.json());
app.use("/auth", authRoute);
app.use(authError);

export default app;