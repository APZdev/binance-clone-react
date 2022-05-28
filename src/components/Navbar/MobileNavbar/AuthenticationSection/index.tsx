import React from "react";
import { Spacer } from "../../../../shared/components/Spacer";
import { AuthenticationSectionContainer, LoginButton, RegisterButton } from "./style";

export const AuthenticationSection: React.FC = () => {
    return (
        <AuthenticationSectionContainer>
            <LoginButton>Log In</LoginButton>
            <Spacer width={12} height={12} />
            <RegisterButton>Register</RegisterButton>
        </AuthenticationSectionContainer>
    );
};
