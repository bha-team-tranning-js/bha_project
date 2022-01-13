const Customer = require('../model/Customer');

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Customers suscess',
            data: {
                result: customers.length,
                customers,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Customers fail',
            error: { err },
        });
    }
};

const createCustomer = async (req, res) => {
    const {
        full_name,
        email_address,
        mobie_phone,
        birth_day,
        gender,
        address,
        account_id,
    } = req.body;
    const customer = new Customer(
        full_name,
        email_address,
        mobie_phone,
        birth_day,
        gender,
        address,
        account_id
    );
    //chưa check dữ liệu đầu vào
    try {
        await customer.save();
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
const getCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { customer },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const {
        full_name,
        email_address,
        mobie_phone,
        birth_day,
        gender,
        address,
        account_id,
    } = req.body;
    const customer = new Customer(
        full_name,
        email_address,
        mobie_phone,
        birth_day,
        gender,
        address,
        account_id
    );
    try {
        await customer.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Customer',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        await Customer.deleteById(id);
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
    getAllCustomers,
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
};
