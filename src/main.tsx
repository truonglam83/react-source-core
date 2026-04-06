import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "@/store/store";

import "./styles/index.scss";
/**
 * Application Entry Point
 *
 * Responsibilities:
 * - Mount React app
 * - Inject Redux store globally
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
