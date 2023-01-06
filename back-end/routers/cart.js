const router = require('express').Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require('./verifyToken');
const {
  updateCart,
  deleteCart,
  createCart,
  allCart,
  userCart,
} = require('../controller/CartController');
router.post('/', verifyTokenIsAdmin, createCart);
router.get('/', verifyTokenIsAdmin, allCart);
router.put('/:id', verifyTokenAndAuthorization, updateCart);
router.get('/find/:id', verifyTokenAndAuthorization, userCart);
router.delete('/:id', verifyTokenIsAdmin, deleteCart);

module.exports = router;
