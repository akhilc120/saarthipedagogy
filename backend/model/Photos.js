const mongoose=require("mongoose");
const {Schema}=mongoose;

const photoSchema=new Schema({
    album_id:{type:String},
    user_id:{type:String},
    Name:{type:String},
    img:{type:String},
});

const photos=mongoose.model("Photo",photoSchema);

module.exports=photos;