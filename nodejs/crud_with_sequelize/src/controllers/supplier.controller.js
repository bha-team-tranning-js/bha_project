const Supplier = require('../model/Supplier');

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Suppliers suscess',
            data: {
                result: suppliers.length,
                suppliers,
            },
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
    const supplier = new Supplier(
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
            data: { supplier },
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
    const supplier = new Supplier(
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
