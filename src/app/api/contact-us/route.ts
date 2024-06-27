import ConnectDB from "@/config/database";
import mongoose, { Schema } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

export const POST = async (request: NextRequest, response: NextResponse) => {
    try {
        const data = await request.json();
        await ConnectDB();

        await MessageModel.create(data);
        
        await sendMail({
            to: process.env.RECEIVER_EMAIL_ADDRESS!, 
            subject: data["subject"], 
            email: data["email"], 
            fullName: data["fullName"], 
            phone: data["phone"], 
            message: data["message"]
        });
        console.log("mail sended");

        return NextResponse.json({ message: "Message Saved" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Message Cannot Saved" }, { status: 401 });
    }
}



const sendMail = async ({to, subject, email, fullName, phone, message} : {to: string, subject: string, email: string, fullName: string, phone: string, message: string}) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.SMTP_PASSWORD
        },
    });

    try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error) {
        console.log(error);
        return;
    }


    try {
        const sendResult = await transport.sendMail({
            from: process.env.EMAIL,
            to,
            subject,
            html: message,
        });

        console.log(sendResult);
    } catch (error) {
        console.log(error);
    }
}



const messageSchema= new Schema({
    subject: {type: String, required: true},
    email: {type: String, required: true},
    fullName: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true},

}, { timestamps: true });


let MessageModel : mongoose.Model<any>
try {
    MessageModel = mongoose.model("messages");
} catch (error) {
    MessageModel = mongoose.model("messages", messageSchema);
}