const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require("./verifyToken");
const {
  updateUser,
  deleteUser,
  getUser,
  getAlluser,
  getStatsUser
} = require("../controller/userController");

router.get("/", verifyTokenIsAdmin, getAlluser);
router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.get("/find/:id", verifyTokenAndAuthorization, getUser);
router.delete("/:id",verifyTokenIsAdmin , deleteUser);
router.get("/stat", verifyTokenIsAdmin, getStatsUser);


module.exports = router;
