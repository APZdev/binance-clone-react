import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { changeState } from "../../../slices/mobileNavbar";

import { CloseButtonContainer, ClosingBackground, MobileNavbarContainer, NavbarContentContainer } from "./style";
import { FixedModalPortal } from "../../../shared/components/FixedModalPortal";
import { SvgIcon } from "../../../helpers/SVG/svgImport";
import { useMediaQuery } from "@mui/material";
import { CategoriesSection } from "./CategoriesSection";
import { DownloadLanguageCurrencyThemeSection } from "./DownloadLanguageCurrencyThemeSection";
import { AuthenticationSection } from "./AuthenticationSection";

export const MobileNavbar = () => {
    const dispatch = useDispatch();
    const navbarState = useSelector((state: RootState) => state.navbar.value);

    const downloadLanguageCurrencyThemeSectionCollapsed = useMediaQuery("(min-width:1246px)");
    const authenticationSectionCollapsed = useMediaQuery("(min-width:1055px)");
    const categoriesSectionCollapsed = useMediaQuery("(min-width:872px)");

    const ChangeMobileNavbarState = (state: boolean): void => {
        dispatch(changeState(state));
    };

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
