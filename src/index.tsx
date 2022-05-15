import ReactDOM from "react-dom/client";
import React from "react";

import { Provider } from "react-redux";
import Store from "./store/store";

import App from "./App";

function Root() {
    return (
        <React.StrictMode>
            <Provider store={Store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Root />);
