import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles?.outer}>
      <div className={styles.text1}>
        Traveling via Delhi, Dehradun or Chandigarh?
      </div>
      <div className={styles.text1}>
        Rent while you transit & save even more!
      </div>
      <div className={styles.text2}>
        <div className={styles.text2_2}>Save Upto 20%</div>
        <input type="button" className={styles?.knowMore} value="Know More" />
      </div>
    </div>
  );
};

export default Footer;
