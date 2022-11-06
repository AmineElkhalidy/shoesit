import React from "react";
import "./Brand.scss";

// Motion
import { motion } from "framer-motion";

// Definer component
import Definer from "../components/Reusable/Definer";

const Brand = () => {
  return (
    <section className="brand">
      <motion.div className="brand__container container">
        <div className="brand__data">
          <h2 className="brand__title">Choose your favorite brand:</h2>

          <div></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brand;
