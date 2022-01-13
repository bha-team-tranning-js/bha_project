const Role = require('../model/Role');

const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Roles suscess',
            data: {
                result: roles.length,
                roles,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Roles fail',
            error: { err },
        });
    }
};

const createRole = async (req, res) => {
    const { role_name, role_key } = req.body;
    const role = new Role(role_name, role_key);
    //chưa check dữ liệu đầu vào
    try {
        await role.save();
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
const getRole = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { role },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateRole = async (req, res) => {
    const { id } = req.params;
    const { role_name, role_key } = req.body;
    const role = new Role(role_name, role_key);
    try {
        await role.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Role',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteRole = async (req, res) => {
    const { id } = req.params;
    try {
        await Role.deleteById(id);
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
    getAllRoles,
    createRole,
    getRole,
    updateRole,
    deleteRole,
};
