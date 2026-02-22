import { styled, css } from "styled-components";
import iconRemoveItem from '/images/icon-remove-item.svg'

const baseTextStyle = css`
  font-size: 14px;
  font-weight: 600;
`;

export const AddedItemContainer = styled.div`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, auto);
  row-gap: 0.8rem;
  border-bottom: 1px solid #f5eeec;
  padding: 1rem 0;
`;

export const Name = styled.strong`
  ${baseTextStyle};
  color: #260f08;
  grid-column: 1 / -1;
`;

export const Quantity = styled.span`
  ${baseTextStyle};
  color: #c73b0f;
`;

export const UnitPrice = styled.span`
  font-size: 14px;
  color: #87635a;
`;

export const ItemTotalPrice = styled.span`
  ${baseTextStyle};
  color: #87635a;
`;

export const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  background: url("${iconRemoveItem}") no-repeat center;
  border: solid 1px #AD8A85;
  border-radius: 50%;
  grid-column: -1 / -1;
  grid-row: 1 / -1;
  justify-self: end;
  align-self: center;
  cursor: pointer;

  &:hover {
    border: solid 1px #260F08;
  }
`;