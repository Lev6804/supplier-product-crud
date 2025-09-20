const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.index);
router.get('/create', productController.create);
router.post('/store', productController.store);
router.get('/edit/:id', productController.edit);
router.post('/update/:id', productController.update);
router.get('/delete/:id', productController.delete);

module.exports = router;
