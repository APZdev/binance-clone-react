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
    }
`;
