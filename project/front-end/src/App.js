import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { DashboardAdmin, DashboardEmpoyee } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard-admin" children={<DashboardAdmin />} />
          <Route path="/dashboard-employee" children={<DashboardEmpoyee />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
