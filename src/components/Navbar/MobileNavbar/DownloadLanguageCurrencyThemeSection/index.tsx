import React from "react";
import { SvgIcon } from "../../../../helpers/SVG/svgImport";
import { ThemeSwitch } from "./ThemeSwitch";
import { NavbarItem } from "../NavbarItem";
import { DownloadLanguageCurrencyThemeContainer } from "./style";
import { changeTheme } from "../../../../slices/theme";
import { useDispatch } from "react-redux";

export const DownloadLanguageCurrencyThemeSection: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <DownloadLanguageCurrencyThemeContainer>
            <div
                onClick={() => {
                    dispatch(changeTheme());
                }}
            >
                <NavbarItem icon={<SvgIcon id="logo" />} name="Theme" optionalComponent={<ThemeSwitch />} />
            </div>
            <NavbarItem icon={<SvgIcon id="app-download-f" />} name="Downloads" />
            <NavbarItem icon={<SvgIcon id="language-f" />} name="English" />
            <NavbarItem icon={<SvgIcon id="earn-s24" />} name="USD" />
        </DownloadLanguageCurrencyThemeContainer>
    );
};
