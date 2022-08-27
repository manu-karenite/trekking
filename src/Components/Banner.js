import React from "react";
import styles from "./Banner.module.css";
import Component from "./Component.js";
const arr = [
  {
    title: "Excellent Quality Products",
    source:
      "https://res.cloudinary.com/techbuy/image/upload/v1661624802/one_v517lr.png",
  },
  {
    title: "Delivery Date & Return Date is FREE!!",
    source:
      "https://res.cloudinary.com/techbuy/image/upload/v1661624802/two_xxjljl.png",
  },
  {
    title: "Pay on Delivery",
    source:
      "https://res.cloudinary.com/techbuy/image/upload/v1661624802/three_qqirrs.png",
  },
];
const Banner = () => {
  return (
    <div className={styles?.outer}>
      {arr &&
        arr.map((curr, index) => {
          return (
            <Component
              title={curr?.title}
              source={curr?.source}
              key={index}
              index={index}
            />
          );
        })}
    </div>
  );
};

export default Banner;
