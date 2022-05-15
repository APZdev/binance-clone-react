import styled from "styled-components";

import EastIcon from "@mui/icons-material/East";

export const RightArrowIcon = styled(EastIcon)`
    opacity: 0;
    color: ${(props) => props.theme.text.default};

    transition: all 0.25s linear;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px;

    & .image_container {
        width: 40px;
        height: 40px;
    }

    & .card_info_container {
        margin: 0 16px;
    }

    &:hover ${RightArrowIcon} {
        opacity: 1;
        color: ${(props) => props.theme.text.hover};

        transition: all 0.25s linear;
    }
`;

export const CardName = styled.p`
    font-size: 16px;
    color: ${(props) => props.theme.text.default};
`;

export const CardDescription = styled.p`
    font-size: 12px;
    color: ${(props) => props.theme.text.alt};
`;
