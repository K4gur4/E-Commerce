const router = require("express").Router();
const { verifyTokenAndAuth } = require("./verifyToken");
const User = require("../models/user");
const {updateUser} = require('../controller/userController')

router.put("/:id", verifyTokenAndAuth,updateUser);

module.exports = router;
