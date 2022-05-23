import styled from "styled-components";

export const NavbarSubCategoriesContainer = styled.div`
    top: 64px;
    display: none;

    box-sizing: border-box;
    margin: 0;
    overflow: hidden;

    position: absolute;
    background-color: ${(p) => p.theme.desktopNavbar.default};
    box-shadow: 0px 0px 20px rgb(0 0 0 / 8%);
    border-radius: 0 0 8px 8px;

    & .empty_spacer {
        width: 100%;
        height: 0;
        padding-bottom: 16px;
    }
`;

export const NavbarCategoryContainer = styled.div`
    position: relative;

    &:hover ${NavbarSubCategoriesContainer} {
        display: block;
    }

    &:hover .category_arrow {
        transform: rotate3d(1, 0, 0, 180deg);
    }

    &:hover .category_icon,
    &:hover .category_title {
        color: ${(p) => p.theme.text.hover};
    }
`;

export const NavbarCategorySelectorContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 8px;

    & .category_arrow {
        margin: 0 3px 2px 3px;
        width: 12px;
        height: 12px;
        transition: transform 0.13s;

        color: #848e9c;
    }

    & > p {
        white-space: nowrap;
    }
`;

export const SubCategoriesCardContainer = styled.div<{ subCategoriesColumnSize: number }>`
    display: grid;
    grid-template-rows: repeat(${(p) => p.subCategoriesColumnSize}, min-content);
    grid-auto-flow: column;

    padding: 0 16px 16px 16px;
`;
