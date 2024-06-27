import mongoose from "mongoose";

const ConnectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGO_CONN_URL!, {
            dbName: 'PiGlobalCo',
        });
        console.log("Mongodb connected.");
        return true;
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;