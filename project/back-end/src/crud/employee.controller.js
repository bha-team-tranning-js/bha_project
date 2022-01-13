const Employee = require('../model/Employee');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Employees suscess',
            data: {
                result: employees.length,
                employees,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Employees fail',
            error: { err },
        });
    }
};

const createEmployee = async (req, res) => {
    const {
        full_name,
        email_address,
        mobie_phone,
        birth_day,
        gender,
        address,
        account_id,
    } = req.body;
    const employee = new Employee(
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
        await employee.save();
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
const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { employee },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateEmployee = async (req, res) => {
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
    const employee = new Employee(
        full_name,
        email_address,
        mobie_phone,
        birth_day,
        gender,
        address,
        account_id
    );
    try {
        await employee.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Employee',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        await Employee.deleteById(id);
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
    getAllEmployees,
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
};
