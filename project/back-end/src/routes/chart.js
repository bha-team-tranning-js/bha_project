const express = require('express');
const router = express.Router();

const {
    countStatusOfOrder,
    countProductsByDate,
} = require('../controllers/chart.controller');
router.route('/order-status').get(countStatusOfOrder);
router.route('/product-sold').get(countProductsByDate);

module.exports = router;
