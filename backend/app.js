const express=require("express");
const app=express();
const mongoose=require("mongoose");
const userRoutes=require("./routes/userRoutes");
const albumRoutes=require("./routes/albumRoutes");
const photoRoutes=require("./routes/photoRoutes");

// mongoose.connect("mongodb://localhost:27017/saarthi");
mongoose.connect("mongodb+srv://saarthi:saarthi@cluster0.zscoe.mongodb.net/?retryWrites=true&w=majority");
 
app.use("",userRoutes);
app.use("",albumRoutes);
app.use("",photoRoutes);


app.listen(5000,()=>console.log("server at 5000"));