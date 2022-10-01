import React, { FC } from "react";
import styles from "./About.module.scss";
import logoPath from "../../images/big-logo.png";

const About: FC = () => {
  return (
    <div className={styles.About} data-aos="fade-down">
      <h2 className={styles.title}>About us</h2>
      <div className={styles.container}>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <img src={logoPath} alt="big logo" data-aos="fade-down" />
      </div>
    </div>
  );
};

export default About;
