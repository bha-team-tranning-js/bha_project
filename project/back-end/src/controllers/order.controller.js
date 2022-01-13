const Order = require('../model/Order');
const db = require('../config/db.config');

const getOrderByStatus = async (req, res) => {
    const { order_status_id } = req.body;
    try {
        sql = `SELECT orders.order_id,orders.order_date,customers.full_name,customers.mobie_phone,orders.shipping_fee,orders.total_price,orders.ship_address,orders.note,orders.shiped_date,orders.order_status_id,orders.customer_id,orders.employee_id,orders.shipper_id FROM orders INNER JOIN customers ON orders.customer_id=customers.customer_id WHERE orders.order_status_id=${order_status_id}`;
        const [result, _] = await db.query(sql);
        // if (!result.length)
        //     throw `Không tìm thấy bản ghi với id ${order_status_id} !`;
        res.status(200).json({
            success: true,
            result: result.length,
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: { err },
        });
    }
};

const createOrder = async (req, res) => {
    const {
        ship_address,
        shipping_fee,
        total_price,
        note,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
        shiped_date,
    } = req.body;

    const order = new Order(
        ship_address,
        shipping_fee,
        total_price,
        note,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
        shiped_date
    );
    console.log(ship_address, shipping_fee, total_price, note, customer_id);

    //chưa check dữ liệu đầu vào
    try {
        await order.save();
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
const updateOrder = async (req, res) => {
    const { id } = req.params;
    const {
        ship_address,
        shipping_fee,
        total_price,
        note,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
        shiped_date,
    } = req.body;

    const order = new Order(
        ship_address,
        shipping_fee,
        total_price,
        note,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
        shiped_date
    );
    try {
        await order.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Order',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};

// cập nhật thêm thời gian đã giao hàng
const updateShipedOrder = async (req, res) => {
    const { id } = req.params;
    const {
        ship_address,
        shipping_fee,
        total_price,
        note,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
        shiped_date,
    } = req.body;
    console.log(
        ship_address,
        shipping_fee,
        total_price,
        note,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
        shiped_date
    );
    try {
        const sql = `
        UPDATE 
            Orders
        SET 
            ship_address="${ship_address}",
            shipping_fee= "${shipping_fee}",
            total_price="${total_price}",
            note="${note}",
            order_status_id="${order_status_id}",
            customer_id="${customer_id}",
            shipper_id="${shipper_id}",
            employee_id="${employee_id}",
            shiped_date="${shiped_date}"
        WHERE 
            Order_id = ${id}
    `;
        const [result, _] = await db.query(sql);
        if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
        res.status(201).json({
            success: true,
            message: 'Updated shiped_date',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await Order.deleteById(id);
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
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Orders suscess',
            data: {
                result: orders.length,
                orders,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Orders fail',
            error: { err },
        });
    }
};

const getOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { order },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
module.exports = {
    getOrderByStatus,
    getAllOrders,
    createOrder,
    getOrder,
    updateOrder,
    updateShipedOrder,
    deleteOrder,
};
