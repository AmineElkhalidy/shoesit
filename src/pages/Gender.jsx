import React from "react";
import "./Gender.scss";

// Motion
import { motion } from "framer-motion";

// Icons
import { IoIosMan, IoIosWoman } from "react-icons/io";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

// Components
import Definer from "../components/Reusable/Definer";

const Gender = () => {
  return (
    <section className="gender">
      <motion.div className="gender__container container">
        <div className="gender__data">
          <h2 className="gender__title">Choose your gender:</h2>

          <div>
            <Definer
              route={"/gender/man/brand"}
              Icon={FcBusinessman}
              gender="Man"
            />
            <Definer
              route={"/gender/woman/brand"}
              Icon={FcBusinesswoman}
              gender="Woman"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Gender;
