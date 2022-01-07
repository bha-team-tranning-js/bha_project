-- CREATE TABLE

CREATE DATABASE northwind_bha;
USE northwind_bha;

-- Bảng roles
CREATE TABLE roles (
role_id INTEGER AUTO_INCREMENT,
role_name VARCHAR(25),
role_key VARCHAR(5),
PRIMARY KEY(role_id)
);

-- Bảng accounts
CREATE TABLE accounts (
    account_id INTEGER AUTO_INCREMENT, 
    username VARCHAR(25) ,
    password VARCHAR(25),
    role_id INTEGER,
    PRIMARY KEY(account_id),
    FOREIGN KEY (role_id)
    REFERENCES roles (role_id)
);

-- Bảng shippers
CREATE TABLE shippers (
    shipper_id INTEGER AUTO_INCREMENT, 
    full_name VARCHAR(25) UNIQUE ,
    mobie_phone VARCHAR(25),
    PRIMARY KEY(shipper_id)
);

-- Bảng employees
CREATE TABLE employees (
    employee_id INTEGER AUTO_INCREMENT, 
    full_name VARCHAR(50),
    email_address VARCHAR(50),
    mobie_phone VARCHAR(25),
    birth_day DATE,
    gender BIT,
    address VARCHAR(255),
    account_id INTEGER,
    PRIMARY KEY(employee_id),
    FOREIGN KEY (account_id)
    REFERENCES accounts (account_id)
);

-- Bảng customers
CREATE TABLE customers (
    customer_id INTEGER AUTO_INCREMENT, 
    full_name VARCHAR(50),
    email_address VARCHAR(50),
    mobie_phone VARCHAR(25),
    birth_day DATE,
    gender BIT,
    address VARCHAR(255),
    account_id INTEGER,
    PRIMARY KEY(customer_id),
    FOREIGN KEY (account_id)
    REFERENCES accounts (account_id)
);

-- Bảng suppliers 
CREATE TABLE suppliers (
    supplier_id INTEGER AUTO_INCREMENT, 
    supplier_name VARCHAR(50),
    email_address VARCHAR(50),
    bussiness_phone VARCHAR(25),
    address VARCHAR(255),
    PRIMARY KEY(supplier_id)
);

-- Bảng  order_status
CREATE TABLE order_status (
    order_status_id INTEGER AUTO_INCREMENT, 
    status_name VARCHAR(25),
    status_key VARCHAR(5),
    PRIMARY KEY(order_status_id)
);

-- Bảng  categories 
CREATE TABLE categories (
    category_id INTEGER AUTO_INCREMENT, 
    category_name VARCHAR(25),
    PRIMARY KEY(category_id)
);


-- Bảng  products 
CREATE TABLE products (
    product_id INTEGER AUTO_INCREMENT, 
    product_name VARCHAR(255),
    description TEXT,
    price DECIMAL(8,2),
    image VARCHAR(65535),
    category_id INTEGER,
    supplier_id INTEGER,
    PRIMARY KEY(product_id),
    FOREIGN KEY (category_id) REFERENCES categories (category_id),
	FOREIGN KEY (supplier_id) REFERENCES suppliers (supplier_id)
);

-- Bảng  product_details
CREATE TABLE product_details(
    id INTEGER AUTO_INCREMENT,
    product_id INTEGER, 
    size_number INTEGER,
    quanity INTEGER,   
    PRIMARY KEY( id),
    FOREIGN KEY (product_id) REFERENCES products (product_id)
);

-- Bảng orders 
CREATE TABLE orders (
    order_id INTEGER AUTO_INCREMENT, 
   order_date DATE,
    ship_address VARCHAR(255),
    shipping_fee DECIMAL(8,2),
    total_price DECIMAL(10,2),
    note TEXT,
    shiped_date DATE,
    order_status_id INTEGER,
    customer_id INTEGER,
    shipper_id INTEGER,
    employee_id INTEGER,
    PRIMARY KEY(order_id),
    FOREIGN KEY (order_status_id) REFERENCES order_status (order_status_id),
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
    FOREIGN KEY (shipper_id) REFERENCES shippers (shipper_id),
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id)
);

-- Bảng order_details
CREATE TABLE order_details (
    product_id INTEGER ,
    order_id INTEGER,
    quantity INTEGER,
    size_number VARCHAR(25),
    unit_price DECIMAL (10,2),
    PRIMARY KEY(product_id,order_id,size_number),
    FOREIGN KEY (order_id) REFERENCES orders (order_id),
	FOREIGN KEY (product_id) REFERENCES products (product_id)
);







