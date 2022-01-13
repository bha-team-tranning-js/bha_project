const Product = require('../model/Product');
let multer = require('multer');

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
// let diskStorage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         // Định nghĩa nơi file upload sẽ được lưu lại
//         callback(null, './uploads/');
//     },
//     filename: (req, file, callback) => {
//         // ở đây các bạn có thể làm bất kỳ điều gì với cái file nhé.
//         // Mình ví dụ chỉ cho phép tải lên các loại ảnh png & jpg
//         let math = ['image/png', 'image/jpeg', 'image/jpg'];
//         if (math.indexOf(file.mimetype) === -1) {
//             let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
//             return callback(errorMess, null);
//         }
//         // Tên của file thì mình nối thêm một cái nhãn thời gian để đảm bảo không bị trùng.
//         let filename = `${Date.now()}-trungquandev-${file.originalname}`;
//         callback(null, filename);
//     },
// });

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Products suscess',
            result: products.length,
            data: products,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Products fail',
            error: { err },
        });
    }
};

const createProduct = async (req, res) => {
    const {
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id,
    } = req.body;
    const product = new Product(
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id
    );
    console.log(image);
    // let uploadFile = multer({ storage: diskStorage }).single('image');
    // uploadFile(req, res, (error) => {
    //     // Nếu có lỗi thì trả về lỗi cho client.
    //     // Ví dụ như upload một file không phải file ảnh theo như cấu hình của mình bên trên
    //     if (error) {
    //         conole.log(error);
    //     }
    //     console.log(req.body, req.files);
    //     console.log('up loaded...');
    //     // Không có lỗi thì lại render cái file ảnh về cho client.
    //     // Đồng thời file đã được lưu vào thư mục uploads
    // });
    try {
        await product.save();
        return res.status(201).json({
            success: true,
            message: 'created!',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'create fail!',
            error: { err },
        });
    }
};
const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: product,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id,
    } = req.body;
    const product = new Product(
        product_name,
        price,
        image,
        description,
        category_id,
        supplier_id
    );
    try {
        await product.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Product',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.deleteById(id);
        res.status(200).json({
            success: true,
            message: 'deleted !',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'delete fail',
            error: { err },
        });
    }
};
module.exports = {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
};
