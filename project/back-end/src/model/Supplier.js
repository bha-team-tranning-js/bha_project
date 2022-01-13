const db = require('../config/db.config');

const Supplier = function (
    supplier_name,
    email_address,
    bussiness_phone,
    address
) {
    (this.supplier_name = supplier_name),
        (this.email_address = email_address),
        (this.bussiness_phone = bussiness_phone),
        (this.address = address);
};

//static func
Supplier.findAll = async function () {
    const sql = 'SELECT * FROM suppliers';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Supplier.findOne = async function (id) {
    const sql = `SELECT * FROM suppliers WHERE supplier_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Supplier.deleteById = async function (id) {
    const sql = `DELETE FROM suppliers WHERE supplier_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Supplier.prototype.save = async function () {
    const sql = `
    INSERT INTO suppliers
      (
        supplier_name,
        email_address,
        bussiness_phone,
        address
        )
    VALUES (
      "${this.supplier_name}",
      "${this.email_address}",
      "${this.bussiness_phone}",
      "${this.address}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Supplier.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      suppliers
    SET 
      supplier_name ="${this.supplier_name}", 
      email_address ="${this.email_address}", 
      bussiness_phone ="${this.bussiness_phone}",
      address ="${this.address}"     
    WHERE 
    supplier_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Supplier;
