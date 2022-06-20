import React from "react";
import logo from "../logo.png";
// import logo from '../UI/Icone Edited.png'

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>
        Heal<span>Eye</span>
      </h1>
    </div>
  );
};

export default Logo;
