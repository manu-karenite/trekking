import React from "react";
import styles from "./Card.module.css";
const Card = ({ title, source }) => {
  return (
    <div
      className={styles?.outer}
      style={{ backgroundImage: `url(${source})` }}
    >
      <div className={styles.text}>{title}</div>
      <div className={styles.text}>
        <input type="button" className={styles.btn} value="3+ Products" />
      </div>
    </div>
  );
};

export default Card;
