import { styled } from "styled-components";

export const AppContainer = styled.div`
  padding: 1rem;
  font-family: "Red Hat Text", sans-serif;
  background-color: #fcf8f6;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 3rem;

  @media screen and (min-width: 500px) {
    padding: 3.5rem;
  }

  &::after {
    content: "";
    display: ${({ $isConfirmationModalActive }) =>
      $isConfirmationModalActive ? "block" : "none"};
    width: 100%;
    height: 100%;
    background: ${({ $isConfirmationModalActive }) =>
      $isConfirmationModalActive ? "#00000080" : "transparent"};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }


  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 5rem;
    align-items: start;
  }
`;
