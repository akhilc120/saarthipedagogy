const mongoose=require("mongoose");
const {Schema}=mongoose;

const albumSchema=new Schema({
    user_id:{type:String},
    Name:{type:String},
    update_date:{type:String},
});

const albums=mongoose.model("Album",albumSchema);

module.exports=albums;