import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  initialValue?: number;
}

export const useProduct = ({
  initialValue = 0,
  onChange,
  product,
}: useProductProps) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    setCounter(initialValue);
  }, [initialValue]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(0, counter + value);
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  return {
    counter,
    increaseBy,
  };
};
