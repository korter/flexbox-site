/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const linksHandler = () => {
    setDisplay(!display);
    console.log(display);
  };

  const logo = <FontAwesomeIcon icon={faPlay} />;
  const hamburger = <FontAwesomeIcon icon={faBars} />;
  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="nav-logo">{logo}</div>
        <div className="nav-btn" onClick={linksHandler}>
          {hamburger}
        </div>
      </div>
      <ul className={display ? "show-links" : "nav-links"}>
        <li>
          <a href="#" className="nav-link">
            Home{display}
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Numbers
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
