const router = require('express').Router();
const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//tạo tài khoản
router.post('/register', async (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_KEY
    ).toString(),
  };
  try {
    const data = await User.create(newUser);
    res.status(201).json({ NewUser: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});
// đăng nhập

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res.status(401).json({ message: 'User not found!!' });
    }

    const passwordData = CryptoJS.AES.decrypt(
      user.password,
      process.env.SEC_KEY
    ).toString(CryptoJS.enc.Utf8);
    if (passwordData !== req.body.password) {
      return res.status(401).json({ message: 'Wrong password!!!' });
    }

    const accsessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: '1d' }
    );

    console.log('log in conpleted');
    const { password, ...other } = user._doc;
    return res.status(200).json({ dataLogin: other, accsessToken });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
