import DashboardAdmin from "./Dashboard/DashboardAdmin";
import SideBarAdmin from "./SideBar/SideBarAdmin";
import DashboardEmpoyee from "./Dashboard/DashboardEmpoyee";
import SideBarEmployee from "./SideBar/SideBarEmpoyee";
import Orders from "./Orders/Orders";
import Home from "./Home/Home";
import ProductsList from "./Products/List/List";
import ProductForm from "./Products/Form/Form";
import WareHouse from "./WareHouse/WareHouse";
import Categories from "./Categories/Categories";
import Employees from "./Employees/Employees";
import Customers from "./Customers/Customers";

//dialogs
import OrderProductsDialog from "./Dialogs/OrderProducts";
import OrderFormDialog from "./Dialogs/OrderForm";

// quản lí tài khoản cho ng dùng và nhân viên
import { Link } from "react-router-dom";
const ManageAccounts = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard-admin/employees">Empoyees</Link>
        </li>
        <li>
          <Link to="/dashboard-admin/customers">Customers</Link>
        </li>
      </ul>
    </div>
  );
};

export {
  DashboardAdmin,
  SideBarAdmin,
  DashboardEmpoyee,
  SideBarEmployee,
  Orders,
  Home,
  ProductsList,
  ProductForm,
  WareHouse,
  Categories,
  ManageAccounts,
  Employees,
  Customers,
  OrderProductsDialog,
  OrderFormDialog,
};
