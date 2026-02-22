import { Button } from "../ui/button/Button";
import { ConfirmedItem } from "./confirmed-item/ConfirmedItem";
import { useCartStore } from "../../store/cartStore";
import {
  ConfirmationModalContainer,
  ModalHeader,
  Title,
  ConfirmedItems,
  OrderTotal,
  TotalPrice,
} from "./ConfirmationModal.styles";

export const ConfirmationModal = () => {
  const { cartItems } = useCartStore();
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0,
  );
  const { startNewOrder } = useCartStore();
  return (
    <ConfirmationModalContainer>
      <ModalHeader>
        <Title>Order Confirmed</Title>
        <p>We hope you enjoy your food!</p>
      </ModalHeader>

      <ConfirmedItems>
        {cartItems.map((cartItem) => (
          <ConfirmedItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <OrderTotal>
          Order Total <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
        </OrderTotal>
      </ConfirmedItems>
      <Button onClick={startNewOrder} text="start new order" />
    </ConfirmationModalContainer>
  );
};
