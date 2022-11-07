import React from "react";
import "./Brand.scss";

// Motion
import { motion } from "framer-motion";

// Location
import { useLocation } from "react-router-dom";

// Icons
import {
  SiAdidas,
  SiNike,
  SiPuma,
  SiNewbalance,
  SiReebok,
} from "react-icons/si";

// Definer component
import Definer from "../components/Reusable/Definer";

// Data

const Brand = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <section className="brand">
      <motion.div className="brand__container container">
        <div className="brand__data">
          <h2 className="brand__title">Choose your favorite brand:</h2>

          <div>
            <Definer route={`${pathname}/adidas`} Icon={SiAdidas} />
            <Definer route={`${pathname}/nike`} Icon={SiNike} />
            <Definer route={`${pathname}/reebok`} Icon={SiReebok} />
            <Definer route={`${pathname}/puma`} Icon={SiPuma} />
            <Definer
              route={`${pathname}/new-balance`}
              Icon={SiNewbalance}
              brand="NewBalance"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brand;
