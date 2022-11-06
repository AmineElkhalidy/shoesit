import React from "react";
import "./Brand.scss";

// Motion
import { motion } from "framer-motion";

// Icons
import { SiAdidas, SiNike, SiPuma, SiNewbalance, SiReebok } from "react-icons";

// Definer component
import Definer from "../components/Reusable/Definer";

// Data

const Brand = () => {
  return (
    <section className="brand">
      <motion.div className="brand__container container">
        <div className="brand__data">
          <h2 className="brand__title">Choose your favorite brand:</h2>

          <div>
            <Definer route="/adidas" Icon={SiAdidas} brand="Adidas" />
            <Definer route="/nike" Icon={SiNike} brand="Nike" />
            <Definer route="/reebok" Icon={SiReebok} brand="Reebok" />
            <Definer route="/puma" Icon={SiPuma} brand="Puma" />
            <Definer
              route="/new-balance"
              Icon={SiNewbalance}
              brand="New Balance"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brand;
