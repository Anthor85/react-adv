import { useState } from "react";

export const useProduct = (initialValue: number = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(0, prev + value));
  };

  return {
    counter,
    increaseBy,
  };
};
