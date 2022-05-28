import React from "react";
import { desktopNavbarData } from "../../../../constants/navbarData";
import { NavbarCategory } from "./NavbarCategory";
import { NavbarCategoriesContainer } from "./style";

const NavbarCategories = () => {
    return (
        <>
            {desktopNavbarData.map(({ categoryGraphics, payWithBanner, subCategoriesColumnSize, labelText, subCategories }, index) => (
                <NavbarCategory
                    key={index}
                    categoryGraphics={categoryGraphics}
                    payWithBanner={payWithBanner}
                    labelText={labelText}
                    subCategoriesColumnSize={subCategoriesColumnSize}
                    subCategories={subCategories}
                />
            ))}
        </>
    );
};

export const CategoriesSection: React.FC = () => {
    return (
        <>
            <NavbarCategoriesContainer>
                <NavbarCategories />
            </NavbarCategoriesContainer>
        </>
    );
};
