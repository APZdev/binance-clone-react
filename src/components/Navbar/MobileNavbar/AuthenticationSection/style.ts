import styled from "styled-components";

export const AuthenticationSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const LoginButton = styled.button`
    background-color: #00000000;
    padding: 10px 16px;
    line-height: 20px;
    color: ${(p) => p.theme.text.default};

    &:hover {
        background-color: "#00000000";
        color: ${(p) => p.theme.text.hover};
    }
`;

export const RegisterButton = styled.button`
    min-height: 24px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;

    color: #181a20;
    background-color: #fcd535;
    padding: 10px 16px;
    border-radius: 4px;

    &:hover {
        color: #181a20;
        opacity: 0.9;
    }
`;
