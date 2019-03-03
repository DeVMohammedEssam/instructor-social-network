import React, { Component } from "react";

export default class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <div className="container">
          <div className="setings-options">
            <div className="container">
              <ul className="list-unstyled row">
                <li className="active">General</li>
              </ul>

              <div className="line" />
            </div>
          </div>
        </div>

        <div className="form">
          <div className="container">
            <div className="form-row">
              <div className="form-group col-6">
                <label for="First-name11">First name</label>
                <input type="text" className="form-control" id="First-name11" />
              </div>
              <div className="form-group col-6">
                <label for="last-name11">Last name</label>
                <input type="text" className="form-control" id="last-name11" />
              </div>
            </div>
            <div className="form-group">
              <label for="email-address">Email addres</label>
              <h6>
                {" "}
                This contact will be shown to others publicly, so choose it
                carefully.
              </h6>

              <input type="text" className="form-control" id="email-address" />
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <label for="Phone11">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="Phone11"
                  placeholder="( _ _ _ ) _ _ _-_ _ _"
                />
              </div>
              <div className="form-group col-6">
                <label for="Birthday11">Birthday</label>
                <input
                  type="text"
                  className="form-control datepicker"
                  id="Birthday11"
                />
              </div>
            </div>
            <div className="line" />
          </div>
        </div>
        <div className="password-form">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label for="password11">Password</label>
                  <input
                    type="Password"
                    className="form-control"
                    id="password11"
                  />
                </div>
                <div className="form-group">
                  <label for="New-password11">New password</label>
                  <input
                    type="Password"
                    className="form-control"
                    id="New-password11"
                  />
                </div>
                <div className="form-group">
                  <label for="Confirm-new-password11">
                    Confirm new password
                  </label>
                  <input
                    type="Password"
                    className="form-control"
                    id="Confirm-new-password11"
                  />
                </div>
              </div>
              <div className="col-6 Password-requirements">
                <h6>Password requirements</h6>
                <p>
                  To create a new password, you have to meet all of the
                  following requirements:
                </p>
                <ul>
                  <li>Minimum 8 character</li>
                  <li>At least one special character</li>
                  <li>At least one number</li>
                  <li>Can’t be the same as a previous password</li>
                </ul>
              </div>
              <div className="container">
                <button type="button" className="btn btn-primary">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
