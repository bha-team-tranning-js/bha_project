const OrderDetail = require('../model/OrderDetail');
const db = require('../config/db.config');

const getOrderDetailByOrderID = async (req, res) => {
    const { order_id } = req.body;
    try {
        sql = `Select products.product_name, products.image, order_details.quantity,order_details.size_number
            FROM order_details
            INNER JOIN products on order_details.product_id = products.product_id
            where order_id=${order_id};`;
        const [result, _] = await db.query(sql);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            result: result.length,
            data: result,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};

const getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.status(200).json({
            success: true,
            message: 'get all OrderDetails suscess',
            data: {
                result: orderDetails.length,
                orderDetails,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all OrderDetails fail',
            error: { err },
        });
    }
};

const createOrderDetail = async (req, res) => {
    const { product_id, order_id, quantity, size_number, unit_price } =
        req.body;
    const orderDetail = new OrderDetail(
        product_id,
        order_id,
        quantity,
        size_number,
        unit_price
    );
    //chưa check dữ liệu đầu vào
    try {
        await orderDetail.save();
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

const deleteOrderDetail = async (req, res) => {
    const { id } = req.params;
    try {
        await OrderDetail.deleteById(id);
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
    getAllOrderDetails,
    createOrderDetail,
    getOrderDetailByOrderID,
    deleteOrderDetail,
};
