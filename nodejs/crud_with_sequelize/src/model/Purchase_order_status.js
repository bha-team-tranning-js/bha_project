const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Purchase_order_status = sequelize.define(
    'purchase_order_status',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false, // trong DB ko có tự tăng
        },
        status: { type: DataTypes.STRING },
    },
    {
        // Other model options go here
        timestamps: false,
        freezeTableName: true, // dừng tự động bổ sung tên model
    }
);

module.exports = Purchase_order_status;
