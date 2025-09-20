const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/', supplierController.index);
router.get('/create', supplierController.create);
router.post('/store', supplierController.store);
router.get('/edit/:id', supplierController.edit);
router.post('/update/:id', supplierController.update);
router.get('/delete/:id', supplierController.delete);

module.exports = router;
