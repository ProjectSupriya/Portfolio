import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <h1 className="mylogo">SUPRI.YA</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
            <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
            
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
