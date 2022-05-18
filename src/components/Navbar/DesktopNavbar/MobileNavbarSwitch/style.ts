import styled from "styled-components";

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;

    &:hover {
        color: ${(props) => props.theme.text.hover};
    }
`;
