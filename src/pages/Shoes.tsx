import React from "react";
import "./Shoes.scss";

// Motion
import { motion } from "framer-motion";

// Shoe component
import Shoe from "../components/Reusable/Shoe";

const Shoes = () => {
  return (
    <section className="shoes">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="shoes__container container grid"
      >
        <Shoe />
        <Shoe />
        <Shoe />
      </motion.div>
    </section>
  );
};

export default Shoes;
