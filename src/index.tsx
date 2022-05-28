import ReactDOM from "react-dom/client";
import React, { useEffect } from "react";

import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import Store from "./store/store";

import { App } from "./App";

export const Root: React.FC = () => {
    useEffect(() => {
        //if (bannerRef.current) bannerRef.current.scrollTo(0, 0);
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.StrictMode>
            <Provider store={Store}>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </Provider>
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Root />);
