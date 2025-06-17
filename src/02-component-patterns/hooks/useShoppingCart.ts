import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(0, productInCart.count + count) === 0) {
        // Eliminates the product from the cart if count is 0
        const { [product.id]: _, ...rest } = oldShoppingCart;
        return rest;
      } else {
        // productInCart.count += count;
        // console.log("productInCart", productInCart);

        return {
          ...oldShoppingCart,
          [product.id]: {
            ...productInCart,
            count: Math.max(0, productInCart.count + count),
          },
        };
      }

      // if (count === 0) {
      //   //Eliminates the product from the cart if count is 0
      //   const { [product.id]: _, ...rest } = prev;
      //   return rest;
      // }

      // return {
      //   ...prev,
      //   [product.id]: {
      //     ...product,
      //     count,
      //   },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
