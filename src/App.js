import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/searchPages/SearchPage.js";
import DashboardLayout from "./components/layout/DashboardLayout"; 
import './app.css';

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route path="/" exact>
            <SearchPage />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
};

export default App;
