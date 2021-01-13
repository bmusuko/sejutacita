import dotenv from "dotenv";
import mongoose from "mongoose";
import app from './app'

const main = async () => {

    dotenv.config();

    const PORT = process.env.PORT || 8081;
    const MONGODB_URL = process.env.MONGODB_URL as string

    try {
        await mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    } catch (error) {
        console.log("Can't connect to mongodb", error);
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
}

main();