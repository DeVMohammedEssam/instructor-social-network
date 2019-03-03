import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./sass/style.scss";
import AppRouter from "./routes/AppRouter";
import Dashboard from "./components/dashboard/Dashboard";
import PageNotFound from "./components/pages/PageNotFount";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/Profile";
import Channel from "./components/Channel";
import Course from "./components/pages/courses";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile/:id" component={Profile} />
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
        </Switch>
      </Router>
    );
  }
}

export default App;
