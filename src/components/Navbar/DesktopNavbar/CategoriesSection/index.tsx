import React from "react";
import { desktopNavbarData } from "../../../../constants/navbarData";
import { NavbarCategory } from "./NavbarCategory";
import { NavbarCategoriesContainer } from "./style";

const NavbarCategories = () => {
    return (
        <>
            {desktopNavbarData.map((item, index) => (
                <NavbarCategory key={index} item={item} />
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
