import styled from "styled-components";

export const LabelContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: 400;

    margin-left: 8px;
    padding: 0 4px;
    border-radius: 4px;
    line-height: 16px;

    background-color: #fcd535;
    color: #1e2329;

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        left: -3px;
        top: 2px;
        border-left: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid;
        border-right-color: #fcd535;
    }
`;
