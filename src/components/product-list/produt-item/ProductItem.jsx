import { AddButton } from "./add-button/AddButton";
import {
  ProductItemContainer,
  Illustration,
  Category,
  Name,
  Price,
} from "./ProductItem.styles";

export const ProductItem = ({ productItem }) => {
  const { image, name, category, price } = productItem;
  const { thumbnail, mobile, tablet, desktop } = image;

  return (
    <ProductItemContainer>
      <Illustration>
        <picture>
          <source media="(min-width: 768px)" srcSet={tablet} />
          <source media="(min-width: 1440px)" srcSet={desktop} />
          <img src={mobile} alt="Ilustração da sobremesa" />
        </picture>
        <AddButton productItem={productItem} />
      </Illustration>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Price>${price.toFixed(2)}</Price>
    </ProductItemContainer>
  );
};
