import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SvgIcon } from "../../../../helpers/SVG/svgImport";
import { changeState } from "../../../../slices/mobileNavbar";
import { RootState } from "../../../../store/store";
import { SwitchContainer } from "./style";

export const MobileNavbarSwitch: React.FC = () => {
    const dispatch = useDispatch();
    const mobileNavbarState = useSelector((state: RootState) => state.navbar.value);

    useEffect(() => {
        if (mobileNavbarState) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "overlay";
        }
    }, [mobileNavbarState]);

    return (
        <>
            <SwitchContainer
                onClick={() => {
                    dispatch(changeState(true));
                }}
            >
                <SvgIcon id="menu-hamburger" />
            </SwitchContainer>
        </>
    );
};
