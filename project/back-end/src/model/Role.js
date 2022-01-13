const db = require('../config/db.config');

const Role = function (role_name, role_key) {
    (this.role_name = role_name), (this.role_key = role_key);
};

//static func
Role.findAll = async function () {
    const sql = 'SELECT * FROM roles';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Role.findOne = async function (id) {
    const sql = `SELECT * FROM roles WHERE Role_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Role.deleteById = async function (id) {
    const sql = `DELETE FROM roles WHERE role_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Role.prototype.save = async function () {
    const sql = `
    INSERT INTO roles
      (
        role_name, role_key
        )
    VALUES (
      "${this.role_name}",
      "${this.role_key}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Role.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      roles
    SET 
        role_name ="${this.role_name}",
        role_key ="${this.role_key}"
    WHERE 
    role_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Role;
