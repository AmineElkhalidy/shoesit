import React from "react";
import "./Definer.scss";

// Link
import { Link } from "react-router-dom";

const Definer = ({ route, gender, Icon }) => {
  return (
    <Link to={route} className="definer__card">
      <Icon className="definer__icon" size={45} />
      <h3>{gender}</h3>
    </Link>
  );
};

export default Definer;
