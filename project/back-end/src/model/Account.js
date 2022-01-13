const db = require('../config/db.config');

const Account = function (username, password, role_id) {
    this.username = username;
    this.password = password;
    this.role_id = role_id;
};

//static func
Account.findAll = async function () {
    const sql = 'SELECT * FROM accounts';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Account.findOne = async function (id) {
    const sql = `SELECT * FROM accounts WHERE account_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Account.deleteById = async function (id) {
    const sql = `DELETE FROM accounts WHERE account_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Account.prototype.save = async function () {
    const sql = `
    INSERT INTO accounts
      (
        username, 
        password, 
        role_id
        )
    VALUES (
      "${this.username}",
      "${this.password}",
      "${this.role_id}",
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Account.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      accounts
    SET 
        username="${username}",
        password="${password}", 
        role_id="${role_id}",
    WHERE 
    account_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Account;
