import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SteamIdProvider } from "./contexts/SteamIdContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SteamIdProvider>
      <App />
    </SteamIdProvider>
  </React.StrictMode>
);
