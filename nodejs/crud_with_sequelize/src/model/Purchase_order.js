const db = require('../config/db');

const Purchase_order = function (
    supplier_id,
    created_by,
    submitted_date,
    creation_date,
    status_id,
    expected_date,
    shipping_fee,
    taxes,
    payment_date,
    payment_amount,
    payment_method,
    notes,
    approved_by,
    approved_date,
    submitted_by
) {
    (this.supplier_id = supplier_id),
        (this.created_by = created_by),
        (this.submitted_date = submitted_date),
        (this.creation_date = creation_date),
        (this.status_id = status_id),
        (this.expected_date = expected_date),
        (this.shipping_fee = shipping_fee),
        (this.taxes = taxes),
        (this.payment_date = payment_date),
        (this.payment_amount = payment_amount),
        (this.payment_method = payment_method),
        (this.notes = notes),
        (this.approved_by = approved_by),
        (this.approved_date = approved_date),
        (this.submitted_by = submitted_by);
};

//static func
Purchase_order.findAll = async function () {
    const sql = 'SELECT * FROM purchase_orders';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không có bản ghi nào!';
    return result;
};

Purchase_order.findOne = async function (id) {
    const sql = `SELECT * FROM purchase_orders WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy kết qủa !';
    return result;
};
Purchase_order.deleteById = async function (id) {
    const sql = `DELETE FROM purchase_orders WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Không tìm thấy dữ liệu với id này!';
    return;
};
Purchase_order.prototype.save = async function () {
    const sql = `
      INSERT INTO purchase_orders 
          (
            supplier_id,
            created_by,
            submitted_date,
            creation_date,
            status_id,
            expected_date,
            shipping_fee,
            taxes,
            payment_date,
            payment_amount,
            payment_method,
            notes,
            approved_by,
            approved_date,
            submitted_by
          ) 
      VALUES(
        '${this.supplier_id}',
        '${this.created_by}',
        '${this.submitted_date}',
        '${this.creation_date}',
        '${this.status_id}',
        '${this.expected_date}',
        '${this.shipping_fee}',
        '${this.taxes}',
        '${this.payment_date}',
        '${this.payment_amount}',
        '${this.payment_method}',
        '${this.notes}',
        '${this.approved_by}',
        '${this.approved_date}',
        '${this.submitted_by}'
            )
      `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Không lưu được dữ liệu!';
    return;
};

Purchase_order.prototype.updateById = async function (id) {
    const sql = `
    UPDATE purchase_orders 
    SET
        supplier_id = '${this.supplier_id}',
        created_by = '${this.created_by}',
        submitted_date = '${this.submitted_date}',
        creation_date = '${this.creation_date}',
        status_id = '${this.status_id}',
        expected_date = '${this.expected_date}',
        shipping_fee = '${this.shipping_fee}',
        taxes = '${this.taxes}',
        payment_date = '${this.payment_date}',
        payment_amount = '${this.payment_amount}',
        payment_method = '${this.payment_method}',
        notes = '${this.notes}',
        approved_by = '${this.approved_by}',
        approved_date = '${this.approved_date}',
        submitted_by = '${this.submitted_by}'
    WHERE id = ${id} 
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Purchase_order;
