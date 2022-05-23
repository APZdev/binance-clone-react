import styled from "styled-components";
import SunIcon from "@mui/icons-material/LightMode";
import MoonIcon from "@mui/icons-material/DarkMode";

export const ThemeSwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LightModeIcon = styled(SunIcon)`
    width: 16px !important;
    color: ${(p) => p.theme.text.default};

    &:hover {
        color: ${(p) => p.theme.brand.default};
        cursor: pointer;
    }
`;

export const DarkModeIcon = styled(MoonIcon)`
    width: 16px !important;
    color: ${(p) => p.theme.text.default};

    &:hover {
        color: ${(p) => p.theme.brand.default};
        cursor: pointer;
    }
`;

export const ThemeIconContainer = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;

    color: ${(p) => p.theme.text.default};

    &:hover {
        color: ${(p) => p.theme.text.hover};
    }
`;
