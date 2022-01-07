const Purchase_order_status = require('../model/Purchase_order_status');

const getAllPurchase_order_status = async (req, res) => {
    try {
        const data = await Purchase_order_status.findAll();
        res.status(200).json({
            sucess: true,
            message: 'get all Purchase_order_statuss success',
            data: { result: data.length, data },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Purchase_order_statuss fail',
            error: { err },
        });
    }
};

const createPurchase_order_status = async (req, res) => {
    const { id, status } = req.body;
    //chưa check dữ liệu đầu vào
    try {
        await Purchase_order_status.create({
            id,
            status,
        });
        return res.status(201).json({
            success: true,
            message: 'created !',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'create fail!',
            error: { err },
        });
    }
};

const getPurchase_order_status = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Purchase_order_status.findByPk(id);
        if (data == null) throw 'Không có tìm thấy bản ghi ứng với id này!';
        res.status(200).json({
            sucess: true,
            message: 'get Purchase_order_statuss success',
            data,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updatePurchase_order_status = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const purchase_order_status = await Purchase_order_status.update(
            { status },
            { where: { id } }
        );
        if (!purchase_order_status[0]) throw 'Cập nhật thất bại!';
        res.status(200).json({
            success: true,
            message: 'Update success',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deletePurchase_order_status = async (req, res) => {
    const { id } = req.params;
    try {
        const purchase_order_status = await Purchase_order_status.destroy({
            where: { id },
        });
        if (!purchase_order_status) throw 'ID này không tồn tại !';
        res.status(205).json({
            success: true,
            message: 'Deleted!',
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
    getAllPurchase_order_status,
    createPurchase_order_status,
    getPurchase_order_status,
    updatePurchase_order_status,
    deletePurchase_order_status,
};
