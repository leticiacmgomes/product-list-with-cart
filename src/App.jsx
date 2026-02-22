import { ProductList } from "./components/product-list/ProductList";
import { Cart } from "./components/cart/Cart";
import { AppContainer } from "./App.styles";
import { ConfirmationModal } from "./components/confirmation-modal/ConfirmationModal";
import { useCartStore } from "./store/cartStore";

export const App = () => {
  const { isConfirmationModalActive } = useCartStore();
  return (
    <AppContainer $isConfirmationModalActive={isConfirmationModalActive}>
      <ProductList />
      <Cart />
      {isConfirmationModalActive && <ConfirmationModal />}
    </AppContainer>
  );
};
