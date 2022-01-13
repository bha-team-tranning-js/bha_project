const db = require('../config/db.config');

const ProductDetails = function (product_id, size_number, quanity) {
    (this.product_id = product_id),
        (this.size_number = size_number),
        (this.quanity = quanity);
};

//static func
ProductDetails.findAll = async function () {
    const sql = 'SELECT * FROM product_details';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

ProductDetails.findOne = async function (id) {
    const sql = `SELECT * FROM product_details WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
ProductDetails.deleteById = async function (id) {
    const sql = `DELETE FROM product_details WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
ProductDetails.prototype.save = async function () {
    const sql = `
    INSERT INTO product_details
      (
        product_id, size_number, quanity
        )
    VALUES (
      "${this.product_id}",
      "${this.size_number}",
      "${this.quanity}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

ProductDetails.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      product_details
    SET 
      product_id =${this.product_id},
      size_number =${this.size_number},
      quanity =${this.quanity}
    WHERE 
      id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = ProductDetails;
