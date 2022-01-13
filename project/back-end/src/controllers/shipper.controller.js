const Shipper = require('../model/Shipper');

const getAllShippers = async (req, res) => {
    try {
        const shippers = await Shipper.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Shippers suscess',
            data: shippers,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Shippers fail',
            error: { err },
        });
    }
};

const createShipper = async (req, res) => {
    const { full_name, mobie_phone } = req.body;
    const shipper = new Shipper(full_name, mobie_phone);
    //chưa check dữ liệu đầu vào
    try {
        await shipper.save();
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
const getShipper = async (req, res) => {
    const { id } = req.params;
    try {
        const shipper = await Shipper.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { shipper },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateShipper = async (req, res) => {
    const { id } = req.params;
    const { full_name, mobie_phone } = req.body;
    const shipper = new Shipper(full_name, mobie_phone);
    try {
        await shipper.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Shipper',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteShipper = async (req, res) => {
    const { id } = req.params;
    try {
        await Shipper.deleteById(id);
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
    getAllShippers,
    createShipper,
    getShipper,
    updateShipper,
    deleteShipper,
};
