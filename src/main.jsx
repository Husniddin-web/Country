import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ModeProvider from "./context/Mode";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <App />
      </ModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
