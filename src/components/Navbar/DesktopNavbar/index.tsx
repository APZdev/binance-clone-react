import { DownloadLanguageCurrencyThemeSection } from "./DownloadLanguageCurrencyThemeSection";

import { BinanceLogoContainer, BinanceNavLogoLink, DesktopNavbarContainer, EmptySpace } from "./style";
import { useMediaQuery } from "@mui/material";
import { MobileNavbarSwitch } from "./MobileNavbarSwitch";
import { AuthenticationSection } from "./AuthenticationSection";
import { CategoriesSection } from "./CategoriesSection";
import { SvgIcon } from "../../../helpers/SVG/svgImport";
import React from "react";

export const DesktopNavbar: React.FC = () => {
    const downloadLanguageCurrencyThemeSectionCollapsed = useMediaQuery("(min-width:1246px)");
    const authenticationSectionCollapsed = useMediaQuery("(min-width:1055px)");
    const categoriesSectionCollapsed = useMediaQuery("(min-width:872px)");

    return (
        <DesktopNavbarContainer>
            <BinanceNavLogoLink href="https://binance-clone-react.vercel.app/">
                <BinanceLogoContainer>
                    <SvgIcon id="binance-logo" width={120}></SvgIcon>
                </BinanceLogoContainer>
            </BinanceNavLogoLink>
            {categoriesSectionCollapsed && <CategoriesSection />}
            <EmptySpace />
            {authenticationSectionCollapsed && <AuthenticationSection />}
            {downloadLanguageCurrencyThemeSectionCollapsed && <DownloadLanguageCurrencyThemeSection />}
            {!downloadLanguageCurrencyThemeSectionCollapsed && <MobileNavbarSwitch />}
        </DesktopNavbarContainer>
    );
};
