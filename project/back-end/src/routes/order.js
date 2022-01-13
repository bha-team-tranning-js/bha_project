const express = require('express');

const {
    getAllOrders,
    createOrder,
    getOrderByStatus,
    getOrder,
    updateOrder,
    updateShipedOrder,
    deleteOrder,
} = require('../controllers/order.controller');

const router = express.Router();

router.get('/', getAllOrders);
router.post('/', createOrder);
router.post('/order-by-status', getOrderByStatus);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.put('/shiped/:id', updateShipedOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
