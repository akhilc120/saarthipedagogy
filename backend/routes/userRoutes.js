const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const users=require("../model/Users");

router.use(express.json());

router.get("/users",(req,res)=>{
    res.json('users');
});

// add user
router.post("/users",async(req,res)=>{
    // console.log(req.body);
    const ans=await users.insertMany({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone_no:req.body.phone_no
    })
    // console.log(ans);
    if(ans.length>0){
        res.send(ans);
    }else{
        res.send("failed to update data");
    }
})

// get all users
router.get("",async(req,res)=>{
    let allusers=await users.find();
    console.log(allusers);
    if(allusers.length>0){
        res.send(allusers);
    }else{
        res.send("no users exists");
    }
})

// update user
router.put("/updateuser",async(req,res)=>{
    console.log(req.body);
    let updateuser=await users.updateOne({"_id":req.body._id},req.body);
    console.log(updateuser);
    if(updateuser.modifiedCount>0){
        res.send(updateuser);
    }else{
        res.send("error");
    }
})

// one user by id
router.get("/:id",async(req,res)=>{
    let oneuser=await users.findOne({"_id":req.params.id});
    console.log(oneuser);
    res.send(oneuser);
})

module.exports=router;