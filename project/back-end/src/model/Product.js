const db = require('../config/db.config');

const Product = function (
    product_name,
    price,
    image,
    description,
    category_id,
    supplier_id
) {
    (this.product_name = product_name),
        (this.price = price),
        (this.image = image),
        (this.description = description),
        (this.category_id = category_id),
        (this.supplier_id = supplier_id);
};

//static func
Product.findAll = async function () {
    const sql = 'SELECT * FROM products';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Product.findOne = async function (id) {
    const sql = `SELECT * FROM products WHERE product_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Product.deleteById = async function (id) {
    const sql = `DELETE FROM products WHERE product_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Product.prototype.save = async function () {
    const sql = `
    INSERT INTO products
      (
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id
        )
    VALUES (
      "${this.product_name}",
      ${this.price},
      "${this.image}",
      "${this.description}",
      ${this.category_id},
      ${this.supplier_id}
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Product.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      products
    SET 
    product_name ="${this.product_name}", 
      price =${this.price}, 
      image ="${this.image}", 
      description ="${this.description}",     
      category_id =${this.category_id},    
      supplier_id =${this.supplier_id}     
    WHERE 
    product_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Product;
