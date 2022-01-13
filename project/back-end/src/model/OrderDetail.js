const db = require('../config/db.config');

const OrderDetail = function (
    product_id,
    order_id,
    quantity,
    size_number,
    unit_price
) {
    (this.product_id = product_id),
        (this.order_id = order_id),
        (this.quantity = quantity),
        (this.size_number = size_number),
        (this.unit_price = unit_price);
};

//static func
OrderDetail.findAll = async function () {
    const sql = 'SELECT * FROM order_details';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

OrderDetail.findOne = async function (id) {
    const sql = `SELECT * FROM order_details WHERE order_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
OrderDetail.deleteById = async function (id) {
    const sql = `DELETE FROM order_details WHERE order_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
OrderDetail.prototype.save = async function () {
    const sql = `
    INSERT INTO order_details
      (
        product_id,
        order_id,
        quantity,
        size_number,
        unit_price
        )
    VALUES (
        "${this.product_id}",
        "${this.order_id}",
        "${this.quantity}",
        "${this.size_number}",
        "${this.unit_price}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

// OrderDetail.prototype.updateById = async function (id) {
//     const sql = `
//       `;
//     const [result, _] = await db.query(sql);
//     if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
//     return;
// };

module.exports = OrderDetail;
