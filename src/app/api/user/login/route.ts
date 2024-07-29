import ConnectDB from "@/config/database";
import UserModel from "@/models/User.scheme";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest, response: NextResponse) => {
    try {
        const data = await request.json();
        await ConnectDB();

        const user = await UserModel.findOne({ email: data.email, password: data.password }).exec();

        if (user) {
            return NextResponse.json({ message: "logged in", user: user }, { status: 201 });
        }
        else {
            return NextResponse.json({ message: "User Cannot Found" }, { status: 404 });
        }

    } catch (error) {
        return NextResponse.json({ message: "Error occured when logging in" }, { status: 401 });
    }
}