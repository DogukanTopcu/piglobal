import ConnectDB from "@/config/database";
import mongoose, { Schema } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest, response: NextResponse) => {
    try {
        const data = await request.json();
        await ConnectDB();

        await MessageModel.create(data);
        return NextResponse.json({ message: "Message Saved" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Message Cannot Saved" }, { status: 401 });
    }
}




const messageSchema= new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true},

}, { timestamps: true });


let MessageModel : mongoose.Model<any>
try {
    MessageModel = mongoose.model("messages");
} catch (error) {
    MessageModel = mongoose.model("messages", messageSchema);
}