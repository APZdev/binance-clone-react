import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
    children: ReactNode;
}

export class FixedModalPortal extends React.Component<Props> {
    modalRoot = document.getElementById("fixed-modal")!;
    element: HTMLElement;

    constructor(props: Props) {
        super(props);
        this.element = document.createElement("div");
        this.element.classList.add("portal-modal");
        this.element.style.pointerEvents = "none";
        this.element.style.position = "absolute";
        this.element.style.width = "100%";
        this.element.style.height = "100%";
    }

    componentDidMount() {
        this.modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.element);
    }
}
