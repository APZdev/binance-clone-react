import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { changeState } from "../../../slices/mobileNavbar";

import { AuthenticationSectionContainer, CloseButtonContainer, ClosingBackground, MobileNavbarContainer, NavbarContentContainer } from "./style";
import { FixedModalPortal } from "../../../shared/components/FixedModalPortal";
import { SvgIcon } from "../../../helpers/SVG/svgImport";
import { Button } from "../../../shared/components/Button";
import { Spacer } from "../../../shared/components/Spacer";
import { useMediaQuery } from "@mui/material";
import { CategoriesSection } from "./CategoriesSection";
import { DownloadLanguageCurrencyThemeSection } from "./DownloadLanguageCurrencyThemeSection";
import { AuthenticationSection } from "./AuthenticationSection";

export const MobileNavbar = () => {
    const dispatch = useDispatch();
    const navbarState = useSelector((state: RootState) => state.navbar.value);

    const downloadLanguageCurrencyThemeSectionCollapsed: boolean = useMediaQuery("(min-width:1246px)");
    const authenticationSectionCollapsed: boolean = useMediaQuery("(min-width:1055px)");
    const categoriesSectionCollapsed: boolean = useMediaQuery("(min-width:872px)");

    function ChangeMobileNavbarState(state: boolean): void {
        dispatch(changeState(state));
    }

    return (
        <>
            {!downloadLanguageCurrencyThemeSectionCollapsed && (
                <FixedModalPortal>
                    <MobileNavbarContainer>
                        <NavbarContentContainer isMobile={navbarState}>
                            <CloseButtonContainer
                                onClick={() => {
                                    ChangeMobileNavbarState(false);
                                }}
                            >
                                <SvgIcon id="close-f" width={24} height={24} />
                            </CloseButtonContainer>
                            {!authenticationSectionCollapsed && <AuthenticationSection />}
                            {!categoriesSectionCollapsed && <CategoriesSection />}
                            <div className="empty_space"></div>
                            {!downloadLanguageCurrencyThemeSectionCollapsed && <DownloadLanguageCurrencyThemeSection />}
                        </NavbarContentContainer>
                        {navbarState && (
                            <ClosingBackground
                                onClick={() => {
                                    ChangeMobileNavbarState(false);
                                }}
                            ></ClosingBackground>
                        )}
                    </MobileNavbarContainer>
                </FixedModalPortal>
            )}
        </>
    );
};
