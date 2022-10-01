import React, { FC } from "react";
import styles from "./StaffItem.module.scss";
import { IStaff } from "../../data/authority";
import Rating from "../Rating/Rating";

const StaffItem: FC<IStaff> = ({ name, rating, role, image }) => {
  return (
    <div className={styles.StaffItem} data-aos="fade-left">
      <div className={styles.container}>
        <img src={image} alt={role} className={styles.image} />
        <Rating amount={rating} />
      </div>
      <h3>{role}:</h3>
      <p>{name}</p>
    </div>
  );
};

export default StaffItem;
