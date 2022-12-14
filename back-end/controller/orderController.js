const CryptoJS = require("crypto-js");
const Order = require("../models/order");

const createOrder = async (req, res) => {
  const reqOrder = req.body;
  try {
    const newOrder = await Order.create(reqOrder);
    res.status(201).json({ newOrder: newOrder });
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const data = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log("update order completed");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (error) {
    res.status(500).json(err);
  }
};

const getUserOrder = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.find({ _id: req.params.id });
    console.log("get order by id");
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};


const monthlyIncome= async(req,res)=>{
  const productId= req.query.pid
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        {
          $match: {
            createdAt: { $gte: previousMonth }, 
            status:"Đã giao",
            ... (productId && {products:{$elemMatch:{productId}}})
          },
        },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$total",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income.sort((a, b) => a._id - b._id));
    } catch (err) {
      res.status(500).json(err);
    }
}

module.exports = {
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrder,
  createOrder,
  monthlyIncome,
  getOrder
};
