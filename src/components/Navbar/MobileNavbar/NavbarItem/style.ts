import styled from "styled-components";

export const NavbarItemContentContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 16px;
    color: ${(p) => p.theme.text.alt};

    &:hover {
        color: ${(p) => p.theme.text.hover};
        background-color: ${(p) => p.theme.mobileNavbar.hover};
    }

    &:hover .theme_switch {
        color: ${(p) => p.theme.text.hover};
    }
`;

export const ItemTitle = styled.p`
    margin-left: 8px;
    font-size: 16px;

    color: ${(p) => p.theme.text.default};
`;

export const TitleLabelContainer = styled.p`
    display: flex;
    align-items: center;
    flex: 1;
`;
