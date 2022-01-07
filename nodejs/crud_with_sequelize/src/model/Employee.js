const db = require('../config/db');

const Employee = function (
    company,
    last_name,
    first_name,
    email_address,
    job_title,
    business_phone,
    home_phone,
    mobile_phone,
    fax_number,
    address,
    city,
    state_province,
    zip_postal_code,
    country_region,
    web_page,
    notes,
    attachments
) {
    (this.company = company),
        (this.last_name = last_name),
        (this.first_name = first_name),
        (this.email_address = email_address),
        (this.job_title = job_title),
        (this.business_phone = business_phone),
        (this.home_phone = home_phone),
        (this.mobile_phone = mobile_phone),
        (this.fax_number = fax_number),
        (this.address = address),
        (this.city = city),
        (this.state_province = state_province),
        (this.zip_postal_code = zip_postal_code),
        (this.country_region = country_region),
        (this.web_page = web_page),
        (this.notes = notes),
        (this.attachments = attachments);
};

//static func
Employee.findAll = async function () {
    const sql = 'SELECT * FROM employees';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không có bản ghi nào!';
    return result;
};

Employee.findOne = async function (id) {
    const sql = `SELECT * FROM employees WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy kết qủa !';
    return result;
};
Employee.deleteById = async function (id) {
    const sql = `DELETE FROM employees WHERE id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Không tìm thấy dữ liệu với id này!';
    return;
};
Employee.prototype.save = async function () {
    const sql = `
      INSERT INTO employees 
          (
            company, 
            last_name,
            first_name,
            email_address,
            job_title,
            business_phone,
            home_phone,
            mobile_phone,
            fax_number,
            address,
            city,
            state_province,
            zip_postal_code,
            country_region,
            web_page,
            notes,
            attachments
          ) 
      VALUES('${this.company}', 
        '${this.last_name}',
        '${this.first_name}',
        '${this.email_address}',
        '${this.job_title}',
        '${this.business_phone}',
        '${this.home_phone}',
        '${this.mobile_phone}',
        '${this.fax_number}',
        '${this.address}',
        '${this.city}',
        '${this.state_province}',
        '${this.zip_postal_code}',
        '${this.country_region}',
        '${this.web_page}',
        '${this.notes}',
        '${this.attachments}')
      `;
    // await db.query(sql);
    return await db.query(sql);
};

Employee.prototype.updateById = async function (id) {
    const sql = `
    UPDATE employees 
    SET
      company = '${this.company}' ,  
      last_name = '${this.last_name}' , 
      first_name = '${this.first_name}' , 
      email_address = '${this.email_address}' , 
      job_title = '${this.job_title}' , 
      business_phone = '${this.business_phone}' , 
      home_phone = '${this.home_phone}' , 
      mobile_phone = '${this.mobile_phone}' , 
      fax_number = '${this.fax_number}' , 
      address = '${this.address}' , 
      city = '${this.city}' , 
      state_province = '${this.state_province}' , 
      zip_postal_code = '${this.zip_postal_code}' , 
      country_region = '${this.country_region}' , 
      web_page = '${this.web_page}' , 
      notes = '${this.notes}' , 
      attachments = '${this.attachments}'
    WHERE id = ${id} 
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Employee;
