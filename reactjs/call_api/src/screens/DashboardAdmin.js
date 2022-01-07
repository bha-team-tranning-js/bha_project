import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import ScreenSideBar from "./SideBar";
import ScreenHome from "./Home";
import ScreenProductForm from "./Products/Form";
import ScreenProductsList from "./Products/List";

import ScreenWareHouse from "./WareHouse";
import ScreenCategories from "./Categories";
import ScreenEmployees from "./Employees";
import ScreenCustomers from "./Customers";

function DashboardAdmin() {
  let { path } = useRouteMatch();
  return (
    <div className="Dashboard-admin">
      <Router>
        <ScreenSideBar />
        <div className="Content">
          <Switch>
            <Route exact path={path}>
              <ScreenHome />
            </Route>
            <Route exact path={`${path}/products`}>
              <ScreenProductsList />
            </Route>
            <Route path={`${path}/products/add`}>
              <ScreenProductForm />
            </Route>
            <Route path={`${path}/products/:id`}>
              <ScreenProductForm />
            </Route>
            <Route path={`${path}/warehouse`}>
              <ScreenWareHouse />
            </Route>
            <Route path={`${path}/categories`}>
              <ScreenCategories />
            </Route>
            <Route path={`${path}/employees`}>
              <ScreenEmployees />
            </Route>
            <Route path={`${path}/custommers`}>
              <ScreenCustomers />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default DashboardAdmin;
