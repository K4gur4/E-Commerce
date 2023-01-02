const router = require('express').Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require('./verifyToken');
const {
  updateCart,
  deleteCart,
  getAllCart,
  getUserCart,
  createCart,
} = require('../controller/CartController');
router.post('/', verifyTokenIsAdmin, createCart);
router.get('/', verifyTokenIsAdmin, getAllCart);
router.put('/:id', verifyTokenAndAuthorization, updateCart);
router.get('/find/:id', verifyTokenAndAuthorization, getUserCart);
router.delete('/:id', verifyTokenIsAdmin, deleteCart);

module.exports = router;
