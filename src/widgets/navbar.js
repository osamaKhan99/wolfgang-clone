import React, { useState } from "react";
import Close  from "@material-ui/icons/Close";
import Menu from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
//import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <NavLink to="/">
            <img alt="" className="logo" src="https://thewolfgang.club/static/img/logo.png" />
          </NavLink>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/gang">WOLF GANG</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/puppies">MY PUPPIES</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/gallery">GALLERY</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/gallery">Join Our Discord</NavLink>
          </li>
          <li className="connect-btn-mob">
          <Button>Disconnect</Button>
          </li>
        </ul>
        <div className="connect-btn">
            <Button>Disconnect</Button>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <Close className="menu-icon" />
        ) : (
          <Menu className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;