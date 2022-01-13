const Product = require('../model/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Products suscess',
            data: {
                result: products.length,
                products,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Products fail',
            error: { err },
        });
    }
};

const createProduct = async (req, res) => {
    const {
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id,
    } = req.body;
    const product = new Product(
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id
    );
    //chưa check dữ liệu đầu vào
    try {
        await product.save();
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
const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { product },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id,
    } = req.body;
    const product = new Product(
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id
    );
    try {
        await product.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Product',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.deleteById(id);
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
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
};
