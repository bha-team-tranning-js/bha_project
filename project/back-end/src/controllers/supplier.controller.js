const Supplier = require('../model/Supplier');

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json({
            success: true,
            message: 'get all suppliers suscess',
            result: suppliers.length,
            data: suppliers,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Suppliers fail',
            error: { err },
        });
    }
};

const createSupplier = async (req, res) => {
    const { supplier_name, email_address, bussiness_phone, address } = req.body;
    const supplier = new Supplier(
        supplier_name,
        email_address,
        bussiness_phone,
        address
    );
    //chưa check dữ liệu đầu vào
    try {
        await supplier.save();
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
const getSupplier = async (req, res) => {
    const { id } = req.params;
    try {
        const supplier = await Supplier.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: supplier,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateSupplier = async (req, res) => {
    const { id } = req.params;
    const { supplier_name, email_address, bussiness_phone, address } = req.body;
    const supplier = new Supplier(
        supplier_name,
        email_address,
        bussiness_phone,
        address
    );
    try {
        await supplier.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Supplier',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteSupplier = async (req, res) => {
    const { id } = req.params;
    try {
        await Supplier.deleteById(id);
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
    getAllSuppliers,
    createSupplier,
    getSupplier,
    updateSupplier,
    deleteSupplier,
};
