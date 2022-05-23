import React from "react";
import { Button } from "../../../../shared/components/Button";
import { Spacer } from "../../../../shared/components/Spacer";
import { AuthenticationSectionContainer } from "./style";

export const AuthenticationSection: React.FC = () => {
    return (
        <AuthenticationSectionContainer>
            <Button value="Log In" defaultBgColor="#00000000" hoverBgColor="#00000000" />
            <Spacer width={12} height={12} />
            <Button
                value="Register"
                height="32px"
                defaultTextColor="#181a20"
                hoverTextColor="#181a20"
                defaultBgColor="#FCD535"
                hoverBgColor="#FCD535DD"
                padding="6px 12px"
            />
        </AuthenticationSectionContainer>
    );
};
