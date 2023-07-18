import React from "react";
import * as styles from "./styles.module.scss";

const Stars = ({ rating }) => {
  const starsRating = rating / 20;
  return (
    <>
      <div className={styles.rating} title={starsRating}>
        <div
          className={styles.rating__stars}
          style={{ "--rating": starsRating }}
        ></div>
      </div>
    </>
  );
};

export default Stars;
