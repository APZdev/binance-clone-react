import styled from "styled-components";

export const MainContentContainer = styled.div`
    background-color: ${(props) => props.theme.bg.default};
    transition: "background-color 0.3s color 0.3s";
    width: "100vw";
    height: "100vh";
    color: "#fff";
`;
