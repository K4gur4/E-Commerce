const CryptoJS = require("crypto-js");
const User = require("../models/user");

const updateUser = async (req, res) => {
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
    console.log("update completed");
    res.status(200).json(userUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userDelete = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted...");
  } catch (error) {
    res.status(500).json(err);
  }
};

const getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    const { password, ...others } = getUser._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAlluser = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getStatsUser = async (req, res) => {
  console.log("hiiiiii");
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

module.exports = { updateUser, deleteUser, getUser, getAlluser,getStatsUser };
