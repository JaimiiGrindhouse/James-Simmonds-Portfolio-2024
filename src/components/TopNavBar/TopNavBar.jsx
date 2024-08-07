import React from "react";
import "./TopNavBar.scss";
import { Link } from "react-router-dom";

function TopNavBar() {
  return (
    <nav className="top-navbar">
      <ul>
        <li>
          <Link Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link Link to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link Link to="/projects">
            Projects
          </Link>
        </li>
        {/* Add more navigation items */}
      </ul>
    </nav>
  );
}

export default TopNavBar;
