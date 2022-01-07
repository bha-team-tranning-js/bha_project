const express = require('express');
const morgan = require('morgan');
const router = require('./src/routers');
const sequelize = require('./src/config/db');

const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', router);

//connect DB
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
connectDB();

module.exports = app;
