const express = require('express');
const router = express.Router();
const {login,signup,confirmPassword,changePassword,getProfile,savestory}=require("../backend/controllers/get_set");


router.post("/getdata",login);
router.post("/change-password",changePassword);
router.post("/signup",signup);
router.post("/confirm",confirmPassword);
router.get("/getuserdata",getProfile);
router.post("/save-story",savestory);

module.exports=router;