import { styled } from "styled-components";

export const ConfirmedItemContainer = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: grid;
  grid-template: repeat(2, auto) / 48px auto auto;
  column-gap: 1rem;
  border-bottom: solid 1px #f5eeec;
  padding: 0.8rem 0;
`;

export const Thumbnail = styled.img`
  width: 48px;
  height: 48px;
  grid-area: 1 / 1 / -1 / 1;
`;

export const Name = styled.strong`
  color: #260f08;
`;

export const Quantity = styled.span`
  color: #c73b0f;
  grid-area: 2 / 2 / -1 / 2;
`;

export const UnitPrice = styled.span`
  color: #87635a;
  font-weight: 400;
  grid-area: 2 / 2 / -1 / 2;
  margin-left: 1.5rem;
`;

export const TotalItemPrice = styled.span`
  font-size: 16px;
  color: #260f08;
  grid-area: 1 / -1 / -1 / -1;
  justify-self: end;
  align-self: center;
`;

