import React from "react";
import { CardContainer, CardDescription, CardInfoContainer, CardName, ImageContainer, NameNewLabelContainer, RightArrowIcon } from "./style";
import { Label } from "../../../../../../shared/components/Label";

interface Props {
    subCategoriesData: {
        iconGraphics: JSX.Element;
        newLabel: boolean;
        name: string;
        description: string;
    };
}

export const NavbarSubCategoryCard: React.FC<Props> = ({ subCategoriesData }) => {
    const { iconGraphics, newLabel, name, description } = subCategoriesData;

    return (
        <CardContainer>
            <ImageContainer>{iconGraphics}</ImageContainer>
            <CardInfoContainer>
                <NameNewLabelContainer>
                    <CardName>{name}</CardName>
                    {newLabel && <Label text="new" />}
                </NameNewLabelContainer>
                <CardDescription>{description}</CardDescription>
            </CardInfoContainer>
            <RightArrowIcon />
        </CardContainer>
    );
};
