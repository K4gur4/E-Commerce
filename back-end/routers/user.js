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

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.get("/:id", verifyTokenAndAuthorization, getUser);
router.delete("/:id",verifyTokenIsAdmin , deleteUser);
router.get("/", verifyTokenIsAdmin, getAlluser);
router.get("/stat", verifyTokenIsAdmin, getStatsUser);


module.exports = router;
