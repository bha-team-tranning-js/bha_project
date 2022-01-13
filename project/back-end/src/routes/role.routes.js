const express = require('express');
const router = express.Router();

const {
    getAllRoles,
    createRole,
    getRole,
    updateRole,
    deleteRole,
} = require('../controllers/role.controller');

router.route('/').get(getAllRoles).post(createRole);
router.route('/:id').get(getRole).put(updateRole).delete(deleteRole);

module.exports = router;
