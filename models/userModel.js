import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    id : {
        type: String,
        require:[true, "please enter name"]
    },
    name : {
        type: String,
        require:[true, "please enter name"]
    },
    last_name : {
        type: String,
        require:[true, "please enter last name"]
    },
    age : {
        type: Number,
        require:[true, "please enter age"]
    }
});



export const userModel=mongoose.model("User",userSchema);