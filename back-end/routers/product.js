const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require("./verifyToken");
const {
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  createProduct,
} = require("../controller/productController");
router.post("/", verifyTokenIsAdmin, createProduct);
router.get("/", getAllProduct);
router.put("/:id", verifyTokenAndAuthorization, updateProduct);
router.get("/find/:id", getProduct);
router.delete("/:id", verifyTokenIsAdmin, deleteProduct);

module.exports = router;
