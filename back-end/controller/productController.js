const CryptoJS = require("crypto-js");
const Product = require("../models/product");

const createProduct = async (req, res) => {
  const reqProduct = req.body;
  try {
    const newProduct = await Product.create(reqProduct);
    res.status(201).json({ newProduct: newProduct });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log("update completed");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(err);
  }
};

const getProduct = async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    const { password, ...others } = getUser._doc;
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllProduct = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find.sort({ createAt: -1 }).limit(1);
    }
    else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  createProduct,
};
