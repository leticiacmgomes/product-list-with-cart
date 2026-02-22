import { styled, css } from "styled-components";

export const ProductItemContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

export const Illustration = styled.div`
  width: 100%;
  height: 212px;
  margin-bottom: 1.5rem;
  position: relative;

  @media screen and (min-width: 1440px) {
    height: 240px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Category = styled.span`
  color: #87635a;
  font-size: 14px;
`;

const commonTextStyle = css`
  font-size: 16px;
  font-weight: 600;
`;

export const Name = styled.strong`
  ${commonTextStyle}
  color: #260f08;
`;

export const Price = styled.span`
  ${commonTextStyle}
  color: #c73b0f;
`;
