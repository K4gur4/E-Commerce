const router = require('express').Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require('./verifyToken');
const {
  updateUser,
  deleteUser,
  getUser,
  allUser,
  statsUser,
} = require('../controller/userController');

router.get('/', verifyTokenIsAdmin, allUser);
router.put('/:id', verifyTokenAndAuthorization, updateUser);
router.get('/find/:id', verifyTokenAndAuthorization, getUser);
router.delete('/:id', verifyTokenIsAdmin, deleteUser);
router.get('/stat', verifyTokenIsAdmin, statsUser);

module.exports = router;
