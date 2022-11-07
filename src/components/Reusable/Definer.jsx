import React from "react";
import "./Definer.scss";

// Link
import { Link } from "react-router-dom";

const Definer = ({ route, Icon }) => {
  return (
    <Link to={route} className="definer__card">
      <Icon className="definer__icon" size={80} />
    </Link>
  );
};

export default Definer;
