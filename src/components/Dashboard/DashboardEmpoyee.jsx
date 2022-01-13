import {
    BrowserRouter as Router,
    Route,
    Switch,
    useRouteMatch,
  } from "react-router-dom";
  
  import {
    SideBarEmployee,
    Orders,
  } from "../";
  
  function DashboardEmployee() {
    let { path } = useRouteMatch();
    return (
      <div className="Dashboard-admin">
        <Router>
          <SideBarEmployee />
          <div className="Content">
            <Switch>
              <Route exact path={path}>
                <Orders />
              </Route>
              {/* <Route exact path={`${path}/products`}>
                <ProductsList />
              </Route> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  
  export default DashboardEmployee;
  