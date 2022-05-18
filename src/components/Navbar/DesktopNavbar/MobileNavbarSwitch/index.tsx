import React from "react";
import { useDispatch } from "react-redux";
import { SvgIcon } from "../../../../helpers/SVG/svgImport";
import { changeState } from "../../../../slices/mobileNavbar";
import { SwitchContainer } from "./style";

export const MobileNavbarSwitch: React.FC = () => {
    const dispatch = useDispatch();

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
