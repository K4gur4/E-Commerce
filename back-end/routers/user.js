const router = require("express").Router();
const { verifyTokenAndAuth } = require("./verifyToken");
const User = require("../models/user");

router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.JWT_KEY
    ).toString();
  }
  try {
    const userUpdate = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
  return res.status(200).json({
      NewUserUpdate: userUpdate,
    });
  } catch (err) {
   return res.status(500).json({
      error: err,
    });
  }
});

module.exports = router;
