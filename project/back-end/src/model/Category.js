const db = require('../config/db.config');

const Category = function (Category_name) {
    this.Category_name = Category_name;
};

//static func
Category.findAll = async function () {
    const sql = 'SELECT * FROM categories';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Category.findOne = async function (id) {
    const sql = `SELECT * FROM categories WHERE Category_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Category.deleteById = async function (id) {
    const sql = `DELETE FROM categories WHERE Category_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Category.prototype.save = async function () {
    const sql = `
    INSERT INTO categories
      (
        Category_name
        )
    VALUES (
      "${this.Category_name}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Category.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      categories
    SET 
        Category_name ="${this.Category_name}"
    WHERE 
    Category_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Category;
