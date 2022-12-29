const momgoose = require("mongoose");

const orderSchema = new momgoose.Schema(
  {
    userId: { type: String, require: true },
    products: [
      {
        productId: {
          type: String, unique:false
        },
        title: { type: String,unique:false },
        img: { type: String },
        quantity: {
          type: Number,
          default: 1,
        },
        color: { type: String },
        price: { type: Number },
      },
    ],
    total: { type: Number },
    payMent: { type: String, require: true },
    name: { type: String, require: true },
    address: { type: String, require: true },
    city: { type: String, require: true },
    phone: { type: String, require: true },
    status: { type: String, default: "Chờ xác nhận" },
  },
  {
    timestamps: true,
  }
);

module.exports = momgoose.model("Order", orderSchema);
