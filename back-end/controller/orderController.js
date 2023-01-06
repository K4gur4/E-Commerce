const Order = require('../models/order');

const createOrder = async (req, res) => {
  const reqOrder = req.body;
  try {
    const newOrder = await Order.create(reqOrder);
    res.status(201).json({ newOrder: newOrder });
    return;
  } catch (error) {
    // console.log(error.message);
    res.status(500).json(error.message);
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
    // console.log('update order completed');
    res.status(200).json({ orderUpdated: data });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

const userOrder = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json({ userOrder: order });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

const allOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ allOrder: orders });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.find({ _id: req.params.id });
    res.status(200).json({ order: order });
  } catch (error) {
    res.status(500).json(error);
  }
};

const monthlyIncome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          status: 'Đã giao',
        },
      },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$total',
        },
      },
      {
        $group: {
          _id: '$month',
          revenue: { $sum: '$sales' },
        },
      },
    ]);
    res.status(200).json({ income: income.sort((a, b) => a._id - b._id) });
    return;
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const dailyIcome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  try {
    const data = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: lastMonth },
          status: 'Đã giao',
        },
      },
      {
        $project: {
          day: { $dayOfMonth: '$createdAt' },
          sales: '$total',
        },
      },
      {
        $group: {
          _id: '$day',
          revenue: { $sum: '$sales' },
        },
      },
    ]);
    res.status(200).json({ income: data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
};

module.exports = {
  updateOrder,
  deleteOrder,
  createOrder,
  monthlyIncome,
  getOrder,
  allOrder,
  userOrder,
  dailyIcome,
};
