import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" /* img={product.img} */ />
          <ProductCard.Title
            className="text-bold" /* title={product.title} */
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" /* img={product.img} */ />
          <ProductTitle className="text-bold" /* title={product.title} */ />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "lightblue" }}>
          <ProductCard.Image
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
          />
          <ProductCard.Title style={{ fontWeight: "bold" }} />
          <ProductCard.Buttons
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
