const express = require('express');

const {
    getAllOrderDetails,
    createOrderDetail,
    getOrderDetailByOrderID,
    deleteOrderDetail,
} = require('../controllers/order_details.controller');

const router = express.Router();

router.route('/get-by-order-id').post(getOrderDetailByOrderID);
router.route('/').get(getAllOrderDetails).post(createOrderDetail);
router.route('/:id').delete(deleteOrderDetail);

module.exports = router;
