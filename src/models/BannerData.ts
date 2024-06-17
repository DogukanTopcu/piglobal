import mongoose, { Schema } from "mongoose";

const BannerDataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    button: {
        type: String,
        required: true
    },
    buttonurl: {
        type: String,
        requires: true // Eğer çoktan seçmeli değilse bu array boş olabilir
    }
});


let BannerModel: mongoose.Model<any>
try {
    BannerModel = mongoose.model("forms")
}
catch (error) {
    BannerModel = mongoose.model("forms", BannerDataSchema)
}
export default BannerModel;