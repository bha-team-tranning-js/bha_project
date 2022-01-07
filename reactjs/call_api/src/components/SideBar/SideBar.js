import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { SiSimpleanalytics } from "react-icons/si";
import { FaProductHunt, FaWarehouse } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { FcManager } from "react-icons/fc";
import { BiCategory } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";

import "./SideBar.css";
const SideBar = () => {
  let history = useHistory();
  // let { url } = useRouteMatch();
  return (
    <div className="SideBar">
      <div className="return">
        <button
          className="btn"
          onClick={() => {
            history.go(-1);
          }}
        >
          {<BsArrowReturnLeft />}
        </button>
      </div>
      <ul>
        <Link to="/dashboard-admin">
          <li>{<SiSimpleanalytics />}</li>
        </Link>
        <Link to="/dashboard-admin/products">
          <li>{<FaProductHunt />}</li>
        </Link>
        <Link to="/dashboard-admin/warehouse">
          <li>{<FaWarehouse />}</li>
        </Link>
        <Link to="/dashboard-admin/categories">
          <li>{<BiCategory />}</li>
        </Link>
        <Link to="/dashboard-admin/employees">
          <li>{<FcManager />}</li>
        </Link>
        <Link to="/dashboard-admin/custommers">
          <li>{<GrUserManager />}</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
