import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      src={img || product.img || noImage}
      alt="Product"
      className={styles.productImg}
    />
  );
};
