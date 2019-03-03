import React from "react";
import Input from "../reusable/InputField";
import BlueCurve from "../reusable/BlueCurveBackground";
import Navbar from "../reusable/Navbar";

const SignIn = props => {
  return (
    <React.Fragment>
      <Navbar login={true} />
      <div className="signIn">
        <BlueCurve />
        <div className="signIn__form-container">
          <form action="" className="signIn__form">
            <Input
              type="text"
              placeholder="Email Address"
              iconclassName="envelope"
              name="email"
            />
            <div className="py-3" />
            <Input
              type="password"
              placeholder="password"
              iconclassName="lock"
              name="password"
            />
            <div className="py-3" />

            <button
              onClick={() => {
                props.history.push("/#logged");
              }}
              className="btn btn--main signIn-btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="signIn__footer text-muted d-flex ">
        <span className="copy">copyright &copy;bbTeam 2018</span>
        <ul className="list-unstyled nav-list d-flex">
          <li className="nav-item">
            <a href="" className="signIn__footer__link">
              Privacy
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="signIn__footer__link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="signIn__footer__link">
              Support
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
