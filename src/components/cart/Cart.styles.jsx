import { styled, css } from "styled-components";
import illustrationEmptyCart from "/images/illustration-empty-cart.svg";

export const CartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background-color: #ffffff;
  display: grid;
  gap: 1.5rem;
  justify-self: center;


  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
  color: #c73b0f;
`;

export const EmptyCartContainer = styled.div`
  height: 195px;
  padding-bottom: 1rem;
  display: grid;
  align-items: end;
  justify-items: center;
  background: url("${illustrationEmptyCart}") no-repeat center;
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  color: #260f08;
  font-size: 14px;
`;

export const TotalPrice = styled.strong`
  font-size: 24px;
  font-weight: 700;
`;

export const CarbonNeutralInfo = styled.div`
  height: 52px;
  background-color: #fcf8f6;
  display: flex;
  place-items: center;
  gap: 0.5rem;
`;

export const HighlightedText = styled.strong`
  font-weight: 600;
`;
