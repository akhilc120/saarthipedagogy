const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema=new Schema({
    firstName:{type:String},
    lastName:{type:String},
    phone_no:{type:Number},
});

const users=mongoose.model("User",userSchema);

module.exports=users;