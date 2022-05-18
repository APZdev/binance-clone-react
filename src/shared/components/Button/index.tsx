import React from "react";
import { ButtonProps, CustomButton } from "./style";

export const Button: React.FC<ButtonProps> = ({ value, width, height, defaultTextColor, hoverTextColor, defaultBgColor, hoverBgColor, padding }) => {
    return (
        <CustomButton
            width={width}
            height={height}
            defaultTextColor={defaultTextColor}
            hoverTextColor={hoverTextColor}
            defaultBgColor={defaultBgColor}
            hoverBgColor={hoverBgColor}
            padding={padding}
        >
            {value}
        </CustomButton>
    );
};
