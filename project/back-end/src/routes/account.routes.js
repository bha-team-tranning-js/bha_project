const express = require('express');

const {
    getAllAccounts,
    createAccount,
    getAccount,
    updateAccount,
    deleteAccount,
} = require('../crud/account.crud');

const router = express.Router();

router.get('/', getAllAccounts);
router.post('/', createAccount);
router.get('/:id', getAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

module.exports = router;
