import React from "react";
import styles from "./Product.module.css";
import Card from "./Card.js";
const arr = [
  //CAN BE FETCHED FROM A GET REQUEST FROM BACKEND API
  {
    title: "Trekking Shoes",
    source:
      "https://res.cloudinary.com/techbuy/image/upload/v1661624803/four_dypafu.png",
  },
  {
    title: "Trekking Jackets",
    source:
      "https://res.cloudinary.com/techbuy/image/upload/v1661624803/five_m3glbq.png",
  },
  {
    title: "Backpacks",
    source:
      "https://res.cloudinary.com/techbuy/image/upload/v1661630045/six_nh8jci.png",
  },
  {
    title: "Tracking Accessories",
    source:
      "https://res.cloudinary.com/techbuy/image/upload/v1661630044/seven_soqfey.png",
  },
];
const Products = () => {
  return (
    <div className={styles?.outer}>
      {arr &&
        arr.map((curr, index) => {
          return <Card key={index} title={curr?.title} source={curr?.source} />;
        })}
    </div>
  );
};

export default Products;
