import React from "react";

import { LabelContainer } from "./style";

interface Props {
    text: string;
    height?: string;
}

export const Label: React.FC<Props> = ({ text, height }) => {
    return <LabelContainer height={height}>{text}</LabelContainer>;
};
