import { styled, keyframes } from "styled-components";
import iconOrderConfirmed from "/images/icon-order-confirmed.svg";

const showUp = keyframes`
  from {
    top: 50rem;
  }
  to {
    top: 6rem;
  }
`;

export const ConfirmationModalContainer = styled.div`
  position: fixed;
  background-color: #ffffff;
  width: 100vw;
  max-width: 600px;
  height: 717px;
  padding: 3rem 2rem;
  border-radius: 12px 12px 0px 0px;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${showUp} 0.5s;

  @media screen and (min-width: 500px) {
    height: 685px;
    border-radius: 12px;
  }
`;

export const ModalHeader = styled.header`
  font-size: 16px;
  color: #87635a;
  background: url("${iconOrderConfirmed}") no-repeat top left;
  padding-top: 5rem;
  display: grid;
  gap: 0.5rem;
`;

export const Title = styled.strong`
  font-size: 40px;
  font-weight: 700;
  color: #260f08;
`;

export const ConfirmedItems = styled.ul`
  padding: 1.2rem;
  background-color: #fcf8f6;
  display: grid;
  gap: 1.5rem;
`;

export const OrderTotal = styled.div`
  font-size: 14px;
  color: #260f08;
  display: flex;
  justify-content: space-between;
`;

export const TotalPrice = styled.strong`
  font-size: 24px;
  font-weight: 700;
  color: #260f08;
`;
