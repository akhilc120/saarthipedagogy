const express=require("express");
const router=express.Router();
const bodyParser=require("body-parser");
const photos=require("../model/Photos");

router.use(bodyParser());

router.get("/photos",(req,res)=>{
    res.json('photo');
});

// add photos
router.post("/photos",async(req,res)=>{
    console.log(req.body);
    const inserting=await photos.insertMany({
        album_id:req.body.album_id,
        user_id:req.body.user_id,
        Name:req.body.Name,
        img:req.body.img,
    });
    if(inserting.length>0){
        res.send(inserting);
    }else{
        res.send("failed data");
    }
})


// all photos
router.get("allphotos",async(req,res)=>{
    let data=await photos.find();
    if(data.length>0){
        res.json(data);
    }else{
        res.json("error");
    }
})

// each photo by id
router.get("onephoto/:id",async(req,res)=>{
    let data=photos.findOne({"_id":req.params.id});
    if(data){
        res.json(data);
    }else{
        res.json("error");
    }
})

// update photo
router.put("onephoto/:id",async(req,res)=>{
    let data=await photos.updateOne({"_id":req.params.id},req.body);
    if(data.modifiedCount>0){
        res.json(data);
    }else{
        res.json("error");
    }
})

// photo by album id fetching
router.get("/photobyalbumid/:albumid",async(req,res)=>{
    let data=await photos.find({"album_id":req.params.albumid});
    console.log(data);
    if(data.length>0){
        res.json(data);
    }else{
        res.json("error");
    }
})

module.exports=router;