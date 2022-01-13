require('dotenv').config({ path: './config.env' });
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

const apiRouter = require('./src/routes');
app.use('/api/v1', apiRouter);

// const db = require('./src/config/db.config');
// // connect DB
// db.connect(function (err) {
//     if (err) throw err;
//     console.log('Connected DB!!!');
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
