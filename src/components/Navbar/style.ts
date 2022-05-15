import styled from "styled-components";
import { clearCache, hexToCSSFilter } from "hex-to-css-filter";

import { ReactComponent as MenuGridIconSVG } from "../../assets/Images/SVG/menu-grid-icon.svg";

export const NavbarContainer = styled.div`
    display: flex;

    padding: 0 16px;

    width: 100%;
    min-height: 64px;
    background-color: ${(props) => props.theme.bg.secondary};

    & a {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        margin: 0 8px;

        height: 64px;
    }

    .empty_space {
        flex: 1;
    }

    .navbar_right_section {
        display: flex;
        justify-content: center;
    }

    .navbar_right_section > * {
        height: 100%;
    }

    & .navbar_right_section p {
        color: ${(props) => props.theme.text.default};
    }

    & .navbar_right_section p:hover {
        color: ${(props) => props.theme.text.hover};
    }

    & .download_button_container > p {
        margin: 0 8px;
    }

    & .download_button_container {
        display: flex;
        align-items: center;
    }

    & .navbar_user_section_container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
    }

    & .navbar_spacer {
        background-color: #5e6673;
        width: 1px;
        height: 13px;
        margin: 0 8px;
    }
`;

export const BinanceNavLogo = styled.img`
    width: 120px;
    filter: ${(props) => {
        const finalColor = hexToCSSFilter(props.theme.brand.default).filter;
        clearCache();
        return finalColor;
    }};
`;

export const NavbarCategoriesContainer = styled.div`
    display: flex;
    align-items: center;
    float: left;

    & > div {
        display: flex;
        align-items: center;
        height: 100%;
    }
`;

export const MenuGridIcon = styled(MenuGridIconSVG)`
    margin-bottom: 4px;
    filter: ${(props) => {
        const finalColor = hexToCSSFilter(props.theme.text.default).filter;
        clearCache();
        return finalColor;
    }};

    &:hover {
        filter: ${(props) => {
            const finalColor = hexToCSSFilter(props.theme.text.hover).filter;
            clearCache();
            return finalColor;
        }};
    }
`;
