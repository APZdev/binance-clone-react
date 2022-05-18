import { hexToCSSFilter, clearCache } from "hex-to-css-filter";
import { useMemo } from "react";
import styled from "styled-components";

import { ReactComponent as RightArrow } from "../../../../../assets/Images/SVG/right-arrow-long.svg";

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

    & .image_container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        min-height: 40px;
    }

    & .image_container > svg {
        margin: 0;
    }

    & .card_info_container {
        margin: 0 16px;
    }

    & .name_new_label_container {
        display: flex;
        align-items: center;
    }

    &:hover {
        background-color: ${(props) => props.theme.desktopNavbar.hover};
    }

    &:hover ${RightArrowIcon} {
        opacity: 1;
        margin-right: 0px;
        transform: scale(1);

        transition: 0.1s linear;
    }
`;

export const CardName = styled.p`
    white-space: nowrap;
    font-size: 16px;
    color: ${(props) => props.theme.text.default};
`;

export const CardDescription = styled.p`
    color: ${(props) => props.theme.text.alt};
    font-size: 12px;
    margin-top: 4px;
    width: 100%;
`;
