import { DownloadLanguageCurrencyThemeSection } from "./DownloadLanguageCurrencyThemeSection";

import { BinanceLogoContainer, BinanceNavLogoLink, DesktopNavbarContainer } from "./style";
import { useMediaQuery } from "@mui/material";
import { MobileNavbarSwitch } from "./MobileNavbarSwitch";
import { AuthenticationSection } from "./AuthenticationSection";
import { CategoriesSection } from "./CategoriesSection";
import { SvgIcon } from "../../../helpers/SVG/svgImport";

export const DesktopNavbar: React.FC = () => {
    const downloadLanguageCurrencyThemeSectionCollapsed: boolean = useMediaQuery("(min-width:1246px)");
    const authenticationSectionCollapsed: boolean = useMediaQuery("(min-width:1055px)");
    const categoriesSectionCollapsed: boolean = useMediaQuery("(min-width:872px)");

    return (
        <DesktopNavbarContainer>
            <BinanceNavLogoLink href="localhost:3000">
                <BinanceLogoContainer>
                    <SvgIcon id="binance-logo" width={120}></SvgIcon>
                </BinanceLogoContainer>
            </BinanceNavLogoLink>
            <CategoriesSection enabled={categoriesSectionCollapsed} />
            <div className="empty_space"></div>
            {authenticationSectionCollapsed && <AuthenticationSection />}
            {downloadLanguageCurrencyThemeSectionCollapsed && <DownloadLanguageCurrencyThemeSection />}
            {!downloadLanguageCurrencyThemeSectionCollapsed && <MobileNavbarSwitch />}
        </DesktopNavbarContainer>
    );
};
