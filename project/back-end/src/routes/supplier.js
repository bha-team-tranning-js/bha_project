const express = require('express');
const res = require('express/lib/response');

const {
    getAllSuppliers,
    createSupplier,
    getSupplier,
    updateSupplier,
    deleteSupplier,
} = require('../controllers/supplier.controller');

const router = express.Router();

router.route('/').get(getAllSuppliers).post(createSupplier);
router
    .route('/:id')
    .get(getSupplier)
    .put(updateSupplier)
    .delete(deleteSupplier);
module.exports = router;
