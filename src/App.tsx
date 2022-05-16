import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./shared/theme/index";
import ResetCSS from "./shared/theme/reset.css";

import { HomePage } from "./pages/index";
import { ReactComponent as BinanceIconBank } from "./assets/Images/SVG/binance-svg-bank.svg";

function App() {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <ResetCSS />
            <BinanceIconBank />
            <>
                <HomePage />
            </>
        </ThemeProvider>
    );
}

export default App;
