import "./Home.css";
// import moment from "moment"; // trích xuất ngày theo định dạng bạn muốn
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import getAPI from "../../api/getAPI";
const Home = () => {
  const [orderStatus, setOrderStatus] = useState([]);
  const [productSold, setProductSold] = useState([]);

  useEffect(() => {
    // get chart/order-status
    async function handleOrderStatus() {
      let orderStatus = await getAPI(
        "http://localhost:8080/api/v1/chart/order-status"
      );
      console.log(orderStatus);
      let orderStatusData = orderStatus.map((data) => data.count);
      console.log(orderStatusData);
      setOrderStatus(orderStatusData);
    }

    // get chart/product-sold
    async function handleProductSold() {
      let productSold = await getAPI(
        "http://localhost:8080/api/v1/chart/product-sold"
      );
      console.log(productSold);
      setProductSold(productSold);
    }
    handleOrderStatus();
    handleProductSold();
  }, []);

  const order_state = {
    options: {
      labels: ["Đặt hàng", "Đang giao hàng", "Hoàn thành", "Đã hủy"],
      colors: ["#65B6EB", "#FEB019", "#00E200", "#EB7F97"],
      // stroke: {
      //   show: false,
      //   width: 0,
      // },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                show: true,
                fontSize: "50px",
                fontWeight: 400,
                color: "#000",
                offsetY: 0,
              },
              total: {
                show: true,
                showAlways: true,
                label: "",
              },
            },
          },
        },
      },
      // chart: {
      //   type: "donut",
      // },
    },
    series: [],
  };
  // 1 LỖI : khi 1 trong order_status_id không có trong bảng orders thì data sai
  order_state.series = orderStatus; // set dữ liệu thực từ api vào

  const products_state = {
    options: {
      chart: {
        id: "products_state",
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5],
      },
    },
    series: [
      {
        name: "Đã bán",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  };
  //1. xử lí value null cuối
  //2. xử lí hiển thi time đúng
  products_state.series[0].data = productSold.map((data) => data.count);
  products_state.options.xaxis.categories = productSold.map(
    (data) => data.shipped_date
    // moment.utc(`${data.shiped_date}`).format("DD/MM/YYYY") //đổi định dạng ISO -> mong muốn
  );
  return (
    <>
      <div className="header">
        <h2>Thống kê</h2>
      </div>
      <div className="chart">
        <div className="order-chart">
          <div>
            <Chart
              options={order_state.options}
              series={order_state.series}
              type="donut"
              width="450"
            />
          </div>
        </div>
        <div className="product-chart">
          <Chart
            options={products_state.options}
            series={products_state.series}
            type="line"
            width="100%"
            height={500}
          />
          <p class="chart-name">Số sản phầm đã bán theo ngày</p>
        </div>
      </div>
    </>
  );
};
export default Home;
