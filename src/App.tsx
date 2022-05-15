import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./shared/theme/index";
import ResetCSS from "./shared/theme/reset.css";

import { HomePage } from "./pages/index";

function App() {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <ResetCSS />
            <>
                <HomePage />
            </>
        </ThemeProvider>
    );
}

export default App;
