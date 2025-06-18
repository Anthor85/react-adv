import { JSX } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
