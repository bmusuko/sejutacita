import express from "express";
import { userRoute } from './routes/userRoute'

const app = express();

app.use(express.json());
app.use("/user", userRoute);

export default app;