import styled from "styled-components";

export const SectionContainer = styled.div`
    margin-top: -23px;
    width: 100%;
    height: 50vh;
    padding: 80 0;
    border-radius: 24px 24px 0px 0px;
    background-color: ${(p) => p.theme.bg.secondary};

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
`;
