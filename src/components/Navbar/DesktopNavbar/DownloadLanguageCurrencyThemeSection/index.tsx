import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { DownloadLanguageCurrencyThemeContainer } from "./style";

export const DownloadLanguageCurrencyThemeSection: React.FC = () => {
    return (
        <DownloadLanguageCurrencyThemeContainer>
            <div className="download_button_container">
                <p>Downloads</p>
            </div>
            <div className="navbar_user_section_container">
                <p>English</p>
                <div className="navbar_spacer" />
                <p>USD</p>
                <div className="navbar_spacer" />
                <ThemeSwitch />
            </div>
        </DownloadLanguageCurrencyThemeContainer>
    );
};
