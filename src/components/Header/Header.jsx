import React from "react";
import { useLocation } from "react-router-dom";
import TopNavBar from "../TopNavBar/TopNavBar";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { FaReact, FaNodeJs, FaMapMarkedAlt } from "react-icons/fa";
import {
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

function Header() {
  const location = useLocation();

  // Determine the logo text based on the current pathname
  const getLogoText = () => {
    switch (location.pathname) {
      case "/home":
        return "HOME";
      case "/about":
        return "About";
      case "/contact":
        return "CONTACT";
      default:
        return "NEWS";
    }
  };

  return (
    <>
      <div className="top-header">
        <div className="header-content">
          <Logo />
          <div className="header-content__left">
            <div className="small-headline">James Simmonds Portfolio</div>
          </div>
        </div>
        <div className="header-content__right">
          <div className="icon">
            <FaReact size={30} color="#61DBFB" />
            <p className="icon-text">React</p>
          </div>
          <div className="icon">
            <DiJavascript1 size={30} color="#F0DB4F" />
            <p className="icon-text">JavaScript</p>
          </div>
          <div className="icon">
            <FaNodeJs size={30} color="#68A063" />
            <p className="icon-text">Node.js</p>
          </div>
          <div className="icon">
            <FaMapMarkedAlt size={30} color="#000000" />
            <p className="icon-text">Mapbox</p>
          </div>
          <div className="icon">
            <DiMongodb size={30} color="#4DB33D" />
            <p className="icon-text">MongoDB</p>
          </div>
          <div className="icon">
            <DiMysql size={30} color="#00758F" />
            <p className="icon-text">MySQL</p>
          </div>
          <div className="icon">
            <DiHtml5 size={30} color="#E44D26" />
            <p className="icon-text">HTML5</p>
          </div>
          <div className="icon">
            <DiCss3 size={30} color="#264DE4" />
            <p className="icon-text">CSS3</p>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="logo">{getLogoText()}</div>
      </header>
      <div className="bottom-header">
        <TopNavBar />
      </div>
    </>
  );
}

export default Header;
