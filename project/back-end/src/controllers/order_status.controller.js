const OrderStatus = require('../model/OrderStatus');

const getAllOrderStatus = async (req, res) => {
    try {
        const orderStatus = await OrderStatus.findAll();
        res.status(200).json({
            success: true,
            message: 'get all OrderStatus suscess',
            data: orderStatus,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all OrderStatuss fail',
            error: { err },
        });
    }
};

const createOrderStatus = async (req, res) => {
    const { status_name, status_key } = req.body;
    const orderStatus = new OrderStatus(status_name, status_key);
    //chưa check dữ liệu đầu vào
    console.log(orderStatus);
    try {
        await orderStatus.save();
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
const getOrderStatus = async (req, res) => {
    const { id } = req.params;
    try {
        const orderStatus = await OrderStatus.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { orderStatus },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status_name, status_key } = req.body;
    const orderStatus = new OrderStatus(status_name, status_key);
    console.log(orderStatus);
    try {
        await orderStatus.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated OrderStatus',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteOrderStatus = async (req, res) => {
    const { id } = req.params;
    try {
        await OrderStatus.deleteById(id);
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
    getAllOrderStatus,
    createOrderStatus,
    getOrderStatus,
    updateOrderStatus,
    deleteOrderStatus,
};
