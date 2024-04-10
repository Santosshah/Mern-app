import mongoose from 'mongoose'

const userAuth_Schema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    userEmail:{
        type:String,
        required:true,
        unique:true,
    },
    userPasswd:{
        type:String,
        required:true
    },
},{timestamps:true}
);

const User=mongoose.model('User',userAuth_Schema);
export default User;
