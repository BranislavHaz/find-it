import React, { useState } from "react";

import "./Header.css";

import logo from "../img/logo.png";
import logoHover from "../img/logo-hover.png";

const Header = () => {
  const [logoHeader, setLogoHeader] = useState(logo);

  const handlerMouseEnter = () => {
    setLogoHeader(logoHover);
  };

  const handlerMouseLeave = () => {
    setLogoHeader(logo);
  };

  return (
    <div className="header">
      <img
        className="logo"
        src={logoHeader}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
        alt="logo"
      />
    </div>
  );
};

export default Header;
