import mongoose from "mongoose";
import env from "dotenv";

env.config();

const ConnectDB = async () => {
    console.log(process.env.MONGODB_URL);
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL!, {
            dbName: 'PiGlobalCo.',
        });
        console.log("Mongodb connected.");
        return true;
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;