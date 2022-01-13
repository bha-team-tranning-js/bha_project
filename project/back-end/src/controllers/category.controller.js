const Category = require('../model/Category');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({
            success: true,
            message: 'get all categories suscess',
            result: categories.length,
            data: categories,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all categories fail',
            error: { err },
        });
    }
};

const createCategory = async (req, res) => {
    const { category_name } = req.body;
    const category = new Category(category_name);
    //chưa check dữ liệu đầu vào
    try {
        await category.save();
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
const getCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: category,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { category_name } = req.body;
    const category = new Category(category_name);
    try {
        await category.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Category',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await Category.deleteById(id);
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
    getAllCategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
};
