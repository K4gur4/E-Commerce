const CryptoJS = require('crypto-js');
const User = require('../models/user');

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
    res.status(200).json({userUpdate:userUpdate});
    return
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200)
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    const { password, ...others } = getUser._doc;
    res.status(200).json({user:others});
    return
  } catch (error) {
    res.status(500).json(error);
  }
};

const allUser = async (req, res) => {
  const userNew = req.query.new;
  try {
    const users = userNew
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json({users:users});
    return
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const statsUser = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json({userStat:data.sort((a, b) => a._id - b._id) });
    return
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = { updateUser, deleteUser, getUser, allUser, statsUser };
