const express = require("express");
const router = express.Router();
const albums = require("../model/Albums");
const photos = require("../model/Photos");

router.use(express.json());

router.get("/album", (req, res) => {
    res.json('album');
});

// adding album
router.post("/album", async (req, res) => {
    console.log(req.body);
    var finding = await albums.insertMany({
        user_id: req.body.user_id,
        Name: req.body.Name,
        update_date: req.body.update_date
    })
    if(finding.length>0){
        res.send(finding);
    }else{
        res.send("Failed to update data");
    }
})

// all album
router.post("/all-album",async(req,res)=>{
    let finds=await albums.find();
    if(finds.length>0){
        res.send(finds);
    }else{
        res.send("error");
    }
})

// each album by id
router.get("/onealbum/:id",async(req,res)=>{
    let onealbum=await albums.findOne({"_id":req.params.id});
    console.log(onealbum);
    if(onealbum){
        res.send(onealbum);
    }else{
        res.send("failed");
    }
})

// updating album 
router.put("updateAlbum/:id",async(req,res)=>{
    let updating=await albums.updateOne({"_id":req.params.id},req.body);
    if(updating.modifiedCount>0){
        res.json({updating,message:"data updated for album"})
    }else{
        res.json({message:"data not updated"})
    }
})

// album by user id
router.get("/idalbum/:userid",async(req,res)=>{
    console.log(req.params.userid);
    // res.json("ok");
    let data=await albums.find({"user_id":req.params.userid});
    console.log(data);
    if(data.length>0){
        res.json(data);
    }else{
        res.json("error occured");
    }
})  


module.exports = router;