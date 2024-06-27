import mongoose from "mongoose";

const ConnectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    const connectionURI = await process.env.MONGO_CONN_URL;

    try {
        await mongoose.connect(connectionURI!, {
            dbName: 'PiGlobalCo',
        });
        console.log("Mongodb connected.");
        return true;
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;