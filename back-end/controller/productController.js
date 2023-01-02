const Product = require('../models/product');

const createProduct = async (req, res) => {
  const reqProduct = req.body;
  try {
    const newProduct = await Product.create(reqProduct);
    res.status(201).json({ newProduct: newProduct });
    return
  } catch (error) {
    res.status(500).json(error);
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
    res.status(200).json({productUpdated:data});
    return
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200)
    return
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({product:product});
    return
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const allProduct = async (req, res) => {
  const productNew = req.query.new;
  const productCategory = req.query.category;
  try {
    let products;
    if (productNew && productCategory) {
      products = await Product.find({
        categories: {
          $in: [productCategory],
        },
      }).sort({ createdAt: -1 });
    } else if (productNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(9);
    } else if (productCategory) {
      products = await Product.find({
        categories: {
          $in: [productCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json({allProduct:products});
    return
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  updateProduct,
  deleteProduct,
  getProduct,
  allProduct,
  createProduct,
};
