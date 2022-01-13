const db = require('../config/db.config');

const Customer = function (
    full_name,
    email_address,
    mobie_phone,
    birth_day,
    gender,
    address,
    account_id
) {
    (this.full_name = full_name),
        (this.email_address = email_address),
        (this.mobie_phone = mobie_phone),
        (this.birth_day = birth_day),
        (this.gender = gender),
        (this.address = address),
        (this.account_id = account_id);
};

//static func
Customer.findAll = async function () {
    const sql = 'SELECT * FROM Customers';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Customer.findOne = async function (id) {
    const sql = `SELECT * FROM Customers WHERE Customer_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Customer.deleteById = async function (id) {
    const sql = `DELETE FROM Customers WHERE Customer_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Customer.prototype.save = async function () {
    const sql = `
    INSERT INTO Customers
      (
        full_name,
        email_address,
        mobie_phone,
        birth_day,
        gender,
        address,
        account_id
        )
    VALUES (
        "${this.full_name}",
        "${this.email_address}",
        "${this.mobie_phone}",
        "${this.birth_day}",
        ${this.gender},
        "${this.address}",
        "${this.account_id}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Customer.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      Customers
    SET 
        full_name="${this.full_name}",
        email_address="${this.email_address}",
        mobie_phone="${this.mobie_phone}",
        birth_day="${this.birth_day}",
        gender=${this.gender},
        address="${this.address}",
        account_id="${this.account_id}"
    WHERE 
        Customer_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Customer;
