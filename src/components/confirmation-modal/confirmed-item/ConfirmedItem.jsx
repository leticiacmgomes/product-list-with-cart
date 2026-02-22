import {
  ConfirmedItemContainer,
  Thumbnail,
  Name,
  Quantity,
  UnitPrice,
  TotalItemPrice,
} from "./ConfirmedItem.styles";

export const ConfirmedItem = ({ cartItem }) => {
  const { id, image, name, price, quantity } = cartItem;
  const { thumbnail } = image;
  const totalItemPrice = price * quantity;
  return (
    <ConfirmedItemContainer>
      <Thumbnail src={thumbnail} alt="Ilustração da sobremesa" />
      <Name>{name}</Name>
      <Quantity>{quantity}x</Quantity>
      <UnitPrice>@ ${price}</UnitPrice>
      <TotalItemPrice>${totalItemPrice.toFixed(2)}</TotalItemPrice>
    </ConfirmedItemContainer>
  );
};
