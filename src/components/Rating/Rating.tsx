import React, { FC } from "react";
import styles from "./Rating.module.scss";
import Star from "../Star/Star";

interface RatingProps {
  amount: number;
}

const minRating = [1, 1, 1];

const Rating: FC<RatingProps> = ({ amount }) => {
  return (
    <div className={styles.Rating}>
      {minRating.map((el, i) => {
        return <Star key={`rating${i}`} filled={i < amount} />;
      })}
    </div>
  );
};

export default Rating;
