const CryptoJS = require('crypto-js')
const User = require("../models/user");

const updateUser= async (req, res) => {
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
          $set: req.body
        },
        { new: true }
      )
      console.log("update completed");
   return res.status(200).json(
         userUpdate
      )
    } catch (err) {
    return  res.status(500).json(
         err
      );
    }
  }

  module.exports={updateUser}