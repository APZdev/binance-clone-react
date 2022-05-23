import { useDispatch, useSelector } from "react-redux";
import { SvgIcon } from "../../../../../helpers/SVG/svgImport";
import { changeTheme } from "../../../../../slices/theme";
import { RootState } from "../../../../../store/store";

import { ThemeIconContainer, ThemeSwitchContainer } from "./style";

export const ThemeSwitch: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <ThemeSwitchContainer>
            <ThemeIconContainer isDark={theme !== "dark"} className="theme_switch">
                {theme === "dark" ? <SvgIcon id="mode-dark" width={14} height={14} /> : <SvgIcon id="mode-light" width={14} height={14} />}
            </ThemeIconContainer>
        </ThemeSwitchContainer>
    );
};
