import "./SideBar.css";
import { Link, useHistory } from "react-router-dom";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CategoryIcon from "@mui/icons-material/Category";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
const SideBarAdmin = () => {
  const history = useHistory();
  return (
    <div className="SideBar">
      <button onClick={() => history.go(-1)} className="btn">
        <KeyboardReturnIcon />
      </button>
      <ul>
        <li>
          <Link to="/dashboard-admin">
            <AssessmentIcon />
          </Link>
        </li>
        <li>
          <Link to="/dashboard-admin/products">
            <ProductionQuantityLimitsIcon />
          </Link>
        </li>
        <li>
          <Link to="/dashboard-admin/warehouse">
            <WarehouseIcon />
          </Link>
        </li>
        <li>
          <Link to="/dashboard-admin/categories">
            <CategoryIcon />
          </Link>
        </li>
        <li>
          <Link to="/dashboard-admin/manage-accounts">
            <ManageAccountsIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBarAdmin;
