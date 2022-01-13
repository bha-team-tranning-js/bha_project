import "./SideBar.css";
import { Link, useHistory } from "react-router-dom";
// import Inventory2Icon from '@mui/icons-material/Inventory2';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const SideBarEmployee = () => {
  const history = useHistory();
  return (
    <div className="SideBar">
      <button onClick={() => history.go(-1)} className="btn">
        <KeyboardReturnIcon />
      </button>
      <ul>
        <li>
          <Link to="/dashboard-employee">
            <HomeIcon />
          </Link>
        </li>
        {/* <li> 
          <Link to="/dashboard-employee">
            <Inventory2Icon />
          </Link>
        </li> */}
      </ul>
    </div>
  );
};
export default SideBarEmployee;
