const Cart = require('../models/cart');

const createCart = async (req, res) => {
  const reqCart = req.body;
  try {
    const newCart = await Cart.create(reqCart);
    res.status(201).json({ newCart: newCart });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log('update completed');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been deleted...');
  } catch (error) {
    res.status(500).json(err);
  }
};

const getUserCart = async (req, res) => {
  try {
    const Cart = await Cart.find({ userId: req.params.userId });
    res.status(200).json(Cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllCart = async (req, res) => {
  try {
    const Carts = await Cart.find();
    res.status(200).json(Carts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get Monthly Income

module.exports = {
  updateCart,
  deleteCart,
  getUserCart,
  getAllCart,
  createCart,
};
