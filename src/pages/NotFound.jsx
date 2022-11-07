import React from "react";
import "./NotFound.scss";

// Motion
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="notfound">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="notfound__container container"
      >
        <div className="notfound__data">
          <span className="notfound__subtitle">Error 404</span>
          <h1 className="notfound__title">Hey buddy</h1>
          <p className="notfound__description">
            We can't seem to find the page <br /> you are looking for.
          </p>

          <a href="#" class="notfound__button">
            Go Home
          </a>
        </div>

        <div class="notfound__img">
          <img src="assets/img/ghost-img.png" alt="" />
          <div class="notfound__shadow"></div>
        </div>
      </motion.div>

      <footer class="notfound__footer">
        <span>(123) 456-654</span>
        <span>|</span>
        <span>Contact@shoesit.it</span>
      </footer>
    </section>
  );
};

export default NotFound;
