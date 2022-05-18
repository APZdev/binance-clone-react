import styled from "styled-components";

export const CurrencySelectorContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 16px;

    & > p {
        white-space: nowrap;
    }

    & > div {
        display: flex;
    }

    & .currency_value {
        margin: 0 8px;
    }
`;

export const CurrencyValueContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px;

    &:hover {
        background-color: ${(props) => props.theme.desktopNavbar.hover};
    }
`;

export const CurrencyIcon = styled.img`
    width: 20px;
    height: auto;
`;
