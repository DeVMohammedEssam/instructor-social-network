import React, { Component } from "react";
import Navbar from "../reusable/Navbar";
import BlueCurve from "../reusable/BlueCurveBackground";
import Input from "../reusable/InputField";
class SignUp extends Component {
  state = {
    slide: false
  };
  slideDown = e => {
    let formFirstPart = document.getElementById("firstFormDataSet");
    let formSecondPart = document.getElementById("secondFormDataSet");
    let topValFirst = 0;
    let topValSecond = 0;
    let first = setInterval(() => {
      if (topValFirst === -1000) {
        clearInterval(first);
        let second = setInterval(() => {
          topValSecond === 300
            ? clearInterval(second)
            : (formSecondPart.style.bottom = topValSecond + "px");
          topValSecond += 10;
        }, 5);
      } else {
        formFirstPart.style.top = topValFirst + "px";
        topValFirst -= 10;
      }
    }, 5);
  };
  slideUp = e => {
    let formFirstPart = document.getElementById("firstFormDataSet");
    let formSecondPart = document.getElementById("secondFormDataSet");
    let topValFirst = -1000;
    let topValSecond = 300;
    let first = setInterval(() => {
      let second = setInterval(() => {
        if (topValSecond === -1000) {
          clearInterval(second);
          if (topValFirst === 0) {
            clearInterval(first);
          } else {
            formFirstPart.style.top = topValFirst + "px";
            topValFirst += 10;
          }
        } else {
          formSecondPart.style.bottom = topValSecond + "px";
          topValSecond -= 10;
        }
      }, 5);
    }, 5);
  };
  render() {
    return (
      <React.Fragment>
        <Navbar login={false} />
        <div className="singUp">
          <BlueCurve />
          <div className="signIn__form-container">
            <form action="" className="signIn__form">
              <div
                id="firstFormDataSet"
                className={this.state.slide && "slideUpHide"}
              >
                <div className="py-3" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  iconclassName="user"
                  name="fullName"
                />
                <div className="py-3" />
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
                <div className="input-container">
                  <select name="gender" className="signUp__gender">
                    <option value="male">male</option>
                    <option value="Female">Female</option>
                  </select>
                  <i className="fa fa-mars" />
                </div>
                <div className="py-3" />
                <Input
                  type="date"
                  placeholder="Age"
                  iconclassName="calendar"
                  name="age"
                />

                <div className="py-3" />
                <div className="input-container">
                  <input
                    placeholder="university"
                    className="main-input"
                    list="university"
                    name="university"
                  />
                  <datalist id="university">
                    <option value="Helwan" />
                    <option value="Cairo" />
                    <option value="Ain Shams" />
                    <option value="ITI" />
                    <option value="El shrook" />
                  </datalist>
                  <i className="fa fa-university" />
                  <div className="py-3" />
                  <div className="next-btn__container">
                    <button
                      type="button"
                      onClick={this.slideDown}
                      className="btn btn--main  next-btn float-right"
                    >
                      <i className="fa fa-caret-down fa-lg" />
                    </button>
                  </div>
                </div>
              </div>
              <div id="secondFormDataSet">
                <div className="next-btn__container">
                  <button
                    type="button"
                    onClick={this.slideUp}
                    className="btn btn--main  next-btn float-right btn--slideUp"
                  >
                    <i className="fa fa-caret-up fa-lg" />
                  </button>
                </div>
                <Input
                  type="phone"
                  placeholder="phone number"
                  name="phone"
                  iconclassName="phone"
                />
                <div className="py-3" />
                <div className="input-container">
                  <select name="accountType" className="signUp__gender">
                    <option value="student">Student</option>
                    <option value="Instructor">Instructor</option>
                  </select>
                  <i className="fa fa-pencil" />
                </div>

                <div className="py-3" />
                <button
                  onClick={() => {
                    this.props.history.push("/login");
                  }}
                  type="submit"
                  className="btn btn--main signUp__btn"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
