import React from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = props => {
  console.log("sidebard ", props);
  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <img
          className="sidebar__header__image"
          src="/images/navbar/ISNlogo.svg"
          width="40"
          height="40"
          alt=""
        />

        <div className="sidebar__header__title" />
      </div>
      <div className="sidebar__body">
        <ul className="sidebar__body__list">
          <li>
            <NavLink
              className="sidebar__body__list__nav"
              exact
              activeClassName="active-link"
              to={"/dashboard/analysis"}
            >
              <i className="fas fa-chart-bar" /> analysis
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="sidebar__body__list__nav"
              activeClassName="active-link"
              to={"/dashboard/settings"}
            >
              <i className="fas fa-cog" /> settings
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Sidebar;
