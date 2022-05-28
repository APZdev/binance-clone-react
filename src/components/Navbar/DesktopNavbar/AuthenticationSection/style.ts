import styled from "styled-components";

export const AuthenticationSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
`;

export const LoginButton = styled.button`
    background-color: #00000000;
    color: ${(p) => p.theme.text.default};
    padding: 6px 12px;

    &:hover {
        background-color: "#00000000";
        color: ${(p) => p.theme.text.hover};
    }
`;

export const RegisterButton = styled.button`
    min-height: 24px;
    height: 32px;

    color: #181a20;
    background-color: #fcd535;
    padding: 6px 12px;
    border-radius: 4px;

    &:hover {
        color: #181a20;
        opacity: 0.9;
    }
`;
