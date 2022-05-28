import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { DownloadButtonContainer, DownloadLanguageCurrencyThemeContainer, NavbarSpacer, NavbarUserSectionContainer } from "./style";

export const DownloadLanguageCurrencyThemeSection: React.FC = () => {
    return (
        <DownloadLanguageCurrencyThemeContainer>
            <DownloadButtonContainer>Downloads</DownloadButtonContainer>
            <NavbarUserSectionContainer>
                <p>English</p>
                <NavbarSpacer />
                <p>USD</p>
                <NavbarSpacer />
                <ThemeSwitch />
            </NavbarUserSectionContainer>
        </DownloadLanguageCurrencyThemeContainer>
    );
};
