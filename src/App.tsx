import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

import { ThemeProvider } from "styled-components";
import { themeData } from "./shared/theme/theme";
import { ResetCss } from "./shared/theme/reset.css";
import { GlobalStyle } from "./shared/theme/global-style";

import { HomePage } from "./pages/index";
import { ReactComponent as BinanceIconBank } from "./assets/Images/SVG/binance-svg-bank.svg";
import { MobileAppBanner } from "./components/MobileAppBanner";

export const App: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <ThemeProvider theme={theme === "light" ? themeData.light.theme : themeData.dark.theme}>
            <GlobalStyle />
            <ResetCss />
            <BinanceIconBank />
            <>
                <MobileAppBanner />
                <HomePage />
            </>
        </ThemeProvider>
    );
};
