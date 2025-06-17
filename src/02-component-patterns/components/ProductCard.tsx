import { createContext, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  onChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({
  children,
  product,
  value,
  onChange,
  className = "",
  style,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    product,
    initialValue: value ?? 0,
    onChange,
  });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div
        className={`${styles.productCard} ${className}`}
        key={product.id}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
};

// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
