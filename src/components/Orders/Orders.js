import "./Orders.css";
import { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import postAPI from "../../api/postAPI";
import Order from "./Order";
export default function Orders() {
  const [value, setValue] = useState("1");
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    async function getOrdersByStatus() {
      try {
        const formData = { order_status_id: value };
        const result = await postAPI(
          "http://localhost:8080/api/v1/orders/order-by-status",
          formData
        );
        console.log(result.data);
        setOrders(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    getOrdersByStatus();
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="header">
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab value="1" label="Đang đặt" />
            <Tab value="2" label="Đang giao" />
            <Tab value="3" label="Hoàn thành" />
            <Tab value="4" label="Đã hủy" />
          </Tabs>
        </Box>
      </div>
      <div className="orders-list">
        {orders && (
          <div className="order-quantity">
            <strong>{orders["result"]}</strong> đơn hàng
          </div>
        )}
        {orders && <Order orders={orders["data"]} />}
        {/* <Order /> */}
      </div>
    </div>
  );
}
