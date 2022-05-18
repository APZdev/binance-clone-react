import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { changeState } from "../../../slices/mobileNavbar";

import { ClosingBackground, MobileNavbarContainer, NavbarContentContainer } from "./style";
import { FixedModalPortal } from "../../../shared/components/FixedModalPortal";

export const MobileNavbar = () => {
    const dispatch = useDispatch();
    const navbarState = useSelector((state: RootState) => state.navbar.value);

    return (
        <FixedModalPortal>
            <MobileNavbarContainer>
                <NavbarContentContainer isMobile={navbarState}>Test</NavbarContentContainer>
                {navbarState ? (
                    <ClosingBackground
                        onClick={() => {
                            dispatch(changeState(false));
                        }}
                    ></ClosingBackground>
                ) : (
                    <></>
                )}
            </MobileNavbarContainer>
        </FixedModalPortal>
    );
};
