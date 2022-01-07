// import "./Form.css";
// import { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import GetAPI from "../../../api/GetAPI";
// import postAPI from "../../../api/postAPI";
// const Form = () => {
//   const [productName, setProductName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [supplier, setSupplier] = useState("");
//   const [image, setImage] = useState("");
//   const [isFullData, setIsFullData] = useState(true);

//   const { data: categories } = GetAPI(
//     "http://localhost:8080/api/v1/categories"
//   );
//   const { data: suppliers } = GetAPI("http://localhost:8080/api/v1/suppliers");

//   const history = useHistory();

//   useEffect(() => {
//     // return () => {
//     //   image && URL.revokeObjectURL(image.preview);
//     // };
//   }, [image]);

//   const handlePreviewImages = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);
//     setImage(file);
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     setIsFullData(true);
//     console.log(productName);
//     console.log(description);
//     console.log(price);
//     console.log(category);
//     console.log(supplier);
//     console.log(image);
//     if (productName && description && price && category && suppliers && image) {
//       const data = {
//         product_name: productName,
//         description,
//         price,
//         image: image.preview,
//         category_id: category,
//         supplier_id: supplier,
//       };
//       // let result = {};
//       try {
//         const result = await postAPI(
//           "http://localhost:8080/api/v1/products",
//           data
//         );
//         console.log(result);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         history.push({
//           pathname: "/dashboard-admin/products",
//           // state: result.data.success, //gọi tới cái này ntn ?????
//         });
//       }
//       return;
//     }
//     setIsFullData(false);
//   };
//   return (
//     <div className="Product-Form">
//       <div className="header">
//         <h2>Thêm sản phẩm mới</h2>
//       </div>
//       <form method="POST">
//         <div className="form-group">
//           <label htmlFor="product-name">Tên sản phẩm</label>
//           <input
//             onChange={(e) => setProductName(e.target.value)}
//             type="text"
//             id="product-name"
//             name="product-name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Mô tả</label>
//           <textarea
//             onChange={(e) => setDescription(e.target.value)}
//             id="description"
//             name="description"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Giá</label>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             type="text"
//             id="price"
//             name="price"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="category_id">Brand</label>
//           <select onChange={(e) => setCategory(e.target.value)}>
//             <option value="">None</option>
//             {categories &&
//               categories.map((el) => (
//                 <option value={el.category_id}>{el.category_name}</option>
//               ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="supplier_id">Nhà cung cấp</label>
//           <select required onChange={(e) => setSupplier(e.target.value)}>
//             <option value="">None</option>
//             {suppliers &&
//               suppliers.map((el) => (
//                 <option value={el.supplier_id}>{el.supplier_name}</option>
//               ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="image">Hình ảnh</label>
//           <input
//             type="file"
//             // multiple
//             name="product-images"
//             onChange={handlePreviewImages}
//           />
//           {image && <img src={image.preview} alt="" />}
//         </div>
//         <button
//           onClick={(e) => handleCreate(e)}
//           type="submit"
//           className="btn btn-success"
//         >
//           Submit
//         </button>
//         {isFullData || <span>Cần cung cấp đầy đủ dữ liệu !</span>}
//       </form>
//     </div>
//   );
// };
// export default Form;
