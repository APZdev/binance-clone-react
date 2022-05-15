import styled from "styled-components";
import { clearCache, hexToCSSFilter } from "hex-to-css-filter";

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;

    width: 100vw;
    min-height: 64px;
    background-color: ${(props) => props.theme.bg.secondary};

    & a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
    }
`;

export const SwitchButton = styled.button`
    width: 100px;
    height: 100px;
`;

export const BinanceNavLogo = styled.img`
    width: 120px;
    filter: ${(props) => {
        const finalColor = hexToCSSFilter(props.theme.brand.default).filter;
        clearCache();
        return finalColor;
    }};
`;
