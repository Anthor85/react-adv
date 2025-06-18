import { useEffect, useMemo, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductProps {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
}

export const useProduct = ({
  initialValues,
  value = 0,
  onChange,
  product,
}: useProductProps) => {
  console.log("initialValues", initialValues, value);

  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const maxCount = useMemo(() => {
    return initialValues?.maxCount;
  }, [initialValues]);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  // Cada useEffect debe centrarse en un efecto específico.
  useEffect(() => {
    isMounted.current = true;
  }, []);

  const increaseBy = (value: number) => {
    const newValue = Math.min(
      Math.max(0, counter + value),
      initialValues?.maxCount || Infinity
    );
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount,
    increaseBy,
    reset,
  };
};
