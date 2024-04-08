import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        default: "https://cdn.pixabay.com/photo/2018/04/30/13/47/wallpaper-3362712_1280.jpg",
    }
},{timestamps : true});

const User = mongoose.model("User", userSchema);
export default User;