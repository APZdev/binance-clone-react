import styled from "styled-components";

interface CategoryContainerProps {
    numberOfItems: number;
    payWith: boolean;
    categoryCollapsed: boolean;
}

export const NavbarSubCategoriesContainer = styled.div<CategoryContainerProps>`
    overflow: hidden;

    max-height: ${({ categoryCollapsed, numberOfItems, payWith }) =>
        categoryCollapsed ? "0px" : (48.09 * numberOfItems + 43 * (payWith ? 1 : 0)).toString() + "px"};
    transition: max-height 0.3s;
`;

export const NavbarCategoryContainer = styled.div``;

export const NavbarCategorySelectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;

    & .navbar_item_arrow_container {
        display: flex;
        align-items: center;
        justify-content: center;

        transition: transform 0.3s;
        transform: rotateX(180deg);
    }

    & .navbar_item_arrow_container.reversed {
        transform: rotateX(0deg);
    }
`;

export const SubCategoriesCardContainer = styled.div<{ subCategoriesColumnSize: number }>``;
