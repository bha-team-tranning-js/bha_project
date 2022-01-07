const express = require('express');
const router = express.Router();

const {
    getAllPurchase_order_status,
    createPurchase_order_status,
    getPurchase_order_status,
    updatePurchase_order_status,
    deletePurchase_order_status,
} = require('../controllers/purchase_order_status.controller');

router
    .route('/')
    .get(getAllPurchase_order_status)
    .post(createPurchase_order_status);
router
    .route('/:id')
    .get(getPurchase_order_status)
    .put(updatePurchase_order_status)
    .delete(deletePurchase_order_status);

module.exports = router;
