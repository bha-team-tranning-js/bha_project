import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import {
  SideBarAdmin,
  Home,
  ProductForm,
  ProductsList,
  WareHouse,
  Categories,
  ManageAccounts,
  Employees,
  Customers,
} from "../";

function DashboardAdmin() {
  let { path } = useRouteMatch();
  return (
    <div className="Dashboard-admin">
      <Router>
        <SideBarAdmin />
        <div className="Content">
          <Switch>
            <Route exact path={path}>
              <Home />
            </Route>
            <Route exact path={`${path}/products`}>
              <ProductsList />
            </Route>
            <Route path={`${path}/products/add`}>
              <ProductForm />
            </Route>
            <Route path={`${path}/products/:id`}>
              <ProductForm />
            </Route>
            <Route path={`${path}/warehouse`}>
              <WareHouse />
            </Route>
            <Route path={`${path}/categories`}>
              <Categories />
            </Route>
            <Route path={`${path}/manage-accounts`}>
              <ManageAccounts />
            </Route>
            <Route path={`${path}/employees`}>
              <Employees />
            </Route>
            <Route path={`${path}/customers`}>
              <Customers />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default DashboardAdmin;
