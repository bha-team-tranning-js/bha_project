const ProductDetail = require('../model/ProductDetail');

const getAllProductDetails = async (req, res) => {
    try {
        const productDetails = await ProductDetail.findAll();
        res.status(200).json({
            success: true,
            message: 'get all ProductDetails suscess',
            data: {
                result: productDetails.length,
                productDetails,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all ProductDetails fail',
            error: { err },
        });
    }
};

const createProductDetail = async (req, res) => {
    const { product_id, size_number, quanity } = req.body;
    const productDetail = new ProductDetail(product_id, size_number, quanity);
    //chưa check dữ liệu đầu vào
    try {
        await productDetail.save();
        return res.status(201).json({
            success: true,
            message: 'created!',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'create fail!',
            error: { err },
        });
    }
};
const getProductDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const productDetail = await ProductDetail.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { productDetail },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateProductDetail = async (req, res) => {
    const { id } = req.params;
    const { product_id, size_number, quanity } = req.body;
    const productDetail = new ProductDetail(product_id, size_number, quanity);
    try {
        await productDetail.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated ProductDetail',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteProductDetail = async (req, res) => {
    const { id } = req.params;
    try {
        await ProductDetail.deleteById(id);
        res.status(200).json({
            success: true,
            message: 'deleted !',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'delete fail',
            error: { err },
        });
    }
};
module.exports = {
    getAllProductDetails,
    createProductDetail,
    getProductDetail,
    updateProductDetail,
    deleteProductDetail,
};
