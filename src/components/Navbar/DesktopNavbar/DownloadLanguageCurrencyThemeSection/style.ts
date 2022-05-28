import styled from "styled-components";

export const DownloadLanguageCurrencyThemeContainer = styled.div`
    display: flex;
    justify-content: center;

    & > * {
        height: 100%;
    }

    & p {
        color: ${(p) => p.theme.text.default};
    }

    & p:hover {
        color: ${(p) => p.theme.text.hover};
        cursor: pointer;
    }
`;

export const DownloadButtonContainer = styled.button`
    display: flex;
    align-items: center;
    margin: 0 8px;
    background-color: #00000000;
    color: ${(p) => p.theme.text.default};
`;

export const NavbarUserSectionContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
`;

export const NavbarSpacer = styled.div`
    background-color: #5e6673;
    width: 1px;
    height: 13px;
    margin: 0 8px;
`;
