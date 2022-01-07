-- INSERT DATA

USE  northwind_bha;

-- Bảng roles
INSERT INTO roles (role_name,role_key)
value ("admin","AD"),("Nhân viên","NV"),  ("Khách hàng","KH");


-- Bảng accounts 
INSERT  INTO accounts 
	(username, password, role_id
    )
value 
	("nguyenvanhiep","123456",1),
	("truongthanhbinh","123456",2),
	("buiphuan","123456",3),
	("minhphuong","123456",3),
	("angdinh","123456",3),
	("ngochuy","123456",3),
	("thinga","123456",2),
	("huynhvy","123456",2),
	("lamdoon","123456",2);


-- Bảng customers
INSERT INTO `customers`
	(
        `full_name`, 
        `email_address`, 
        `mobie_phone`, 
        `birth_day`, 
        `gender`, 
        `address`, 
        `account_id`
	) 
VALUES 
   ('Bùi Phú Ân','an@gmail.com','0111111111','2000-11-01',0,'01 Cao Thắng, Hải Châu, Đà Nẵng',3),
   ('Nguyễn Minh Phương','phuong@gmail.com','0222222222','2000-01-01',0,'02 Cao Thắng, Hải Châu, Đà Nẵng',4),
   ('Bùi Nguyễn Ngọc Huy','huy@gmail.com','0333333333','2000-01-01',0,'03 Cao Thắng, Hải Châu, Đà Nẵng',6),
   ('Nguyễn Đăng Định','dinh@gmail.com','0444444444','2000-01-01',0,'04 Cao Thắng, Hải Châu, Đà Nẵng',5);


-- Bảng employees
INSERT INTO `employees`
	( 
        `full_name`, 
        `email_address`, 
        `mobie_phone`, 
        `birth_day`, 
        `gender`, 
        `address`, 
        `account_id`
    ) 
VALUES 
('Lê Thị Nga','nga@gmail,com','0211111111','2000-01-01',1,'Gia Lai',7),
('Trương Thanh Bình','binh@gmail,com','0222222222','2000-01-01',0,'Quảng Bình',2),
('Huỳnh Vy','vy@gmail,com','0233333333','2000-01-01',1,'Quảng Nam',8),
('Lâm Doon','doon@gmail,com','0244444444','2000-01-01',1,'Khánh Hòa',9);


-- Bảng categories
INSERT INTO `categories`
	(
        `category_name`
    ) 
VALUES ('VANS'),('NIKE'),('ADIDAS');


-- Bảng order_status
INSERT INTO `order_status`
    (
        `status_name`, 
        `status_key`
    ) 
VALUES ('Chờ xác nhận','CXN'),
('Đã xác nhận','DXN'),
("Đã giao hàng","DGH");


-- Bảng shippers
INSERT INTO `shippers`
(
    `full_name`, 
    `mobie_phone`
) 
VALUES ('Nguyễn Văn A','0311111111'), 
('Nguyễn Văn B','0322222222');




-- Bảng suppliers
INSERT INTO `suppliers`
    (
        `supplier_name`, 
        `email_address`, 
        `bussiness_phone`, 
        `address`
    ) 
VALUES ('Vans Store Việt Nam','vans.store.vn@gmail.com','0411111111','Hà Nội'),
('Adidas Store Việt Nam','adidas.store.vn@gmail.com','0422222222','Hồ Chí Minh'),
('Nike Store Việt Nam','noke.store.vn@gmail.com','0433333333','Hải Phòng');


-- Bảng orders
INSERT INTO `orders`
    (
        `order_date`, 
        `ship_address`, 
        `shipping_fee`, 
        `total_price`,
        `note`, 
        `shiped_date`, 
        `order_status_id`, 
        `customer_id`, 
        `shipper_id`, 
        `employee_id`
    ) 
VALUES ('2021/12/25','01 Cao Thắng, Hải Châu, Đà Nẵng',5000,500000,'note 01','2021/12/30',1,14,1,5),
('2021/12/25','01 Cao Thắng, Hải Châu, Đà Nẵng',5000,700000,'note 01','2021/12/29',1,14,2,7),
('2021/12/25','01 Cao Thắng, Hải Châu, Đà Nẵng',5000,800000,'note 01','2021/12/28',2,15,2,8);



-- product details --

INSERT INTO `product_details`
    (
        `product_id`, 
        `size_number`, 
        `quanity`
    ) 
VALUES (1,40,20),(1,39,20),(1,38,20),(1,41,20),(1,42,20),(1,43,20), (1,37,20);

-- Bảng products
INSERT INTO `products`
    (
        `product_name`, 
        `description`, 
        `price`, 
        `image`, 
        `category_id`, 
        `supplier_id`
    ) 
VALUES (
    'Giày Thể Thao XSPORT Van.s Old Skool Phản Quang SF',
    'Description 1',400000,
    'https://giayxshop.vn/wp-content/uploads/2019/05/MG_6729-600x600.jpg',
    1,
    1
),
(
    'Gìay thể thao XSPORT Nike Jordan 1 Low REP',
    'Chất liệu cao cấp, bền đẹp theo thời gian. Thiết kế thời trang. Kiểu dáng phong cách. Độ bền cao. Dễ phối đồ.',500000,
    'https://giayxshop.vn/wp-content/uploads/2021/10/z2859325587878_1763c07565663e9e0f8907d87c74020c-scaled.jpg',
    1,
    1
),
(
    'Nike Zoom T67 SF',
    'Sản phẩm luôn được XSHOP kiểm định, đánh giá với chất lượng cao nhất trước khi đến tay khách hàng!',360.000,
    'https://giayxshop.vn/wp-content/uploads/2021/12/z2989995824019_a188f4ce41e27597c24fae62d1a77c26-scaled.jpg',
    1,
    1
),
(
    'Nike Jordan 1 High Đen Mận REP',
    'Description 1',300000,
    'https://giayxshop.vn/wp-content/uploads/2021/12/z3050705232089_44ea8c40d41cc917ac0710ff43aaed34-scaled.jpg',
    3,
    2
),
(
    'Giày Thể Thao XSPORT Adi.das 350 V2 Static Full Phản Quang REP',
    'Chất liệu cao cấp, bền đẹp theo thời gian. Thiết kế thời trang. Kiểu dáng phong cách. Độ bền cao. Dễ phối đồ',700000,
    'https://giayxshop.vn/wp-content/uploads/2019/07/adidas-yeezy-350-v2-Static-compressed-300x300.jpg',
    2,
    3
);


-- Bảng order_details
INSERT INTO `order_details`
    (
        `product_id`, 
		`order_id`, 
        `quantity`, 
        `size_number`, 
        `unit_price`
    ) 
VALUES (2,1,1,36,200000),
(2,1,5,41,200000) 


