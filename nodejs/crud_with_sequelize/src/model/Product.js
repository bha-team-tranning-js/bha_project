const db = require('../config/db');

const Product = function (
    supplier_ids,
    product_code,
    product_name,
    description,
    standard_cost,
    list_price,
    reorder_level,
    target_level,
    quantity_per_unit,
    discontinued,
    minimum_reorder_quantity,
    category,
    attachments
) {
    (this.supplier_ids = supplier_ids),
        (this.product_code = product_code),
        (this.product_name = product_name),
        (this.description = description),
        (this.standard_cost = standard_cost),
        (this.list_price = list_price),
        (this.reorder_level = reorder_level),
        (this.target_level = target_level),
        (this.quantity_per_unit = quantity_per_unit),
        (this.discontinued = discontinued),
        (this.minimum_reorder_quantity = minimum_reorder_quantity),
        (this.category = category),
        (this.attachments = attachments);
};

//static func
Product.findAll = async function () {
    const sql = 'SELECT * FROM products';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không có bản ghi nào!';
    return result;
};

Product.findOne = async function (id) {
    const sql = `SELECT * FROM products WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy kết qủa !';
    return result;
};
Product.deleteById = async function (id) {
    const sql = `DELETE FROM products WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Không tìm thấy dữ liệu với id này!';
    return;
};
Product.prototype.save = async function () {
    const sql = `
      INSERT INTO products 
          (
            supplier_ids,
            product_code,
            product_name,
            description,
            standard_cost,
            list_price,
            reorder_level,
            target_level,
            quantity_per_unit,
            discontinued,
            minimum_reorder_quantity,
            category,
            attachments
          ) 
      VALUES(
            '${this.supplier_ids}',
            '${this.product_code}',
            '${this.product_name}',
            ${this.description},
            ${this.standard_cost},
            ${this.list_price},
            ${this.reorder_level},
            ${this.target_level},
            '${this.quantity_per_unit}',
            ${this.discontinued},
            ${this.minimum_reorder_quantity},
            '${this.category}',
            '${this.attachments}')
      `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Không lưu được dữ liệu!';
    return;
};

Product.prototype.updateById = async function (id) {
    const sql = `
    UPDATE products 
    SET
        supplier_ids = '${this.supplier_ids}',
        product_code = '${this.product_code}',
        product_name = '${this.product_name}',
        description = '${this.description}',
        standard_cost = '${this.standard_cost}',
        list_price = '${this.list_price}',
        reorder_level = '${this.reorder_level}',
        target_level = '${this.target_level}',
        quantity_per_unit = '${this.quantity_per_unit}',
        discontinued = '${this.discontinued}',
        minimum_reorder_quantity = '${this.minimum_reorder_quantity}',
        category = '${this.category}',
        attachments = '${this.attachments}'
      WHERE id = ${id} 
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Product;
