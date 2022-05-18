import styled from "styled-components";

export const DownloadLanguageCurrencyThemeContainer = styled.div`
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
