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
        background-color: ${(p) => p.theme.desktopNavbar.hover};
    }
`;

export const CurrencyIcon = styled.img`
    width: 20px;
    height: auto;
`;

export const ArrowIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.text.alt};
    width: 18px;
    height: 18px;

    transform: rotateZ(-90deg);
`;
