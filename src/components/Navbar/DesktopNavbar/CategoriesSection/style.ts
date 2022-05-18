import styled from "styled-components";

interface Props {
    enabled: boolean;
}

export const NavbarCategoriesContainer = styled.div<Props>`
    display: ${(props) => (props.enabled ? "flex" : "none")};
    align-items: center;
    float: left;

    & > div {
        display: flex;
        align-items: center;
        height: 100%;
    }
`;
