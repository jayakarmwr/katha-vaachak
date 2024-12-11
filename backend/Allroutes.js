const express = require('express');
const router = express.Router();
const {login,signup,confirmPassword,changePassword,getProfile,savestory,storyHistory,getStoryById}=require("../backend/controllers/get_set");


router.post("/getdata",login);
router.post("/change-password",changePassword);
router.post("/signup",signup);
router.post("/confirm",confirmPassword);
router.get("/getuserdata",getProfile);
router.post("/save-story",savestory);
router.get("/save-history",storyHistory);
router.get("/story-display/:id", getStoryById);


module.exports=router;