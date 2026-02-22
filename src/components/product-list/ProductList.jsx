import { ProductItem } from "./produt-item/ProductItem";
import { ProductListContainer, Header } from "./ProductList.styles";
import productList from "../../data/data.json";

export const ProductList = () => {
  return (
    <ProductListContainer>
      <Header>desserts</Header>
      {productList.map((productItem) => (
        <ProductItem key={productItem.id} productItem={productItem} />
      ))}
    </ProductListContainer>
  );
};
