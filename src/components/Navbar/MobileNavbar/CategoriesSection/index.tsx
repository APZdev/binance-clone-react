import React from "react";
import { mobileNavbarData } from "../../../../constants/navbarData";
import { NavbarCategory } from "./NavbarCategory";
import { NavbarCategoriesContainer } from "./style";

const NavbarCategories = () => {
    return (
        <>
            {mobileNavbarData.map((item, index) => (
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
