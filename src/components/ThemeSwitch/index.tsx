import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../slices/theme";
import { RootState } from "../../store/store";

import { LightModeIcon, DarkModeIcon } from "./style";

export default function ThemeSwitch() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <div
            onClick={() => {
                dispatch(changeTheme());
            }}
        >
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
    );
}
