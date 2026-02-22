import {
  AddToCart,
  QuantityControl,
  QuantityControlButton,
} from "./AddButton.styles";
import iconIncrement from "/images/icon-increment-quantity.svg";
import iconDecrement from "/images/icon-decrement-quantity.svg";
import { useCartStore } from "../../../../store/cartStore";

export const AddButton = ({ productItem }) => {
  const { cartItems, addToCart, decrementItemQuantity } = useCartStore();
  const quantity = cartItems.find(cartItem => cartItem.id === productItem.id)?.quantity;
  return (
    <>
      {!quantity ? (
        <AddToCart onClick={() => addToCart(productItem)}>
          add to cart
        </AddToCart>
      ) : (
        <QuantityControl>
          <QuantityControlButton>
            <img onClick={() => addToCart(productItem)} src={iconIncrement} alt="Ícone de mais" />
          </QuantityControlButton>
          <span>{quantity}</span>
          <QuantityControlButton>
            <img onClick={() => decrementItemQuantity(productItem.id)} src={iconDecrement} alt="Ícone de menos" />
          </QuantityControlButton>
        </QuantityControl>
      )}
    </>
  );
};
