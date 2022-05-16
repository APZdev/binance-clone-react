import styled from "styled-components";
import { clearCache, hexToCSSFilter } from "hex-to-css-filter";
import { useMemo } from "react";

export const NavbarContainer = styled.div`
    display: flex;

    padding: 0 16px;

    width: 100%;
    min-height: 64px;
    background-color: ${(props) => props.theme.bg.secondary};

    .empty_space {
        flex: 1;
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

export const BinanceNavLogoLink = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 0 8px;

    height: 64px;
`;

export const NavbarRightSection = styled.div`
    display: flex;
    justify-content: center;

    & > * {
        height: 100%;
    }

    & p {
        color: ${(props) => props.theme.text.default};
    }

    & p:hover {
        color: ${(props) => props.theme.text.hover};
    }
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

export const AuthenticationButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    & .empty_spacer {
        min-width: 12px;
        min-height: 12px;
    }
`;

export const LogInButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;

    color: ${(props) => props.theme.text.default};

    &:hover {
        color: ${(props) => props.theme.text.hover};
    }
`;

export const RegisterButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    font-size: 14px;
    min-height: 32px;
    border-radius: 4px;
    font-weight: 500;
    color: ${(props) => props.theme.button.text};

    background-color: ${(props) => props.theme.button.default};

    &:hover {
        background-color: ${(props) => props.theme.button.hover};
    }
`;
