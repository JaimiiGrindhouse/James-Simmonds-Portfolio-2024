import React from "react";
import "./TopNavBar.scss";

function TopNavBar() {
  return (
    <nav className="top-navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        {/* Add more navigation items */}
      </ul>
    </nav>
  );
}

export default TopNavBar;
