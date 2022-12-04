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
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllProduct = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if(qNew&&qCategory){
      products = await Product.find({
        categories: {
          $in: [qCategory]
        },
      }).sort({ createdAt: -1 })
      console.log("1");
    }
    else if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(9);
      console.log("2");
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
      console.log("3");
    } 
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  createProduct,
};
