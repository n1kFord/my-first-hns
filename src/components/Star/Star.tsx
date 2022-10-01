import React, { FC } from "react";
import styles from "./Star.module.scss";
import starImagePath from "../../images/star.svg";

interface StarProps {
  filled: boolean;
}

const Star: FC<StarProps> = ({ filled }) => {
  const starClassName = `${styles.Star} ${filled ? styles.filled : ""}`;
  return <img src={starImagePath} alt="0 rating" className={starClassName} />;
};

export default Star;
