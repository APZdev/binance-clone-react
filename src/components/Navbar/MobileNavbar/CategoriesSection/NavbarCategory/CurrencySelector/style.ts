import styled from "styled-components";

export const CurrencySelectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(p) => p.theme.border.default};
    height: 43px;

    margin-left: 48px;

    & > p {
        white-space: nowrap;
    }

    & > div {
        display: flex;
    }

    & .currency_value {
        margin: 0 8px;
    }

    & .category_arrow {
        color: red;
    }
`;

export const ArrowIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.text.alt};
    width: 18px;
    height: 18px;
    transform: rotateZ(-90deg);

    transition: color 0.2s;
`;

export const CurrencyValueContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px;

    &:hover ${ArrowIconContainer} {
        color: ${(p) => p.theme.brand.default};
    }

    &:hover {
        background-color: ${(p) => p.theme.desktopNavbar.hover};
    }
`;

export const CurrencyIcon = styled.img`
    width: 16px;
    height: auto;
`;
