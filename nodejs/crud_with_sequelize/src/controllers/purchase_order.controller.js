const Purchase_order = require('../model/Purchase_order');

const getAllPurchase_orders = async (req, res) => {
    try {
        const purchase_orders = await Purchase_order.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Purchase_orders suscess',
            data: {
                result: purchase_orders.length,
                purchase_orders,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Purchase_orders fail',
            error: { err },
        });
    }
};

const createPurchase_order = async (req, res) => {
    const {
        supplier_id,
        created_by,
        submitted_date,
        creation_date,
        status_id,
        expected_date,
        shipping_fee,
        taxes,
        payment_date,
        payment_amount,
        payment_method,
        notes,
        approved_by,
        approved_date,
        submitted_by,
    } = req.body;
    const purchase_order = new Purchase_order(
        supplier_id,
        created_by,
        submitted_date,
        creation_date,
        status_id,
        expected_date,
        shipping_fee,
        taxes,
        payment_date,
        payment_amount,
        payment_method,
        notes,
        approved_by,
        approved_date,
        submitted_by
    );
    //chưa check dữ liệu đầu vào
    try {
        await purchase_order.save();
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

const getPurchase_order = async (req, res) => {
    const { id } = req.params;
    try {
        const purchase_order = await Purchase_order.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { purchase_order },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updatePurchase_order = async (req, res) => {
    const { id } = req.params;
    const {
        supplier_id,
        created_by,
        submitted_date,
        creation_date,
        status_id,
        expected_date,
        shipping_fee,
        taxes,
        payment_date,
        payment_amount,
        payment_method,
        notes,
        approved_by,
        approved_date,
        submitted_by,
    } = req.body;
    const purchase_order = new Purchase_order(
        supplier_id,
        created_by,
        submitted_date,
        creation_date,
        status_id,
        expected_date,
        shipping_fee,
        taxes,
        payment_date,
        payment_amount,
        payment_method,
        notes,
        approved_by,
        approved_date,
        submitted_by
    );
    try {
        await purchase_order.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Purchase_order',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deletePurchase_order = async (req, res) => {
    const { id } = req.params;
    try {
        await Purchase_order.deleteById(id);
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
    getAllPurchase_orders,
    createPurchase_order,
    getPurchase_order,
    updatePurchase_order,
    deletePurchase_order,
};
