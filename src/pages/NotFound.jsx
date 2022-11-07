import React from "react";
import "./NotFound.scss";

// Link
import { Link } from "react-router-dom";

// Motion
import { motion } from "framer-motion";

// Ghost
import Ghost from "../assets/images/ghost-img.png";

const NotFound = () => {
  return (
    <motion.section
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="notfound"
    >
      <div className="notfound__container container">
        <div className="notfound__data">
          <span className="notfound__subtitle">Error 404</span>
          <h1 className="notfound__title">Hey buddy</h1>
          <p className="notfound__description">
            We can't seem to find the page <br /> you are looking for.
          </p>

          <Link to="/" class="notfound__button">
            Go Home
          </Link>
        </div>

        <div class="notfound__img">
          <img src={Ghost} />
          <div class="notfound__shadow"></div>
        </div>
      </div>

      <footer class="notfound__footer">
        <span>(123) 456-654</span>
        <span>|</span>
        <span>Contact@shoesit.it</span>
      </footer>
    </motion.section>
  );
};

export default NotFound;
