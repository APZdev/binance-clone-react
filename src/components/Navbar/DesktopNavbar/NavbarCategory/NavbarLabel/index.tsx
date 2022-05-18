import React from "react";

import { LabelContainer } from "./style";

export const NavbarLabel: React.FC<{ text: string }> = ({ text }) => {
    return <LabelContainer>{text}</LabelContainer>;
};
