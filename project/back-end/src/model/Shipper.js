const db = require('../config/db.config');

const Shipper = function (full_name, mobie_phone) {
    (this.full_name = full_name), (this.mobie_phone = mobie_phone);
};

//static func
Shipper.findAll = async function () {
    const sql = 'SELECT * FROM Shippers';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Shipper.findOne = async function (id) {
    const sql = `SELECT * FROM Shippers WHERE Shipper_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Shipper.deleteById = async function (id) {
    const sql = `DELETE FROM Shippers WHERE Shipper_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Shipper.prototype.save = async function () {
    const sql = `
    INSERT INTO Shippers
      (
        full_name, mobie_phone
        )
    VALUES (
      "${this.full_name}",
      "${this.mobie_phone}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Shipper.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      Shippers
    SET 
        full_name="${this.full_name}",
        mobie_phone="${this.mobie_phone}"
    WHERE 
    Shipper_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Shipper;
