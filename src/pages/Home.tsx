import React from "react";
import "./Home.scss";

// Motion
import { motion } from "framer-motion";

// Routing
import { Link } from "react-router-dom";

// Shoes image
import Shoes from "../assets/images/home.png";

const Home = () => {
  return (
    <section className="home">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="home__container container grid"
      >
        <img
          src={Shoes}
          alt="Shoes image of the hero section"
          className="home__img"
        />

        <div className="home__data">
          <h2 className="home__title">
            You <span>Choose</span>, Your <span>Shoes</span>
          </h2>
          <Link to="/gender" className="button home__button">
            Get Started
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
