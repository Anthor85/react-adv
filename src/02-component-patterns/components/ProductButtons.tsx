import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className = "", style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => {
    return maxCount !== undefined && counter >= maxCount;
  }, [counter, maxCount]);

  const isMinReached = useCallback(() => {
    return counter <= 0;
  }, [counter]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={`${styles.buttonMinus} ${
          isMinReached() ? styles.minusDisabled : ""
        }`}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.maxisDisabled : ""
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
