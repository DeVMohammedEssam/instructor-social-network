import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import Profile from "../components/Profile";
import Channel from "../components/Channel";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import Course from "../components/pages/courses";
import PageNotFound from "../components/pages/PageNotFount";
import Dashboard from "../components/dashboard/Dashboard";

class AppRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/instructor" render={() => <h1>Profile</h1>} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/channel/:id" component={Channel} />
        <Route path="/course/:id" component={Course} />

        <Route
          path="/categories"
          render={() => (
            <div
              style={{ position: "fixed", top: "0", bottom: "0" }}
              className="d-flex justify-content-center w-100 align-items-center text-warning "
            >
              <h2 className="display-4">page is under construction!</h2>
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </React.Fragment>
    );
  }
}

export default AppRouter;
