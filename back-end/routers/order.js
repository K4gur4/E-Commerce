const router = require('express').Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require('./verifyToken');
const {
  updateOrder,
  deleteOrder,
  createOrder,
  monthlyIncome,
  getOrder,
  allOrder,
  userOrder,
} = require('../controller/orderController');
router.post('/', verifyTokenAndAuthorization, createOrder);
router.get('/', verifyTokenIsAdmin, allOrder);
router.put('/:id', verifyTokenAndAuthorization, updateOrder);
router.get('/find/:userId', verifyTokenAndAuthorization, userOrder);
router.get('/findOrder/:id', verifyTokenAndAuthorization, getOrder);
router.delete('/:id', verifyTokenIsAdmin, deleteOrder);
router.get('/income', verifyTokenIsAdmin, monthlyIncome);

module.exports = router;
