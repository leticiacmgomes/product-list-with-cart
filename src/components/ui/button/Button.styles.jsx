import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  height: 53px;
  background-color: #c73b0f;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  font-family: "Red Hat Text", sans-serif;
  text-transform: capitalize;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    scale: 1.1;
  }
`;
