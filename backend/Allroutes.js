const express = require('express');
const router = express.Router();
const {login,signup,confirmPassword,changePassword,getProfile,savestory,setlike,getlikedstories,setdislike}=require("../backend/controllers/get_set");


router.post("/getdata",login);
router.post("/change-password",changePassword);
router.post("/signup",signup);
router.post("/confirm",confirmPassword);
router.get("/getuserdata",getProfile);
router.post("/save-story",savestory);
router.get("/getlikedstories",getlikedstories);
router.post("/setlike",setlike);
router.post("/dislike",setdislike);

module.exports=router;