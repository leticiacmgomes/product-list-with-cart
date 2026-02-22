import { useCartStore } from "../../../../store/cartStore";
import {
  AddedItemContainer,
  Name,
  Quantity,
  UnitPrice,
  ItemTotalPrice,
  RemoveButton,
} from "./AddedItem.styles";

export const AddedItem = ({ $cartItem }) => {
  const { id, name, quantity, price } = $cartItem;
  const itemTotalPrice = price * quantity;
  const { removeFromCart } = useCartStore();

  return (
    <AddedItemContainer>
      <Name>{name}</Name>
      <Quantity>{quantity}x</Quantity>
      <UnitPrice>@ ${price.toFixed(2)}</UnitPrice>
      <ItemTotalPrice>${itemTotalPrice.toFixed(2)}</ItemTotalPrice>
      <RemoveButton onClick={() => removeFromCart(id)} />
    </AddedItemContainer>
  );
};
