import React from "react";
import { navbarData } from "../../../../constants/navbarData";
import { NavbarCategory } from "../NavbarCategory";
import { NavbarCategoriesContainer } from "./style";

const NavbarCategories = () => {
    return (
        <>
            {navbarData.map((item, index) => (
                <NavbarCategory key={index} item={item} />
            ))}
        </>
    );
};

interface Props {
    enabled: boolean;
}

export const CategoriesSection: React.FC<Props> = ({ enabled }) => {
    return (
        <>
            <NavbarCategoriesContainer enabled={enabled}>
                <NavbarCategories />
            </NavbarCategoriesContainer>
        </>
    );
};
