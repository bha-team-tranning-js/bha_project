const express = require('express');

const {
    getAllShippers,
    createShipper,
    getShipper,
    updateShipper,
    deleteShipper,
} = require('../controllers/Shipper.controller');

const router = express.Router();

router.get('/', getAllShippers);
router.post('/', createShipper);
router.get('/:id', getShipper);
router.put('/:id', updateShipper);
router.delete('/:id', deleteShipper);

module.exports = router;
