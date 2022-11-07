import React, { useState } from "react";
import "./Header.scss";

import Logo from "../Logo/Logo";

// Icon
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  // Cart state
  const [openCart, setOpenCart] = useState(false);

  // Cart handler
  const openCartHandler = () => {
    setOpenCart(true);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Logo />

        <div className="bag__container">
          <AiOutlineShoppingCart
            onClick={openCartHandler}
            className="bag"
            fontSize={30}
            color="white"
          />
          <span className="items__number"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
