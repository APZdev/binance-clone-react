import styled from "styled-components";

export const MainContentContainer = styled.div`
    margin: 0 !important;
    background-color: ${(p) => p.theme.bg.default};
    transition: background-color 0.3s color 0.3s;
    width: 100%;
    height: 1500px;
    color: "#fff";
`;
