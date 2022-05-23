import React from "react";
import { CardContainer, CardDescription, CardName, RightArrowIcon } from "./style";
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
            <div className="image_container">{iconGraphics}</div>
            <div className="card_info_container">
                <div className="name_new_label_container">
                    <CardName>{name}</CardName>
                    {newLabel && <Label text="new" />}
                </div>
                <CardDescription>{description}</CardDescription>
            </div>
            <RightArrowIcon />
        </CardContainer>
    );
};
