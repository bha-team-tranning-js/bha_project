const db = require('../config/db.config');

const OrderStatus = function (status_name, status_key) {
    (this.status_name = status_name), (this.status_key = status_key);
};

//static func
OrderStatus.findAll = async function () {
    const sql = 'SELECT * FROM order_status';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

OrderStatus.findOne = async function (id) {
    const sql = `SELECT * FROM order_status WHERE order_status_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
OrderStatus.deleteById = async function (id) {
    const sql = `DELETE FROM order_status WHERE order_status_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
OrderStatus.prototype.save = async function () {
    const sql = `
    INSERT INTO order_status
      (
        status_name, status_key
        )
    VALUES (
        "${this.status_name}",
        "${this.status_key}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

OrderStatus.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
        order_status
    SET 
        status_name="${this.status_name}",
        status_key="${this.status_key}"
        
    WHERE 
    order_status_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = OrderStatus;
