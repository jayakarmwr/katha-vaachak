const express = require('express');
const router = express.Router();
const {login,signup,confirmPassword,changePassword,getProfile}=require("../backend/controllers/get_set");


router.post("/getdata",login);
router.post("/change-password",changePassword);
router.post("/signup",signup);
router.post("/confirm",confirmPassword);

module.exports=router;