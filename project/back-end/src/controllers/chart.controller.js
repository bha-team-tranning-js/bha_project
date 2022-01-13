const db = require('../config/db.config');

const countStatusOfOrder = async (req, res) => {
    try {
        sql = `Select order_status_id,count(order_status_id) as count from northwind_bha.orders group by(order_status_id)`;
        const [result, _] = await db.query(sql);
        if (!result.length) throw 'Không tìm thấy bản ghi nào !';
        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

const countProductsByDate = async (req, res) => {
    try {
        sql = `SELECT DATE_FORMAT(shiped_date, '%d/%m/%Y') as shipped_date,count(shiped_date) as count 
                FROM northwind_bha.orders 
                WHERE shiped_date is not null
                GROUP BY(Date(shiped_date))
                ORDER BY shiped_date ASC`;

        const [result, _] = await db.query(sql);
        console.log(result);
        if (!result.length) throw 'Không tìm thấy bản ghi nào !';
        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { countStatusOfOrder, countProductsByDate };
