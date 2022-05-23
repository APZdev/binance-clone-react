import React from "react";
import { Label } from "../../../../../../shared/components/Label";
import { CardContainer, CardName } from "./style";

interface Props {
    subCategoriesData: {
        newLabel: boolean;
        name: string;
    };
}

export const NavbarSubCategoryCard: React.FC<Props> = ({ subCategoriesData }) => {
    const { newLabel, name } = subCategoriesData;

    return (
        <>
            <CardContainer>
                <CardName>{name}</CardName>
                {newLabel && <Label text="new" />}
            </CardContainer>
        </>
    );
};
