import styled from "styled-components";
import SunIcon from "@mui/icons-material/LightMode";
import MoonIcon from "@mui/icons-material/DarkMode";

interface ThemeStateProps {
    isDark: boolean;
}

export const ThemeSwitchContainer = styled.div`
    position: relative;

    width: 40px;
    height: 24px;
    border-radius: 9999px;

    background-color: ${(p) => p.theme.themeSwitch.default};
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

export const ThemeIconContainer = styled.div<ThemeStateProps>`
    position: absolute;
    top: 12%;
    left: 20%;

    transform: translateX(${({ isDark }) => (isDark ? "-45%" : "45%")});

    transition: transform 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50%;

    margin: 0 3px;

    width: 18px;
    height: 18px;

    color: rgb(112, 122, 138);
`;
