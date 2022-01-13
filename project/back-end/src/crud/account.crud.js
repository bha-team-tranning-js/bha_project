const Account = require('../model/Account');

const getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Accounts suscess',
            data: {
                result: accounts.length,
                accounts,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Accounts fail',
            error: { err },
        });
    }
};

const createAccount = async (req, res) => {
    const { username, password, role_id } = req.body;
    const account = new Account(username, password, role_id);
    //chưa check dữ liệu đầu vào
    try {
        await account.save();
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
const getAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const account = await Account.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { account },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateAccount = async (req, res) => {
    const { id } = req.params;
    const { username, password, role_id } = req.body;
    const account = new Account(username, password, role_id);
    try {
        await account.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Account',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteAccount = async (req, res) => {
    const { id } = req.params;
    try {
        await Account.deleteById(id);
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
    getAllAccounts,
    createAccount,
    getAccount,
    updateAccount,
    deleteAccount,
};
