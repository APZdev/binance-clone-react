import React from "react";
import { Label } from "../../../../shared/components/Label";
import { ItemTitle, NavbarItemContentContainer, TitleLabelContainer } from "./style";

interface Props {
    icon: JSX.Element;
    name: string;
    labelName?: string;
    optionalComponent?: JSX.Element;
}

export const NavbarItem: React.FC<Props> = ({ icon, name, labelName, optionalComponent }) => {
    return (
        <>
            <NavbarItemContentContainer>
                {icon}
                <TitleLabelContainer>
                    <ItemTitle>{name}</ItemTitle>
                    {labelName !== "" && labelName !== undefined && <Label text={labelName} height="16px" />}
                </TitleLabelContainer>
                {optionalComponent !== undefined && optionalComponent}
            </NavbarItemContentContainer>
        </>
    );
};
