import { useCartStore } from "../../../store/cartStore";
import { AddedItem } from "./added-item/AddedItem";

export const AddedItems = () => {
  const { cartItems } = useCartStore();
  return (
    <>
      {cartItems.map((cartItem) => (
        <AddedItem key={cartItem.id} $cartItem={cartItem} />
      ))}
    </>
  );
};
