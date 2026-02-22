import { useCartStore } from "../../store/cartStore";
import { Button } from "../ui/button/Button";
import {
  Title,
  EmptyCartContainer,
  CartContainer,
  OrderTotal,
  TotalPrice,
  HighlightedText,
  CarbonNeutralInfo,
} from "./Cart.styles";
import { AddedItems } from "./added-items/AddedItems";

import iconCarbonNeutral from "/images/icon-carbon-neutral.svg";

export const Cart = () => {
  const { cartItems, confirmOrder } = useCartStore();
  const totalQuantity = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0,
  );

  return (
    <CartContainer>
      <Title>your cart ({totalQuantity})</Title>
      {!totalQuantity ? (
        <EmptyCartContainer>
          <p>your added items will appear here</p>
        </EmptyCartContainer>
      ) : (
        <>
          <AddedItems />
          <OrderTotal>
            order total <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
          </OrderTotal>
          <CarbonNeutralInfo>
            <img src={iconCarbonNeutral} alt="Ícone de neutro em carbono" />
            <p>
              this is a <HighlightedText>carbon-neutral</HighlightedText>{" "}
              delivery
            </p>
          </CarbonNeutralInfo>
          <Button onClick={confirmOrder} text='confirm order' />
        </>
      )}
    </CartContainer>
  );
};
