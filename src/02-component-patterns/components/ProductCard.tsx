import { createContext, JSX } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  // children?: ReactElement | ReactElement[];
  children: (props: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  value,
  onChange,
  className = "",
  style,
  initialValues,
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, maxCount, reset } =
    useProduct({
      product,
      value,
      initialValues,
      onChange,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div
        className={`${styles.productCard} ${className}`}
        key={product.id}
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
