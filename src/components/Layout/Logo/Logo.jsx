import React from "react";
import "./Logo.scss";

// Routing
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="nav__logo">
      <span>S</span>hoesit
    </Link>
  );
};

export default Logo;
