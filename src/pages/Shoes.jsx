import React from "react";
import "./Shoes.scss";

// Motion
import { motion } from "framer-motion";

// Shoe component
import Shoe from "../components/Reusable/Shoe";

const Shoes = () => {
  return (
    <section className="shoes">
      <motion.div className="shoes__container container grid">
        <Shoe />
      </motion.div>
    </section>
  );
};

export default Shoes;
