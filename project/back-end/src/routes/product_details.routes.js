const express = require('express');

const {
    getAllProductDetails,
    createProductDetail,
    getProductDetail,
    updateProductDetail,
    deleteProductDetail,
} = require('../controllers/product_detail.controller');

const router = express.Router();

router.route('/').get(getAllProductDetails).post(createProductDetail);
router
    .route('/:id')
    .get(getProductDetail)
    .put(updateProductDetail)
    .delete(deleteProductDetail);

module.exports = router;
