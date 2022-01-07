import "./Form.css";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import getAPI from "../../../api/getAPI";
import postAPI from "../../../api/postAPI";
import deleteAPI from "../../../api/deleteAPI";
import updateAPI from "../../../api/updateAPI";
const Form = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [image, setImage] = useState("");
  const [isFullData, setIsFullData] = useState(true);

  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [isUpdateForm, setIsUpdateForm] = useState(false);

  const history = useHistory();
  let { id } = useParams();

  //revoke ảnh lưu tạm trong local
  // useEffect(() => {
  //   // return () => {
  //   //   image && URL.revokeObjectURL(image.preview);
  //   // };
  // }, [image]);

  useEffect(async () => {
    if (id) {
      setIsUpdateForm(true);
      const product = await getAPI(
        `http://localhost:8080/api/v1/products/${id}`
      );
      setProductName(product[0].product_name);
      setDescription(product[0].description);
      setPrice(product[0].price);
      setCategory(product[0].category_id);
      setSupplier(product[0].supplier_id);
      setImage(product[0].image);
      console.log(image);
    }
    const categories = await getAPI("http://localhost:8080/api/v1/categories");
    setCategories(categories);
    const suppliers = await getAPI("http://localhost:8080/api/v1/suppliers");
    setSuppliers(suppliers);
  }, []);

  const handlePreviewImages = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    // setImage(file);
    console.log(file);
    setImage(file.preview);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setIsFullData(true);
    if (productName && description && price && category && supplier && image) {
      const data = {
        product_name: productName,
        description,
        price,
        image: image,
        category_id: category,
        supplier_id: supplier,
      };
      // let result = {};
      try {
        const result = await postAPI(
          "http://localhost:8080/api/v1/products",
          data
        );
        console.log(result);
      } catch (err) {
        console.log(err);
      } finally {
        history.push({
          pathname: "/dashboard-admin/products",
          // state: result.data.success, //gọi tới cái này ntn ?????
        });
      }
      return;
    }
    setIsFullData(false);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsFullData(true);
    if (productName && description && price && category && supplier && image) {
      const data = {
        product_name: productName,
        description,
        price,
        image: image,
        category_id: category,
        supplier_id: supplier,
      };
      await updateAPI(`http://localhost:8080/api/v1/products/${id}`, data);
      console.log("updated!");
      return;
    }
    setIsFullData(false);
  };
  const handleDelete = async (e) => {
    e.preventDefault();

    await deleteAPI(`http://localhost:8080/api/v1/products/${id}`);
    history.push({ pathname: "/dashboard-admin/products" });
    console.log("deleted!");
  };
  return (
    <div className="Product-Form">
      <div className="header">
        <h2>Thêm sản phẩm mới</h2>
      </div>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="product-name">Tên sản phẩm</label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            id="product-name"
            name="product-name"
            required
            value={productName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Mô tả</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            required
            value={description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Giá</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="price"
            name="price"
            required
            value={price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category_id">Loại</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">None</option>
            {categories &&
              categories.map((el) => (
                <option value={el.category_id}>{el.category_name}</option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="supplier_id">Nhà cung cấp</label>
          <select
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          >
            <option value="">None</option>
            {suppliers &&
              suppliers.map((el) => (
                <option value={el.supplier_id}>{el.supplier_name}</option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Hình ảnh</label>
          <input
            type="file"
            // multiple
            name="product-images"
            onChange={handlePreviewImages}
          />
          {image && <img src={image} alt="" />}
        </div>
        {isUpdateForm || (
          <button
            onClick={(e) => handleCreate(e)}
            type="submit"
            className="btn btn-success"
          >
            Submit
          </button>
        )}
        {isUpdateForm && (
          <div>
            <button
              onClick={(e) => handleUpdate(e)}
              type="submit"
              className="btn btn-success"
            >
              Update
            </button>
            <button
              onClick={(e) => handleDelete(e)}
              type="submit"
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        )}
        {isFullData || <span>Cần cung cấp đầy đủ dữ liệu !</span>}
      </form>
    </div>
  );
};
export default Form;
