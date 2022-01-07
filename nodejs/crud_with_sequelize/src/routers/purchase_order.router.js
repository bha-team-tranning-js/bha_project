const express = require('express');
const router = express.Router();

const {
    getAllPurchase_orders,
    createPurchase_order,
    getPurchase_order,
    updatePurchase_order,
    deletePurchase_order,
} = require('../controllers/purchase_order.controller');

router.route('/').get(getAllPurchase_orders).post(createPurchase_order);
router
    .route('/:id')
    .get(getPurchase_order)
    .put(updatePurchase_order)
    .delete(deletePurchase_order);

module.exports = router;
