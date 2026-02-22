import { styled, css } from "styled-components";
import iconAddToCart from "/images/icon-add-to-cart.svg";

const buttonBase = css`
  width: 160px;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const AddToCart = styled.div`
  ${buttonBase};
  color: #260f08;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: end;
  border-radius: 999px;
  border: 1px solid #ad8a85;
  background: url("${iconAddToCart}") no-repeat center left 1.5rem #ffffff;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: solid 1px #C73B0F;
    color: #C73B0F;
  }
`;

export const QuantityControl = styled.div`
  ${buttonBase};
  background-color: #c73b0f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
`;

export const QuantityControlButton = styled.div`
  width: 20px;
  height: 20px;
  padding: 2px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
`;
