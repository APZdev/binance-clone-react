import { hexToCSSFilter, clearCache } from "hex-to-css-filter";
import { useMemo } from "react";
import styled from "styled-components";

import { ReactComponent as RightArrow } from "../../../../../../assets/Images/SVG/right-arrow-long.svg";

export const RightArrowIcon = styled(RightArrow)`
    position: absolute;
    opacity: 0;
    margin-left: auto;
    margin-right: 4px;
    width: 16px;
    height: 16px;
    transform: scale(0.9);
    overflow: hidden;
    right: 16px;
    filter: ${(props) => {
        const filterValue = useMemo(() => hexToCSSFilter(props.theme.text.hover).filter, [props.theme.text.hover]);
        const finalColor = filterValue;
        clearCache();
        return finalColor;
    }};

    transition: 0.1s linear;
`;

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 8px;
    min-width: 350px;

    padding: 16px;

    &:hover {
        background-color: ${(p) => p.theme.desktopNavbar.hover};
        cursor: pointer;
    }

    &:hover ${RightArrowIcon} {
        opacity: 1;
        margin-right: 0px;
        transform: scale(1);

        transition: 0.1s linear;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;

    & > svg {
        margin: 0;
    }
`;
export const CardInfoContainer = styled.div`
    margin: 0 16px;
`;
export const NameNewLabelContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CardName = styled.p`
    white-space: nowrap;
    font-size: 16px;
    color: ${(p) => p.theme.text.default};
`;

export const CardDescription = styled.p`
    color: ${(p) => p.theme.text.alt};
    font-size: 12px;
    margin-top: 4px;
    width: 100%;
`;
