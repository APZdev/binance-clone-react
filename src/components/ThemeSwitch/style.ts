import styled from "styled-components";
import SunIcon from "@mui/icons-material/LightMode";
import MoonIcon from "@mui/icons-material/DarkMode";

export const NavbarContainer = styled.div`
    width: 100vw;
    min-height: 64px;
    background-color: ${(props) => props.theme.bg.default};
`;

export const SwitchButton = styled.button`
    width: 100px;
    height: 100px;
`;

export const LightModeIcon = styled(SunIcon)`
    width: 16px !important;
    color: ${(props) => props.theme.text.default};

    &:hover {
        color: ${(props) => props.theme.brand.default};
        cursor: pointer;
    }
`;

export const DarkModeIcon = styled(MoonIcon)`
    width: 16px !important;
    color: ${(props) => props.theme.text.default};

    &:hover {
        color: ${(props) => props.theme.brand.default};
        cursor: pointer;
    }
`;
