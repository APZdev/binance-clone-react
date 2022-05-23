import React from "react";
import { CustomSpacer } from "./style";

interface Props {
    width?: number;
    height?: number;
}

export const Spacer: React.FC<Props> = ({ width, height }) => {
    return (
        <>
            <CustomSpacer width={width} height={height} />
        </>
    );
};
