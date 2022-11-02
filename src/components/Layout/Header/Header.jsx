import React from "react";
import "./Header.scss";

// Routing
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Shoesit
        </Link>
      </nav>
    </header>
  );
};

export default Header;
