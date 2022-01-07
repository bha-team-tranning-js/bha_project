import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardAdmin from "./screens/DashboardAdmin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard-admin" children={<DashboardAdmin />} />
          {/* <DashboardAdmin />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
