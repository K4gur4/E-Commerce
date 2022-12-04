const momgoose = require("mongoose");

const orderSchema = new momgoose.Schema(
  {
    userId: { type: String, require: true },
    products: { type: Array, require: true },
    total: { type: Number },
    payMent:{type:String,require:true},
    payEd:{type:Boolean,default:false},
    name: { type: String, require: true },
    address: { type: String, require: true },
    city:{type:String,require:true},
    phone: { type: Number, require: true },
    status: { type: String, default: "Chờ xác nhận" },
  },
  {
    timestamps: true,
  }
);

module.exports = momgoose.model("Order", orderSchema);
