import { ObjectId } from "mongoose";

export type User = {
    _id: ObjectId,
    username: string,
    email: string,
    password: string,
    adminType: string,
    access: string[],
}