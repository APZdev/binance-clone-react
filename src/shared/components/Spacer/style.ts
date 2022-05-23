import styled from "styled-components";

interface Props {
    width?: number;
    height?: number;
}

export const CustomSpacer = styled.div<Props>`
    min-width: ${(props) => (props.width === undefined ? "12" : props.width)}px;
    min-height: ${(props) => (props.height === undefined ? "12" : props.height)}px;
`;
