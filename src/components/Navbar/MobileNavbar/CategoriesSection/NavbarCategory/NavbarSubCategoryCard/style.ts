import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;

    padding: 16px 16px 16px 36px;

    &:hover {
        background-color: ${(p) => p.theme.mobileNavbar.hover};
    }
`;

export const CardName = styled.p`
    margin-left: 12px;
`;

export const CardDescription = styled.p``;
