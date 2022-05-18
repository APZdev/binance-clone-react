import styled from "styled-components";

export interface ButtonProps {
    value?: string;
    width?: string;
    height?: string;
    defaultTextColor?: string;
    hoverTextColor?: string;
    defaultBgColor?: string;
    hoverBgColor?: string;
    padding?: string;
}

export const CustomButton = styled.button<ButtonProps>`
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;

    width: ${(props) => (props.width === undefined ? "auto" : props.width)};
    height: ${(props) => (props.height === undefined ? "auto" : props.height)};
    color: ${(props) => (props.defaultTextColor === undefined ? props.theme.text.default : props.defaultTextColor)};
    background-color: ${(props) => (props.defaultBgColor === undefined ? props.theme.bg.default : props.defaultBgColor)};
    padding: ${(props) => (props.padding === undefined ? "6px 12px" : props.padding)};

    transition: color 0.2s, background-color 0.2s;

    &:hover {
        cursor: pointer;

        color: ${(props) => (props.hoverTextColor === undefined ? props.theme.text.hover : props.hoverTextColor)};
        background-color: ${(props) => (props.hoverBgColor === undefined ? props.theme.bg.hover : props.hoverBgColor)};
    }
`;
