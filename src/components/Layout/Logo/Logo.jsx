import React from "react";
import "./Logo.scss";

// Typing effect
import TypeIt from "typeit-react";

// Routing
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="nav__logo">
      <TypeIt
        options={{
          afterComplete: function (instance) {
            instance.destroy();
          },
        }}
      >
        <span>S</span>hoesit
      </TypeIt>
    </Link>
  );
};

export default Logo;
