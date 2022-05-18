import { useDispatch, useSelector } from "react-redux";
import { SvgIcon } from "../../helpers/SVG/svgImport";
import { changeTheme } from "../../slices/theme";
import { RootState } from "../../store/store";

import { ThemeIconContainer, ThemeSwitchContainer } from "./style";

export const ThemeSwitch: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <ThemeSwitchContainer
            onClick={() => {
                dispatch(changeTheme());
            }}
        >
            <ThemeIconContainer>
                {theme === "dark" ? <SvgIcon id="mode-light" width={16} height={16} /> : <SvgIcon id="mode-dark" width={16} height={16} />}
            </ThemeIconContainer>
        </ThemeSwitchContainer>
    );
};
