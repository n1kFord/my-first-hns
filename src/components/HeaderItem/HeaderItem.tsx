import React, { FC } from "react";
import styles from "./HeaderItem.module.scss";
import { ILink } from "../../data/links";

const HeaderItem: FC<ILink> = ({ path, name, href }) => {
  return (
    <div className={styles.HeaderItem}>
      <img src={path} alt={name} className={styles.img} />
      <a href={href}>{name}</a>
    </div>
  );
};

export default HeaderItem;
