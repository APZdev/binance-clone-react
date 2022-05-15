import "styled-components";

declare module "styled-components" {
    export interface Theme {
        bg: {
            default: string;
            secondary: string;
        };
        brand: {
            default: string;
            alt: string;
        };
        text: {
            default: string;
            secondary: string;
            alt: string;
            success: string;
            error: string;
            reverse: string;
            placeholder: string;
        };
        button: {
            default: string;
        };
    }
}
