const Employee = require('../model/Employee');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json({
            success: true,
            message: 'get all employees suscess',
            data: {
                result: employees.length,
                employees,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all employees fail',
            error: { err },
        });
    }
};

const createEmployee = async (req, res) => {
    const {
        company,
        last_name,
        first_name,
        email_address,
        job_title,
        business_phone,
        home_phone,
        mobile_phone,
        fax_number,
        address,
        city,
        state_province,
        zip_postal_code,
        country_region,
        web_page,
        notes,
        attachments,
    } = req.body;
    const employee = new Employee(
        company,
        last_name,
        first_name,
        email_address,
        job_title,
        business_phone,
        home_phone,
        mobile_phone,
        fax_number,
        address,
        city,
        state_province,
        zip_postal_code,
        country_region,
        web_page,
        notes,
        attachments
    );
    //chưa check dữ liệu đầu vào
    try {
        await employee.save();
        return res.status(201).json({
            success: true,
            message: 'created!',
        });
    } catch (err) {
        log(err);
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
        company,
        last_name,
        first_name,
        email_address,
        job_title,
        business_phone,
        home_phone,
        mobile_phone,
        fax_number,
        address,
        city,
        state_province,
        zip_postal_code,
        country_region,
        web_page,
        notes,
        attachments,
    } = req.body;
    const employee = new Employee(
        company,
        last_name,
        first_name,
        email_address,
        job_title,
        business_phone,
        home_phone,
        mobile_phone,
        fax_number,
        address,
        city,
        state_province,
        zip_postal_code,
        country_region,
        web_page,
        notes,
        attachments
    );
    try {
        await employee.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated employee',
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
