import React from "react";
import Sidebar from "../layout/Sidebar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Analysis from "./Analysis";
import Settings from "./Settings";
import PageNotFound from "../pages/PageNotFount";

const Dashboard = () => {
  return (
    <Router>
      <section className="dashboard">
        <Sidebar />
        <section className="dashboard__content">
          <Switch>
            <Route exact path="/dashboard/analysis" component={Analysis} />
            <Route exact path="/dashboard/settings" component={Settings} />
            <Route component={PageNotFound} />
          </Switch>
        </section>
      </section>
    </Router>
  );
};
export default Dashboard;
