import React from "react";
import "./Header.scss";

import Logo from "../Logo/Logo";

// Icon
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Logo />

        {/* <AiOutlineShoppingCart className="bag" fontSize={30} color="white" /> */}

        <div className="bag__container">
          <AiOutlineShoppingCart className="bag" fontSize={30} color="white" />
          <span className="items__number"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
