import React, { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.Footer} data-aos="fade-up">
      <div className={styles.wrapper}>
        <h4>myfirsthns</h4>
        <p>by n1kford.</p>
      </div>
    </div>
  );
};

export default Footer;
