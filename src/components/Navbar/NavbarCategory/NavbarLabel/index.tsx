import React from "react";

import { LabelContainer } from "./style";

export default function NavbarLabel(text: any) {
    return <LabelContainer>{text.text}</LabelContainer>;
}
