import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Navigation.css";

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function Navigation() {
  console.debug("Navigation");

  const side_nav_bar = (
    <div>
      <NavLink className="nav-link" to="/companies">
        Meet Madelyn
      </NavLink>
      <NavLink className="nav-link" to="/jobs">
        Projects
      </NavLink>
      <NavLink className="nav-link" to="/profile">
        Contact
      </NavLink>
      <Link className="nav-link" to="/">
        Resume
      </Link>
    </div>

  );


  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/madelynromberg">
          Madelyn Romberg
        </Link>
        {side_nav_bar}
      </div>
    </nav>
  );
}

export default Navigation;
