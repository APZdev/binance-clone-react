import styled from "styled-components";
import { clearCache, hexToCSSFilter } from "hex-to-css-filter";
import { useMemo } from "react";

export const DesktopNavbarContainer = styled.div`
    display: flex;

    padding: 0 16px;

    width: 100%;
    min-height: 64px;
    background-color: ${(p) => p.theme.bg.secondary};

    @media (max-width: 768px) {
        padding: 0 8px;
    }
`;

export const EmptySpace = styled.div`
    flex: 1;
`;

export const BinanceNavLogo = styled.img`
    width: 120px;
    filter: ${(props) => {
        const filterValue = useMemo(() => hexToCSSFilter(props.theme.brand.default).filter, [props.theme.brand.default]);
        const finalColor = filterValue;
        clearCache();
        return finalColor;
    }};
`;

export const BinanceNavLogoLink = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 0 8px;

    height: 64px;
`;

export const BinanceLogoContainer = styled.div`
    display: flex;
    align-items: center;

    color: ${(p) => p.theme.brand.default};
`;
