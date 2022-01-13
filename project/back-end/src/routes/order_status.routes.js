const express = require('express');

const {
    getAllOrderStatus,
    createOrderStatus,
    getOrderStatus,
    updateOrderStatus,
    deleteOrderStatus,
} = require('../controllers/order_status.controller');

const router = express.Router();

router.route('/').get(getAllOrderStatus).post(createOrderStatus);
router
    .route('/:id')
    .get(getOrderStatus)
    .put(updateOrderStatus)
    .delete(deleteOrderStatus);

module.exports = router;
