const express = require('express');
const router = express.Router();

const employeeRouter = require('./employee.router');
const productRouter = require('./product.router');
const supplierRouter = require('./supplier.router');
const purchase_orderRouter = require('./purchase_order.router');
const purchase_order_statusRouter = require('./purchase_order_status.router');
const purchase_order_detailsRouter = require('./purchase_order_details.router');

router.use('/employees', employeeRouter);
router.use('/products', productRouter);
router.use('/suppliers', supplierRouter);
router.use('/purchase_orders', purchase_orderRouter);
router.use('/purchase_order_status', purchase_order_statusRouter);
router.use('/purchase_order_details', purchase_order_detailsRouter);

module.exports = router;
