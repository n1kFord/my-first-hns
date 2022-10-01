import React, { FC } from "react";
import styles from "./Landing.module.scss";
import { IServerLink } from "../../data/servers";

interface LandingProps {
  servers: IServerLink[];
}
const Landing: FC<LandingProps> = ({ servers }) => {
  return (
    <div className={styles.Landing} data-aos="fade-left">
      <h1>MyFirstHns</h1>
      <div className={styles.container} data-aos="fade-up">
        <h3>join:</h3>
        <div className={styles.buttons} data-aos="fade-left">
          <div className={styles.option}>
            <a href={servers[0].href}>{servers[0].name}</a>
            <span>#1</span>
          </div>
          <div className={styles.option}>
            <a href={servers[1].href}>{servers[1].name}</a>
            <span>#2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
