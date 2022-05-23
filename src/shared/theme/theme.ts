const theme = {
    dark: {
        theme: {
            bg: {
                default: "#0B0E11",
                secondary: "#181A20",
            },
            desktopNavbar: {
                default: "#1e2329",
                hover: "#2b3139",
            },
            mobileNavbar: {
                default: "#1e2329",
                hover: "#2b3139",
            },
            brand: {
                default: "#F0B90B",
                alt: "#FCD535",
            },
            text: {
                default: "#EAECEF",
                secondary: "#EAECEF",
                hover: "#F0B90B",
                alt: "#848E9C",
                reverse: "#FBD84955",
                placeholder: "#7C8894",
            },
            button: {
                default: "#fcd535",
                hover: "#F0B90B",
                text: "#181a20",
            },
            border: {
                default: "#272a2e",
            },
            warn: {
                default: "#CF304A",
            },
            success: {
                default: "#03A66D",
            },
            themeSwitch: {
                default: "#474d57",
            },
        },
    },
    light: {
        theme: {
            bg: {
                default: "#FAFAFA",
                secondary: "#FFFFFF",
            },
            desktopNavbar: {
                default: "#FFFFFF",
                hover: "#F5F5F5",
            },
            mobileNavbar: {
                default: "#FFFFFF",
                hover: "#F5F5F5",
            },
            brand: {
                default: "#F0B90B",
                alt: "#FCD535",
            },
            text: {
                default: "#1E2329",
                secondary: "#1E2329",
                hover: "#F0B90B",
                alt: "#848E9C",
                reverse: "#FBD84955",
                placeholder: "#7C8894",
            },
            button: {
                default: "#fcd535",
                hover: "#FCD94A",
                text: "#181a20",
            },
            border: {
                default: "#eaecef",
            },
            warn: {
                default: "#CF304A",
            },
            success: {
                default: "#03A66D",
            },
            themeSwitch: {
                default: "#eaecef",
            },
        },
    },
};

export const themeData = theme;
export type ThemeType = typeof theme.dark;
