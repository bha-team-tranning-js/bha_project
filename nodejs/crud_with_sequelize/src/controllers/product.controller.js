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
        supplier_ids,
        product_code,
        product_name,
        description,
        standard_cost,
        list_price,
        reorder_level,
        target_level,
        quantity_per_unit,
        discontinued,
        minimum_reorder_quantity,
        category,
        attachments,
    } = req.body;
    const product = new Product(
        supplier_ids,
        product_code,
        product_name,
        description,
        standard_cost,
        list_price,
        reorder_level,
        target_level,
        quantity_per_unit,
        discontinued,
        minimum_reorder_quantity,
        category,
        attachments
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
        supplier_ids,
        product_code,
        product_name,
        description,
        standard_cost,
        list_price,
        reorder_level,
        target_level,
        quantity_per_unit,
        discontinued,
        minimum_reorder_quantity,
        category,
        attachments,
    } = req.body;
    const product = new Product(
        supplier_ids,
        product_code,
        product_name,
        description,
        standard_cost,
        list_price,
        reorder_level,
        target_level,
        quantity_per_unit,
        discontinued,
        minimum_reorder_quantity,
        category,
        attachments
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
