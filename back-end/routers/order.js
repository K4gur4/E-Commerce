const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require("./verifyToken");
const {
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrder,
  createOrder,
  monthlyIncome
} = require("../controller/orderController");
router.post("/", verifyTokenAndAuthorization, createOrder);
router.get("/", verifyTokenIsAdmin, getAllOrder);
router.put("/:id", verifyTokenAndAuthorization, updateOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);
router.delete("/:id",verifyTokenIsAdmin , deleteOrder);
router.get("/income",verifyTokenIsAdmin,monthlyIncome)


module.exports = router;