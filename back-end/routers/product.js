const router = require('express').Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenIsAdmin,
} = require('./verifyToken');
const {
  updateProduct,
  deleteProduct,
  getProduct,
  createProduct,
  allProduct,
} = require('../controller/productController');
router.post('/', verifyTokenIsAdmin, createProduct);
router.get('/', allProduct);
router.put('/:id', verifyTokenAndAuthorization, updateProduct);
router.get('/find/:id', getProduct);
router.delete('/:id', verifyTokenIsAdmin, deleteProduct);

module.exports = router;
