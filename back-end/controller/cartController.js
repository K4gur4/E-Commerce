const Cart = require('../models/cart');

const createCart = async (req, res) => {
  const reqCart = req.body;
  try {
    const newCart = await Cart.create(reqCart);
    res.status(201).json({ newCart: newCart });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCart = async (req, res) => {
  try {
    const update = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ cartUpdated: update });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};
const userCart = async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId });
    res.status(200).json({ userCart: cart });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};
const allCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json({ allCart: carts });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  updateCart,
  deleteCart,
  userCart,
  allCart,
  createCart,
};
