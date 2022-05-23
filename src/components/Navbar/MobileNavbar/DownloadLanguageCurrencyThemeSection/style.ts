import styled from "styled-components";

export const DownloadLanguageCurrencyThemeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    & > * {
        height: 100%;
    }

    & p {
        color: ${(p) => p.theme.text.default};
    }
`;
