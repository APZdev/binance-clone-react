import styled from "styled-components";

export const NavbarSubCategoriesContainer = styled.div`
    top: 64px;
    display: none;

    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    background-color: #ffffff;
    position: relative;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 8%);
    overflow: hidden;
    min-width: 200px;
    max-width: 400px;
    border-radius: 0 0 8px 8px;
    padding: 0 16px 16px 16px;

    position: absolute;
    background-color: ${(props) => props.theme.navbar.default};
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
`;

export const NavbarCategorySelectorContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 8px;

    & .category_arrow {
        margin: 0 6px;
        width: 8px;
        transition: transform 0.13s;

        color: #848e9c;
    }

    & > p {
        white-space: nowrap;
    }

    &:hover .category_arrow {
        transform: rotate3d(1, 0, 0, 180deg);
    }

    &:hover > p {
        color: ${(props) => props.theme.text.hover};
    }
`;
