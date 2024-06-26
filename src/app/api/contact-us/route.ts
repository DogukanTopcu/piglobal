import ConnectDB from "@/config/database";
import mongoose, { Schema } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

export const POST = async (request: NextRequest, response: NextResponse) => {
    try {
        const data = await request.json();
        await ConnectDB();

        await MessageModel.create(data);
        console.log("mail saved");
        
        await sendMail({
            to: "dogukantopcu35@gmail.com", 
            subject: "s", 
            name: data["name"], 
            surname: data["surname"], 
            phone: data["phone"], 
            message: data["message"]
        });
        console.log("mail sended");

        return NextResponse.json({ message: "Message Saved" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Message Cannot Saved" }, { status: 401 });
    }
}



const sendMail = async ({to, subject, name, surname, phone, message} : {to: string, subject: string, name: string, surname: string, phone: string, message: string}) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
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
            from: process.env.NEXT_PUBLIC_EMAIL,
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
    // subject: {type: String, required: true},
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