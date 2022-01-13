import "./List.css";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAPI from "../../../api/getAPI";

// ProductsList.propTypes = {};

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let products = await getAPI("http://localhost:8080/api/v1/products");
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="header">
        <h2>Danh sách sản phẩm</h2>
        <Link to="/dashboard-admin/products/add" className="btn btn-success">
          Thêm
        </Link>
      </div>
      {products && (
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sản phẩm</th>
              <th> Giá</th>
              <th>Ảnh</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="active-row" key={product.product_id}>
                <td>{product.product_id}</td>
                <td>
                  <Link to={`/dashboard-admin/products/${product.product_id}`}>
                    {product.product_name}
                  </Link>
                </td>
                <td>{product.price}đ</td>
                <td>
                  <img src={product.image} alt={product.product_name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductsList;
