const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SEC_KEY).toString(),
    });
    res.status(201).json({ newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SEC_KEY).toString(CryptoJS.enc.Utf8);
    if (decryptedPassword !== req.body.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY, { expiresIn: "1d" });

    const { password, ...userData } = user._doc;
    return res.status(200).json({ userData, accessToken });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to login" });
  }
});

module.exports = router;
