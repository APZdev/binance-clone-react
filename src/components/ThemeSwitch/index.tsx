import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../slices/theme";
import { RootState } from "../../store/store";

import { LightModeIcon, DarkModeIcon, ThemeSwitchContainer } from "./style";

export default function ThemeSwitch() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <ThemeSwitchContainer
            onClick={() => {
                dispatch(changeTheme());
            }}
        >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </ThemeSwitchContainer>
    );
}
