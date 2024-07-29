import mongoose, { Schema } from "mongoose";

const userSchema= new Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    adminType: {type: String, required: true},
    access: {type: [String], required: false},

}, { timestamps: true });


let UserModel : mongoose.Model<any>
try {
    UserModel = mongoose.model("users");
} catch (error) {
    UserModel = mongoose.model("users", userSchema);
}

export default UserModel;