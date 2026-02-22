import {styled} from "styled-components";

export const ProductListContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    gap: 3rem;
    justify-self: center;

    @media screen and (min-width: 600px) {
        display: grid;
        column-gap: 1rem;
        grid-template-columns: repeat(2, auto);
    }

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, auto);
        row-gap: 1rem;
    }
`;

export const Header = styled.header`
    font-weight: 700;
    font-size: 40px;
    text-transform: capitalize;
    color: #260F08;
    grid-column: 1 / -1;
`;


