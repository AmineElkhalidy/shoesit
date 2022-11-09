import React from "react";
import "./Shoe.scss";

// Shoes
import Item from "../../assets/images/img.png";

const Shoe = () => {
  return (
    <div class="card">
      <img src={Item} alt="Shoes" class="card__img" />

      <div class="card__content">
        <div class="card__data">
          <h1 class="card__title">Nike Air Jordan</h1>
          <span class="card__preci">$99</span>
          <p class="card__description">
            Nike Air Jordan Footwear basketball sneakers.
          </p>
          <a href="#" class="card__button">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shoe;
